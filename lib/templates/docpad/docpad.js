'use strict';

module.exports = {

    // =================================
    // Template Data
    // =================================

    templateData: {

        // Meta tags
        site: {
            url: '',
            title: 'Project Title',
            description: '',
            keywords: '',
            styles: '/css/style.css',
            scripts: [
                '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
                '/js/main.js'
            ],
            analytics: ''
        },

        // Pages
        pages: [
            { url: '', name: '' },
            { url: '', name: '' },
            { url: '', name: '' },
            { url: '', name: '' }
        ],

        // Social
        social: {
            facebook: 'https://www.facebook.com/username',
            twitter:  'https://twitter.com/username',
            github:   'https://github.com/username'
        },

        // Sections
        sections: [
            'section1',
            'section2'
        ],

        labels: {
            section1: 'Section One',
            section2: 'Section Two'
        },


        // DocPad Plugins
        // --------------------------
        plugins: {
            stylus: {
                stylusLibraries: {
                    nib: true
                },
                stylusOptions: {
                    compress: true,
                    'include css': true
                }
            }
        }


        // Helpers
        // --------------------------

    }
};
