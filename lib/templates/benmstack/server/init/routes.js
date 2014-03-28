var home = require('./routes/home');

module.exports.initialize = function(app) {
    app.get('/', home.index);
};
