exports.category = [
    {
        choices: [
            { name: 'GENERAL', value: 'general' },
            { name: 'DESKTOP APPS', value: 'desktop' },
            { name: 'WEB APPS', value: 'webapp' },
            { name: 'MOBILE APPS', value: 'mobile' },
            { name: 'API', value: 'api' },
            { name: 'FULL-STACK', value: 'fullstack' },
            { name: 'STATIC GENERATORS', value: 'staticgen' },
            { name: 'TOOLS', value: 'tools' },
            { name: 'LIBS/PLUGINS/MODULES', value: 'libs' }
        ],
        name: 'category',
        message: 'Which category would you like to check?',
        type: 'list'
    }
];


// GENERAL CHOICES
exports.general = [
    {
        choices: [
            { name: 'Website', value: 'website' },
            { name: 'Landing Page', value: 'landingpage' },
            { name: 'WordPress', value: 'wordpress' },
            { name: 'WooCommerce', value: 'woocommerce' }
        ],
        name: 'type',
        message: 'Which boilerplate would you like to use?',
        type: 'list'
    }
];


// DEKSTOP CHOICES
exports.desktop = [
    {
        choices: [
            { name: 'Electron', value: 'electron' },
            { name: 'Node Webkit', value: 'nodewebkit' },
            { name: 'C Program', value: 'cprogram' }
        ],
        name: 'type',
        message: 'Which boilerplate would you like to use?',
        type: 'list'
    }
];


// WEB APP CHOICES
exports.webapp = [
    {
        choices: [
            { name: 'Angular JS', value: 'angular' },
            { name: 'Backbone JS', value: 'backbone' },
            { name: 'React JS', value: 'react' },
            { name: 'Slim', value: 'slim' }
        ],
        name: 'type',
        message: 'Which boilerplate would you like to use?',
        type: 'list'
    }
];


// MOBILE APP CHOICES
exports.mobile = [
    {
        choices: [
            { name: 'Ionic', value: 'ionic' },
        ],
        name: 'type',
        message: 'Which boilerplate would you like to use?',
        type: 'list'
    }
];


// API CHOICES
exports.api = [
    {
        choices: [
            { name: 'NodeJS', value: 'nodejs' },
            { name: 'Sinatra', value: 'sinatra' }
        ],
        name: 'type',
        message: 'Which boilerplate would you like to use?',
        type: 'list'
    }
];


// FULL-STACK CHOICES
exports.fullstack = [
    {
        choices: [
            { name: 'BENM Stack (Backbone, Express, NodeJS and MongoDB)', value: 'benm' },
            { name: 'MEAN Stack (AngularJS, Express, NodeJS and MongoDB)', value: 'mean' },
            { name: 'BSIP Stack (Backbone, Sinatra, Rack and PostgreSQL)', value: 'brasp' }
        ],
        name: 'type',
        message: 'Which boilerplate would you like to use?',
        type: 'list'
    }
];


// STATIC GENERATORS CHOICES
exports.staticgen = [
    {
        choices: [
            { name: 'Jekyll', value: 'jekyll' },
            { name: 'HarpJS', value: 'harp' }
        ],
        name: 'type',
        message: 'Which boilerplate would you like to use?',
        type: 'list'
    }
];


// FULL-STACK CHOICES
exports.tools = [
    {
        choices: [
            { name: 'CLI Tool', value: 'clitool' },
            { name: 'Shell Script', value: 'shellscript' }
        ],
        name: 'type',
        message: 'Which boilerplate would you like to use?',
        type: 'list'
    }
];


// FULL-STACK CHOICES
exports.libs = [
    {
        choices: [
            { name: 'jQuery Plugin', value: 'jqueryplugin' },
            { name: 'JS Component', value: 'jscomponent' },
            { name: 'npm Package', value: 'npmpkg' },
            { name: 'WordPress Plugin', value: 'wpplugin' }
        ],
        name: 'type',
        message: 'Which boilerplate would you like to use?',
        type: 'list'
    }
];
