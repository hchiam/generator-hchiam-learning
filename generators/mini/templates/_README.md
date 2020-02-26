# Learning <%= whatLearningName %>

Just one of the things I'm learning. <https://github.com/<%= author %>/learning><%= description ? '\n\n' + description : '' %>

---

[![generator-hchiam-learning](https://img.shields.io/badge/built%20with-generator--hchiam--learning-brightgreen.svg)](https://github.com/hchiam/generator-hchiam-learning) 

You can generate a [dependency graph](https://github.com/hchiam/learning-dependency-cruiser) with `npm run deps` (which runs `bash show_dep_graph.sh`).

You can publish a live site to [surge](https://github.com/hchiam/learning-surge) with `bash publish_live_site.sh` (Just go into the relevant enclosing `src` or `public` folder of your site files - a CNAME file is there for convenience).

You can zip the current folder with `npm run zip`.

This file was first created using the Yeoman generator [`generator-hchiam-learning`](https://www.npmjs.com/package/generator-hchiam-learning).
