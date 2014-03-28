module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    jade:
      dev:
        options:
          pretty: true
          data: (dest, src) ->
            require './config.json'
        files: [
          expand: true
          cwd: 'src/jade/'
          src: ['index.jade']
          dest: 'compiled/'
          ext: '.html'
        ]

    stylus:
      compile:
        options:
          use: [ require('nib') ]
          compress: true
        files:
          'compiled/css/main.css' : 'src/stylus/main.styl'

    coffee:
      compile:
        files:
          'compiled/js/script.js' : 'src/coffee/script.coffee'

  grunt.loadNpmTasks 'grunt-contrib-jade'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.registerTask 'default', [
    'stylus',
    'coffee',
    'jade'
  ]
