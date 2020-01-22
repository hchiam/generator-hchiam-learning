"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-hchiam-learning:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file(["src/index.js"]);
    assert.file(["src/index.test.js"]);
    assert.file([".eslintignore"]);
    assert.file([".eslintrc.js"]);
    assert.file([".gitignore"]);
    assert.file([".travis.yml"]);
    assert.file(["package.json"]);
    assert.file(["README.md"]);
    assert.file(["show_dep_graph.sh"]);
    assert.file(["your_first_commit.sh"]);
  });
});
