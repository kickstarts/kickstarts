![Boilerplates Logo](logo-bp.jpg "Boilerplates")

## Welcome [![Build Status](https://travis-ci.org/vitorbritto/boilerplates.svg)](https://travis-ci.org/vitorbritto/boilerplates)

This is my personal Yeoman. A simple jumpstart for my projects

> **TODO LIST:** [https://github.com/vitorbritto/boilerplates/issues/](https://github.com/vitorbritto/boilerplates/issues/)


## Getting Started

**STEP 01: Requirements and Installation**

First of all, make sure you have [Node.js](http://nodejs.org/) installed.

```bash
# 1. Clone this repository and access the generated folder
$ git clone git://github.com/vitorbritto/boilerplates.git [project-name]
$ cd [project-name]

# 2. Install dependencies and make the script executable
$ npm install
```

**STEP 02: Execute the program**

```bash
# Conventional Method
$ node newproject

----- OR -----

# Executable Script
$ chmod u+x newproject.js
$ ./newproject.js
```

**STEP 03: Profit! :)**

> **Note**: chmod is an UNIX command, not present in MS-DOS.

### Extra

Place this Bash Function in your `.bashrc` file.

```bash
# Start a new project
new() {
    printf "→ Setting up your new project\n"
    git clone git://github.com/vitorbritto/boilerplates.git $1
    cd $1

    printf "→ Installing dependencies\n"
    npm install
    clear

    printf "\n→ Initializing...\n"
    node newproject
}
```

And execute it with: `new [project-name]`


## Boilerplates

- [General](lib/templates/general/)
- [Mobile](lib/templates/mobile/)
- [WordPress](lib/templates/wordpress/)
- [B.E.N.M. Stack](lib/templates/benmstack/)
- [M.E.A.N. Stack](lib/templates/meanstack/)
- [L.A.M. Stack](lib/templates/lamstack/)
- [Web App](lib/templates/webapp/)
- [Single Page App](lib/templates/spa/)
- [Node App](lib/templates/nodeapp/)
- [Laravel](lib/templates/laravel/)
- [Rails](lib/templates/rails/)
- [Sinatra](lib/templates/sinatra/)
- [CLI Tool](lib/templates/clitool/)
- [NPM Package](lib/templates/npmpkg/)
- [Jekyll](lib/templates/jekyll/)
- [Harp](lib/templates/harp/)
- [DocPad](lib/templates/docpad/)


## References

- [MEAN.JS](https://github.com/meanjs/mean)
- [BBB](https://github.com/backbone-boilerplate/backbone-boilerplate)
- [FastGap](https://github.com/FastGap/fastgap)


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
