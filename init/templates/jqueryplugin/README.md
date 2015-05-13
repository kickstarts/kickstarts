# jQuery Plugin Name

## Usage

1. Include jQuery:

    ```html
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    ```

2. Include plugin's code:

    ```html
    <script src="dist/jquery.plugin-name.min.js"></script>
    <script src="dist/jquery.plugin-name.min.css"></script>
    ```

3. Call the plugin:

    ```javascript
    $("#element").defaultPluginName({
        propertyName: "a custom value"
    });
    ```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.plugin-name.js
│   ├── jquery.plugin-name.css
│   ├── jquery.plugin-name.min.css
│   └── jquery.plugin-name.min.js
├── src/
│   ├── jquery.plugin-name.css
│   └── jquery.plugin-name.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── Gruntfile.js
└── package.json
```

#### [demo/](https://github.com/ambitiouswebkit/plugin-name/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](https://github.com/ambitiouswebkit/plugin-name/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [src/](https://github.com/ambitiouswebkit/plugin-name/tree/master/src)

Contains the files responsible for your plugin.

#### [.editorconfig](https://github.com/ambitiouswebkit/plugin-name/tree/master/.editorconfig)

This file is for unifying the coding style for different editors and IDEs.

> Check [editorconfig.org](http://editorconfig.org) if you haven't heard about this project yet.

#### [.gitignore](https://github.com/ambitiouswebkit/plugin-name/tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [.jshintrc](https://github.com/ambitiouswebkit/plugin-name/tree/master/.jshintrc)

List of rules used by JSHint to detect errors and potential problems in JavaScript.

> Check [jshint.com](http://jshint.com/about/) if you haven't heard about this project yet.

#### [.travis.yml](https://github.com/ambitiouswebkit/plugin-name/tree/master/.travis.yml)

Definitions for continous integration using Travis.

> Check [travis-ci.org](http://about.travis-ci.org/) if you haven't heard about this project yet.

#### [Gruntfile.js](https://github.com/ambitiouswebkit/plugin-name/tree/master/Gruntfile.js)

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

#### [package.json](https://github.com/ambitiouswebkit/plugin-name/tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
