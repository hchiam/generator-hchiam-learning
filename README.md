# `generator-hchiam-learning`

[![NPM Download Stats](https://nodei.co/npm/generator-hchiam-learning.png?downloads=true)](https://www.npmjs.com/package/generator-hchiam-learning?activeTab=readme)

A Yeoman generator to create another of my learning repos.

Just one of the things I'm learning. <https://github.com/hchiam/learning>

## Learn from:

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
# customize code and files
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
# customize code and files
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
