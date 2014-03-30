var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var newSchema = new Schema({
    email:      { type: String },
    name: {
        first:  { type: String },
        last:   { type: String }
    },
    phone:      { type: String },
    gravatar:   { type: String }
});

module.exports = {
    newSchema: mongoose.model('My New Schema', newSchema)
};
