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

Usage: `new [project-folder-name]`


## Boilerplates

- [General](init/templates/general/)
- [B.E.N.M. Stack](init/templates/benmstack/) - *new version coming soon*
- [M.E.A.N. Stack](init/templates/meanstack/) - *new version coming soon*
- Sinatra + Backbone - *first release coming soon*
- [Web App](init/templates/webapp/)
- [Node App](init/templates/nodeapp/)
- [Node Webkit](init/templates/nodewebkit/)
- [CLI Tool](init/templates/clitool/)
- [Node Package](init/templates/npmpkg/)
- [React Package](init/templates/reactpkg)
- [React + Flux](init/templates/reactflux)
- [Sinatra API](init/templates/sinatra/)
- [Slim API](init/templates/slim/)
- [WordPress](init/templates/wordpress/)
- [WP Plugin](init/templates/wpplugin/)
- [Jekyll](init/templates/jekyll/)
- [Harp](init/templates/harp/)
- [C Program](init/templates/cprogram/)
- [Shell Script](init/templates/shellscript/)

## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
