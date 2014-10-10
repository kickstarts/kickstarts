![Boilerplates Logo](logo-bp.jpg "Boilerplates")

## Welcome [![Build Status](https://travis-ci.org/vitorbritto/boilerplates.svg)](https://travis-ci.org/vitorbritto/boilerplates)

This is my personal Yeoman. A jumpstart for my projects.

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

### Bonus

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

Execute it with: `new [project-name]`


## Boilerplates

- [General](lib/templates/general/)
- [WordPress](lib/templates/wordpress/)
- [B.E.N.M. Stack](lib/templates/benmstack/)
- [M.E.A.N. Stack](lib/templates/meanstack/)
- [Web App](lib/templates/webapp/)
- [Single Page App](lib/templates/spa/)
- [Node App](lib/templates/nodeapp/)
- [Node Webkit](lib/templates/nodewebkit/)
- [Sinatra](lib/templates/sinatra/)
- [CLI Tool](lib/templates/clitool/)
- [NPM Package](lib/templates/npmpkg/)
- [Jekyll](lib/templates/jekyll/)
- [Harp](lib/templates/harp/)
- [WP Plugin](lib/templates/wpplugin/)

## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
