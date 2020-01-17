#!/bin/bash

curl -u '<%= author %>' https://api.github.com/user/repos -d '{"name":"learning-<%= whatLearningLink %>", "description":"<%= description %>"}'
git remote add origin 'git@github.com:<%= author %>/learning-<%= whatLearningLink %>.git'
git push --set-upstream origin master
git add .
git commit -m "Set up repo"
git push;
echo; echo -------; echo;
git status

git remote set-url origin https://github.com/<%= author %>/learning-<%= whatLearningLink %>.git

git remote add origin 'git@github.com:<%= author %>/learning-<%= whatLearningLink %>.git'
git push --set-upstream origin master
git add .
git commit -m "Set up repo"
git push;
echo; echo -------; echo;
git status
