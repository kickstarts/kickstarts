///////////////////////////////////////////
// APP CONFIG                            //
///////////////////////////////////////////

module.exports = {
    app: {
        root: __dirname,
        env: process.env.NODE_ENV || 'development',
        port: 8080
    },
    db: {
        host: 'mongodb://localhost/api/'
    }
};
