module.exports = {

    // Create Development Folder
    dev: {
        expand: true,
        cwd: '../',
        src: [
            'assets/**',
            'bin/**',
            'ie/**',
            'includes/**',
            'test/**',
            '.*',
            '*.{html,php}',
            '*.txt',
            '*.md',
            'src/.*',
            'src/*.json',
            'src/Gruntfile.js'
        ],
        dest: '../_dev/'
    },

    // Create Production Folder
    prod: {
        expand: true,
        cwd: '../',
        src: [
            '!src/**',
            '!bin/**',
            '!.*',
            '!htaccess.txt',
            '!README.md',
            'assets/images/**',
            'assets/fonts/**',
            'assets/scripts/main.min.js',
            'assets/styles/main.min.css',
            'ie/**',
            'includes/**',
            '*.{html,php}'
        ],
        dest: '../_prod/'
    },

    // Install Bower Dependencies
    plugins: {
        carousel: {
            expand: true,
            cwd: '<%= bower %>/owlcarousel/',
            src: [ 'owl-carousel/**/*' ],
            dest: '<%= assets.scripts %>/plugins/'
        }
        // IF YOU NEED... ADD MORE PLUGINS HERE
    },
    vendors: {
        expand: true,
        flatten: true,
        cwd: '<%= bower %>/',
        src: [ 'modernizr/modernizr.js', 'jquery/dist/jquery.min.js' ],
        dest: '<%= assets.scripts %>/vendors/'
    },
    styles: {
        expand: true,
        cwd: '<%= bower %>/<%= bootstrap.styles %>/',
        src: [ 'bootstrap/**/*', '_bootstrap.scss' ],
        dest: '<%= assets.styles %>'
    },
    scripts: {
        expand: true,
        flatten: true,
        cwd: '<%= bower %>/<%= bootstrap.scripts %>/',
        src: [ 'bootstrap/**/*' ],
        dest: '<%= assets.scripts %>/modules'
    },

    // Create PO File
    translate: {
        flatten: true,
        src: ['../languages/<%= package.name %>.pot'],
        dest: '../languages/<%= package.name %>.po'
    },

};
