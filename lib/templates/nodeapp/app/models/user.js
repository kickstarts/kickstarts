var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var userSchema = new Schema({
    email:      { type: String, default: '' },
    name: {
        first:  { type: String, default: '' },
        last:   { type: String, default: '' }
    },
    phone:      { type: String, default: '' },
    gravatar:   { type: String, default: '' },
    country:    { type: String, default: '' },
    created:    { type: Date, default: Date.now }
});

module.exports = {
    userSchema: mongoose.model('User', userSchema)
};
