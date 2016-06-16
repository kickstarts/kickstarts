# General Boilerplate

Generate a new project based on General Scaffolding.


## Requires

- [Node.JS](http://nodejs.org/)
- [JSPM](http://jspm.io/)
- [Gulp](http://gruntjs.com)
- [Sass](http://sass-lang.com/)


## Usage

1. Clone this repo from `https://github.com/user/repository-name.git`
2. Run `npm install` in the root directory (will automatically run `jspm install`)
3. Run `gulp`to start the local dev server (you may need to install Gulp locally using `npm install -g gulp`)
4. Profit!

## Running Tests

This project cover severals tests. You can run functional, integration, unit and regressive tests.

- Run `gulp rwd` to start a functional test with ...
- Run `gulp tdd` to start a functional test with ...
- Run `gulp e2e` to start a functional test with ...

## Generating documentation

Run `gulp docs` to generate documentation for your JavaScript and Sass automatically in the `docs` folder.

## Deploy for Production

Run `gulp deploy` to build the app for distribution and deploy it.

> Note: You can upload files for production using FTP or Rsync. For more information, check the "deploy" task at `gulpfile.js` and `gulp_modules/deploy.js` for proper settings.


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
