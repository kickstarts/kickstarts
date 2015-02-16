# Sinatra

Generate a new project based on [Sinatra](http://sinatrarb.com/).


## Requires

- [Ruby](http://www.ruby-lang.org/) 1.9.2 and up
- [Rubygems](http://rubygems.org/)
- [Git](http://git-scm.com/)
- [Bundler](http://rubygems.org/gems/bundler)


## Instructions

**STEP 01: Install Required Gems**

To check your dependencies and install, type:

    $ bundle check
    $ bundle install

This will install all the dependencies and create the Gemfile.lock file. This process could take some time to complete.

**STEP 02: Running Locally**

When running locally, a sqlite3 database file will be created in the /db directory.

To start up your application using shotgun, type:

    $ shotgun

The shotgun command will dynamically load and reload your application code when you change things. You can now access your app at: [http://localhost:9393](http://localhost:9393)

To start up your application using rackup, type:

    $ rackup

The rackup command will load your app once and not reload each time you change code. You can access your app at: [http://localhost:9292](http://localhost:9292)

You can also start your app using [Foreman](https://github.com/ddollar/foreman) as follows:

    $ foreman start

You can now access your app at [http://localhost:5000](http://localhost:5000)


## Includes

**Main**
- [Sinatra](http://www.sinatrarb.com/) - Sinatra is a DSL for quickly creating web applications in Ruby with minimal effort.
- [Rack](http://rack.github.io/) - Rack provides a minimal interface between webservers supporting Ruby and Ruby frameworks.
- [Sqlite3](https://github.com/luislavena/sqlite3-ruby) - Ruby bindings for the SQLite3 embedded database.
- [Rake](http://rake.rubyforge.org/)
- [Haml](http://haml.info/) - Beautiful, DRY, well-indented, clear markup.
- [Sass](http://sass-lang.com/) - CSS with superpowers.

- [Bower]()

**Additional**
- [Data Mapper](http://datamapper.org/)
- [Shotgun](https://github.com/rtomayko/shotgun)
- [Foreman](https://github.com/ddollar/foreman) - Manage Procfile-based applications
- [Puma](http://puma.io/)
- [Rake::Test](https://github.com/brynary/rack-test)

**Optional**
- [Cucumber](http://cukes.info/)
- [Fog](http://fog.io/)
- [Pony](https://github.com/benprew/pony) - The express way to send email in Ruby.

## Recommended Dependencies

```bash

# Omniauth - https://github.com/intridea/omniauth
# OmniAuth is a flexible authentication system utilizing Rack middleware.
$ gem install omniauth

# Awesome Print - https://github.com/michaeldv/awesome_print
$ gem install awesome_print

# Passaport - https://github.com/jaredhanson/passport
# Simple, unobtrusive authentication for Node.js
$ npm install passport

```


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
