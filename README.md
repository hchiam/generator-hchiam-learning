# `generator-hchiam-learning`

[![NPM Download Stats](https://nodei.co/npm/generator-hchiam-learning.png?downloads=true)](https://www.npmjs.com/package/generator-hchiam-learning?activeTab=readme)

A Yeoman generator to create another of my [learning repos](https://github.com/hchiam/learning-something).

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Key files: [`index.js`](https://github.com/hchiam/generator-hchiam-learning/blob/master/generators/app/index.js) and [`templates` folder](https://github.com/hchiam/generator-hchiam-learning/tree/master/generators/app/templates)

## Learn from

* <https://yeoman.io/authoring>
* <https://github.com/yeoman/generator-generator>
* <https://scotch.io/tutorials/create-a-custom-yeoman-generator-in-4-easy-steps>
* <https://github.com/christiannwamba/generator-scotchmean/blob/master/generators/app/index.js>

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

## Using `generator-hchiam-learning`

```bash
npm install -g generator-hchiam-learning
mkdir learning-something
cd learning-something
yo hchiam-learning
```

You should get something like this template repo: <https://github.com/hchiam/learning-something>

## Troubleshooting

You can update to the current version by running the global install command again: `npm install -g generator-hchiam-learning`

`npm link` has the side-effect of creating a folder like this: `/Users/<username>/.nvm/versions/node/v10.13.0/lib/node_modules/generator-hchiam-learning` (you might need to delete that folder if you get an error that references it when you try to run `npm install -g generator-hchiam-learning`)
