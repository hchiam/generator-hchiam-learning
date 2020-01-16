"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red("hchiam-learning")} generator!`)
    );

    const prompts = [
      {
        type: "input",
        name: "whatLearning",
        message: "What are you learning?",
        default: this.appname.replace("learning-", "") // Default to current folder name
      },
      {
        type: "input",
        name: "description",
        message: "Project description?",
        default: ""
      },
      {
        type: "input",
        name: "author",
        message: "Author?",
        default: this.user.git.name()
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use something like this.props.whatLearning;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath("_.eslintignore"), // Prefix with _ to avoid affecting this generator repo's scripts
      this.destinationPath(".eslintignore")
    );
    this.fs.copy(
      this.templatePath("_.eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    );
    this.fs.copy(
      this.templatePath("_.gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath("_.travis.yml"),
      this.destinationPath(".travis.yml")
    );
    this.fs.copy(
      this.templatePath("_index.js"),
      this.destinationPath("index.js")
    );
    this.fs.copy(
      this.templatePath("_index.test.js"),
      this.destinationPath("index.test.js")
    );
    this.fs.copyTpl(
      this.templatePath("_package.json"),
      this.destinationPath("package.json"),
      {
        whatLearning: this.props.whatLearning, // <%= whatLearning %> in the file
        description: this.props.description,
        author: this.props.author
      }
    );
    this.fs.copyTpl(
      this.templatePath("_README.md"),
      this.destinationPath("README.md"),
      {
        whatLearning: this.props.whatLearning, // <%= whatLearning %> in the file
        description: this.props.description,
        author: this.props.author
      }
    );
  }

  install() {
    this.spawnCommand("git", ["init"]);
    this.installDependencies();
  }
};
