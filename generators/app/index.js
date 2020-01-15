"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the ${chalk.red("generator-hchiam-learning")} generator!`
      )
    );

    // Example prompt:
    // const prompts = [
    //   {
    //     type: 'confirm',
    //     name: 'someAnswer',
    //     message: 'Would you like to enable this option?',
    //     default: true
    //   }
    // ];
    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
  }

  writing() {
    // Example copyTpl with template instead of simple copy file:
    // this.fs.copyTpl(
    //   this.templatePath("_file.extension"),
    //   this."estinationPath('file.extension'),"{
    //     name: this.props.name // <%= name %> in the file
    //   }
    // );
    this.fs.copy(
      this.templatePath("_.eslintignore"),
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
      this.templatePath("_.index.js"),
      this.destinationPath("index.js")
    );
    this.fs.copy(
      this.templatePath("_index.test.js"),
      this.destinationPath("index.test.js")
    );
    this.fs.copy(
      this.templatePath("_package.json"),
      this.destinationPath("package.json")
    );
    this.fs.copy(
      this.templatePath("_README.md"),
      this.destinationPath("README.md")
    );
  }

  install() {
    this.installDependencies();
  }
};
