"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");
const commandExists = require("command-exists").sync;

module.exports = class extends Generator {
  prompting() {
    const versionNumber = this.fs.readJSON(
      path.join(__dirname, "../..", "package.json")
    ).version;
    this.log(
      yosay(
        `Welcome to the ${chalk.red(
          "hchiam-learning"
        )} generator ${versionNumber}`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "whatLearning",
        message: "What are you learning?",
        default: this.appname.replace(/learning[ -]?/i, "") // Default to current folder name
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
    this.fs.copy(this.templatePath("cypress"), this.destinationPath("cypress"));
    this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
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
      this.templatePath("_cypress.json"),
      this.destinationPath("cypress.json")
    );
    this.fs.copy(
      this.templatePath("_lighthouserc.json"),
      this.destinationPath("lighthouserc.json")
    );
    this.fs.copyTpl(
      this.templatePath("_package.json"),
      this.destinationPath("package.json"),
      {
        whatLearningLink: this.props.whatLearning
          .replace(/ /g, "-")
          .toLowerCase(), // <%= whatLearningLink %> in the file
        description: this.props.description,
        author: this.props.author
      }
    );
    this.fs.copy(
      this.templatePath("_postcss.config.js"),
      this.destinationPath("postcss.config.js")
    );
    this.fs.copy(
      this.templatePath("_publish_live_site.sh"),
      this.destinationPath("publish_live_site.sh")
    );
    this.fs.copyTpl(
      this.templatePath("_README.md"),
      this.destinationPath("README.md"),
      {
        whatLearningName: this.props.whatLearning, // <%= whatLearningName %> in the file
        whatLearningLink: this.props.whatLearning
          .replace(/ /g, "-")
          .toLowerCase(),
        description: this.props.description,
        author: this.props.author
      }
    );
    this.fs.copy(
      this.templatePath("_show_dep_graph.sh"),
      this.destinationPath("show_dep_graph.sh")
    );
    this.fs.copy(
      this.templatePath("_tailwind.js"),
      this.destinationPath("tailwind.js")
    );
    this.fs.copyTpl(
      this.templatePath("_your_first_commit.sh"),
      this.destinationPath("your_first_commit.sh"),
      {
        whatLearningName: this.props.whatLearning,
        whatLearningLink: this.props.whatLearning
          .replace(/ /g, "-")
          .toLowerCase(),
        description: this.props.description,
        author: this.props.author
      }
    );
  }

  install() {
    this.spawnCommand("git", ["init"]);
    const hasYarn = commandExists("yarn");
    this.installDependencies({
      npm: !hasYarn,
      bower: false,
      yarn: hasYarn
    });
  }

  end() {
    this.log(
      "\n--------------------\n--------------------\n--------------------" +
        "\nYou can run " +
        chalk.bold.yellow("bash your_first_commit.sh") +
        " to add the project to your GitHub:\n" +
        "https://github.com/" +
        this.props.author +
        "/learning-" +
        this.props.whatLearning.replace(/ /g, "-").toLowerCase() +
        "\n"
    );
  }
};
