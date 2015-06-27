module.exports = {

    // Generate POT file
    options: {
        cwd: '..',
        domainPath: 'languages/',
        type: 'wp-theme', // options: wp-theme, wp-plugin
        potFilename: 'carretos.pot',
        processPot: function(pot) {
            var translation,
                excluded_meta = [
                    'Plugin Name of the plugin/theme',
                    'Theme Name of the plugin/theme',
                    'Plugin URI of the plugin/theme',
                    'Theme URI of the plugin/theme',
                    'Description of the plugin/theme',
                    'Author of the plugin/theme',
                    'Author URI of the plugin/theme',
                    'Tags of the plugin/theme'
                ];

            for (translation in pot.translations['']) {
                if ('undefined' !== typeof pot.translations[''][ translation ].comments.extracted) {
                    if (excluded_meta.indexOf(pot.translations[''][ translation ].comments.extracted) >= 0 ) {
                        console.log('Excluded meta: ' + pot.translations[''][ translation ].comments.extracted);
                        delete pot.translations[''][ translation ];
                    }
                }
            }

            return pot;
        }
    }

};
