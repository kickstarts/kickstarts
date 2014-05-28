# M.E.A.N. Stack Boilerplate

Generate a new project based on MEAN Stack (MongoDB, ExpressJS, AngularJS and Node.js).

> WORK IN PROGRESS


## Requires

- [Node.JS](http://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)
- [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io)
- [PhantomJS](http://phantomjs.org/)
- [Karma](http://karma-runner.github.io/0.12/index.html)
- [Browserify](http://browserify.org/)

## Instructions

**STEP 1: Create your database**

```
1. In your Shell, type `mongo`.
2. Create a new database typing `use name_of_database`.
```

**STEP 2: Set your configurations**

```
1. Set app configurations in `./config/app.js` file.
2. Set task configuration in `./config/taks.js` file.
3. Run `npm i` to install dependencies.
```

**STEP 3: Bootstrap your application**

**STEP 4: In meantime, run the available tasks**

```bash
# Unit Tests
$ gulp mocha

# Bundle Scripts
$ gulp bundle

# Build App
$ gulp build

# Run all (clean, build, start server, lint and watch for changes)
$ gulp
```

## Includes

**Main**
- [MongoDB](http://www.mongodb.org/) - An open-source document database, and the leading NoSQL database.
- [Express](http://expressjs.com/) - Web application framework for Node
- [AngularJS](http://backbonejs.org/) - MV* framework
- [Gulp](http://gulpjs.com/) - The streaming build system
- [Jade](https://github.com/visionmedia/jade) - Robust, elegant, feature-rich template engine for nodejs
- [Stylus](https://github.com/LearnBoost/stylus) - Robust, expressive, and feature-rich CSS superset
- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) - General elements for Scaffolding
- [jQuery](http://jquery.com/) - JavaScript library
- [Normalize](http://necolas.github.io/normalize.css/) - For standardize CSS elements
- [Modernizr](http://modernizr.com/) - For legacy browsers support

**Additional**
- [NIB](https://github.com/visionmedia/nib) - Stylus mixins, utilities, components, and gradient image generation
- [Superagent](https://github.com/visionmedia/superagent) - Ajax with less suck - (and node.js HTTP client to match)
- [Supertest](https://github.com/visionmedia/supertest) - Super-agent driven library for testing node.js HTTP servers
- [Nodemon](https://github.com/remy/nodemon) - Monitor for any changes in your node.js application
- [Mongoose](http://mongoosejs.com/) - Elegant mongodb object modeling for NodeJS
- [Mocha](http://visionmedia.github.io/mocha/) - JavaScript test framework running on node.js and the browser
- [Chai](http://chaijs.com/) - Chai is a BDD / TDD assertion library for node and the browser
- [Winston](https://npmjs.org/package/winston) - A multi-transport async logging library for Node.js

**Middlewares**
- [morgan](https://github.com/expressjs/morgan)
- [favicon](https://github.com/expressjs/favicon)
- [compression](https://github.com/expressjs/compression)
- [body-parser](https://github.com/expressjs/body-parser)
- [cookie-parser](https://github.com/expressjs/cookie-parser)
- [errorhandler](https://github.com/expressjs/errorhandler)
- [method-override](https://github.com/expressjs/method-override)
- [session](https://github.com/expressjs/session)

## Recommended Dependencies

```bash

# Express Flash - https://npmjs.org/package/express-flash
# Flash Messages for your Express Application
$ npm instal express-flash

# Node Mailer
$ npm install superagent

# Passaport - https://github.com/jaredhanson/passport
# Simple, unobtrusive authentication for Node.js
$ npm install passport

```


## Structure


## Documentation

Go to the Gist Cave and find the gold. :)
