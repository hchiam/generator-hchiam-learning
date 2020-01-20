function installDotIfMissing() {
  if ! [ -x "$(command -v dot)" ]; then
    echo 'Error: dot graphviz is not set up or installed.'
    command -v eslint
  fi
}

function createDependencyGraph() {
  depcruise --exclude "^node_modules" --output-type dot src | dot -T svg > dependencygraph.svg
  echo 'Open dependencygraph.svg in a browser/viewer.'
}

function showDependencyGraph() {
  # try to open in Firefox or Chrome
  open -a "Firefox" dependencygraph.svg || \
  open -a "Google Chrome" dependencygraph.svg || true
}

installDotIfMissing
createDependencyGraph
showDependencyGraph
