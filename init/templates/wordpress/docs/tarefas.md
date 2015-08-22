# Tarefas de Automação

---

```bash
# Compile, Lint and Minify Styles and Scripts files
# - stylesheets
# - javascripts
$ grunt build

# Run Build task and prepare for Development Env
# - build
# - clean:dev
# - copy:dev
# - compress:dev
$ grunt dev

# Run Build task and prepare for Production Env
# - build
# - clean:prod
# - copy:prod
# - compress:prod
$ grunt prod

# Run Tasks for Stylesheets
# - compass
# - uncss
# - csscomb
# - csslint
# - cssmin
$ grunt stylesheets

# Run Tasks for Scripts
# - jshint
# - browserify
# - uglify:main
$ grunt javascripts

# Run Tasks for Assets (images and fonts only)
# - imagemin
# - svgmin
# - grunticon
$ grunt assets

# Scaffold the project (first-time install only)
# - copy:styles
# - copy:scripts
# - copy:vendors
# - copy:plugins
# - uglify:modernizr
# - clean:vendors
$ grunt start

# Run Unit Tests
# - build
# - mocha
$ grunt tdd

# Run E2E Tests
# - build
# - casper
$ grunt e2e

# Run Perf Tests
# - pagespeed
# - sitespeedio
$ grunt perf

# Run FTP Deploy
# - build
# - ftp-deploy
$ grunt ftp

# Run Rsync Deploy
# - build
# - rsync
$ grunt rsync

# Versionate Project on Github
# - build
# - bump
$ grunt git

# Make a translate file for WordPress
# - makepot
# - potomo
$ grunt translate
```

> For more info, check the `aliases.yaml` file
