///////////////////////////////////////////
// APP CONFIG                            //
///////////////////////////////////////////

var path = require('path'),
    pkg  = require('../package');

module.exports = {
    app: {
        env:         process.env.NODE_ENV || 'development',
        analytics:   process.env.GA       || '',
        models:      path.join(__dirname, '../public/assets/scripts/app/models'),
        routes:      path.join(__dirname, '../public/assets/scripts/app/router'),
        views:       path.join(__dirname, '../public/assets/scripts/app/views')
    },
    locals: {
        name:        pkg.name,
        version:     pkg.version,
        description: pkg.description,
        author:      pkg.author,
        keywords:    pkg.keywords
    }
};
