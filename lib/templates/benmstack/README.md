# B.E.N.M. Stack Boilerplate

The B.E.N.M. Stack provides a boilerplate with [BackboneJS](http://backbonejs.org/) on the _client-side_ and [ExpressJS](http://expressjs.com/) on the _server-side_, including [Gulp](http://gulpjs.com/) and [Karma](http://karma-runner.github.io/0.12/index.html) for setup.


## Requires

- [Node.JS](http://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)
- [Gulp](http://gulpjs.com/)
- [PhantomJS](http://phantomjs.org/)
- [Karma](http://karma-runner.github.io/0.12/index.html)


## Instructions

**STEP 1: Create your database**

```
1. In your Shell, type `mongo`.
2. Create a new database typing `use name_of_database`.
```

**STEP 2: Set your configurations**

Configurations files are inside `config` folder.

**STEP 3: Bootstrap your application**

**STEP 4: In meantime, run the available tasks**

```bash
# Start Serve and watch for Changes
$ gulp serve

# Unit Tests (Client and Server)
$ gulp spec

# Build App
$ gulp build

# Heroku Deploy - https://github.com/appstack/heroku-buildpack-nodejs-gulp
```


## Includes

**Main Dependencies**
- [MongoDB](http://www.mongodb.org/) - An open-source document database, and the leading NoSQL database.
- [Express](http://expressjs.com/) - Web application framework for Node
- [BackboneJS](http://backbonejs.org/) - MV* framework
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

###############
# Client-Side #
###############

# Marionette - http://marionettejs.com/
# A composite application library for Backbone.js
$ npm install marionette --save

###############
# Server-Side #
###############

# Express Flash - https://npmjs.org/package/express-flash
# Flash Messages for your Express Application
$ npm instal express-flash  --save

# Node Mailer - http://www.nodemailer.com/
# easy as cake e-mail sending for your Node.js applications.
$ npm install nodemailer --save

# Passaport - https://github.com/jaredhanson/passport
# Simple, unobtrusive authentication for Node.js
$ npm install passport  --save

```


## Documentation

After you clone this repository, be sure to delete this content and replace it.
You can go to the Gist Cave and find the gold. :)
