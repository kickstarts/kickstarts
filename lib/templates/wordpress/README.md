# WordPress Boilerplate

Generate a new project based on [WordPress](http://wordpress.org/).

## Requires

- [Node.JS](http://nodejs.org/)
- [Bower](http://bower.io)
- [Grunt](http://gruntjs.com)
- [Ruby](https://www.ruby-lang.org/pt/)
- [Sass](http://sass-lang.com/)
- [Compass](http://compass-style.org/)


## Instructions

**STEP 1: Create the WP database**

**STEP 2: Set your configurations**

```
# 2.1 Open `./src/grunt.conf.js` file and set up your configurations.
# 2.2 Rename the following files and place at root directory:

- `__gitignore.txt` to `.gitignore`
- `__htaccess.txt` to `.htaccess`
- `__wp-config.txt` to `wp-config.php`

# Note: its up to me (you) deal with these files. =]
```

**STEP 3: Bootstrap your project**

**STEP 4: In meantime, run the available tasks**

```bash
# Start Serve and watch for Changes
$ grunt

# Compile Files
$ grunt build

# Build App - Development
$ grunt dev

# Build App - Production
$ grunt prod

# Deploy App
$ grunt [ftp|rsync|git]

# Optimize Images
$ grunt assets

# Run Unit Tests
$ grunt spec

# Generate Documentation
$ grunt docs
```


## Includes

- [WordPress](http://wordpress.org/)
- [Bower](http://bower.io)
- [Grunt](http://gruntjs.com)
- [Sass](http://sass-lang.com/)
- [Compass](http://compass-style.org/)

## Documentation

After you clone this repository, be sure to delete this content and replace it.
You can go to the Gist Cave and find the gold. :)
