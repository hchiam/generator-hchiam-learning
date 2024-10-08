# `generator-hchiam-learning`

[![version](https://img.shields.io/npm/v/generator-hchiam-learning.svg)](https://www.npmjs.com/package/generator-hchiam-learning)

A Yeoman generator to create another of my [learning repos](https://github.com/hchiam/learning-something).

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Key files: [`index.js`](https://github.com/hchiam/generator-hchiam-learning/blob/master/generators/app/index.js) and [`templates` folder](https://github.com/hchiam/generator-hchiam-learning/tree/master/generators/app/templates)

## Using `generator-hchiam-learning`

```bash
npm install -g generator-hchiam-learning
mkdir learning-something
cd learning-something
yo hchiam-learning
```

You might need to install [Node.JS](https://nodejs.org) and Yeoman first: `npm install -g yo`. After running `yo hchiam-learning`, you should get something like this template repo: <https://github.com/hchiam/learning-something>

## Sub-generator

```bash
yo hchiam-learning:mini
```

## There's tons of other generators you can use to get up and running faster

Just use the searchbar: <https://yeoman.io/generators>

## Learn to build your own

* <https://yeoman.io/authoring>
* <https://github.com/yeoman/generator-generator>
* <https://scotch.io/tutorials/create-a-custom-yeoman-generator-in-4-easy-steps>
* <https://github.com/christiannwamba/generator-scotchmean/blob/master/generators/app/index.js>

## Starting from this repo

```bash
git clone https://github.com/hchiam/generator-hchiam-learning.git
cd generator-hchiam-learning
npm install
# (customize code and files)
npm link
npm publish
cd ~/Desktop
mkdir learning-something
cd learning-something
yo hchiam-learning
```

## Starting from scratch (not using this repo)

```bash
npm install -g yo
npm install -g generator-generator
mkdir generator-my-generator
cd generator-my-generator
yo generator
# (customize code and files)
npm link
npm publish
cd ~/Desktop
mkdir some-repo
cd some-repo
yo my-generator
```

## A newer example of how to publish to npm

(package.json setup only + `yarn publish`): 

- https://github.com/hchiam/trysterollup/tree/24457690a715e1c57e701b0d51e3b6fd3e50491c
- https://github.com/hchiam/trysterollup/blob/24457690a715e1c57e701b0d51e3b6fd3e50491c/package.json

## If you want to create a generator for a private project

You can avoid accidentally publishing to npm. This field is set by default in the generated `package.json`:

```json
"private": true
```

More info in the [npm docs](https://docs.npmjs.com/files/package.json#private).

## Some interesting scripts to consider

```json
{
  ...
  "scripts": {
    "start": "open build/index.html",
    "build": "babel src/index.js --out-file build/index.js; parcel build src/index.html --out-dir build --no-source-maps --no-cache; rm -rf dist; rm build/src.*.js",
    "test": "jest --passWithNoTests",
    "lint": "eslint src/*.js --max-warnings=0",
    "fix": "eslint --fix src/*.js",
    "fast": "nodemon -e js,html -w src -x 'npm run lint; npm run test; npm run build; npm run start;'"
  },
  ...
}
```

Also consider using Cucumber Gherkin to connect "plain English" feature files to Cypress tests. Simple example: <https://github.com/hchiam/learning-cypress/tree/master/cucumber#tutorial-to-try-out-combining-cucumberjs-and-cypress>

## Troubleshooting

You can update to the current version by running the global install command again: `npm install -g generator-hchiam-learning`

`npm link` has the side-effect of creating a folder like this: `/Users/<username>/.nvm/versions/node/v10.13.0/lib/node_modules/generator-hchiam-learning` (you might need to delete that folder if you get an error that references it when you try to run `npm install -g generator-hchiam-learning`)

## A simpler alternative

https://github.com/hchiam/learning-template
