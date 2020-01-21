function askForMaxDepth() {
  read -p "Enter max depth: " maxDepth
}

function installDotIfMissing() {
  if ! [ -x "$(command -v dot)" ]; then
    echo 'Error: dot graphviz is not set up or installed. Attempting install now.'
    command -v eslint
  fi
}

function getSrcFolder() {
  read -p "Enter src folder: " srcFolder
}

function createDependencyGraph() {
  depcruise --max-depth $maxDepth --exclude "^node_modules" --output-type dot $srcFolder | dot -T svg > dependencygraph.svg
  echo 'Open dependencygraph.svg in a browser/viewer.'
}

function showDependencyGraph() {
  # try to open in Firefox or Chrome
  open -a "Firefox" dependencygraph.svg || \
  open -a "Google Chrome" dependencygraph.svg || true
}

askForMaxDepth
installDotIfMissing
if [ ! -d src ]; then
  echo "src folder missing"
  getSrcFolder
else
  srcFolder="src"
fi
createDependencyGraph
showDependencyGraph
