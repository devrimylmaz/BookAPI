var mongoose         = require('mongoose'),
    Schema           = mongoose.Schema;

/**
 * @constructor
 */
var AuthorSchema = new Schema({
    /**
     * Name of the author
     */
    name: {
        type: String,
        required: true
    },
    /**
     * Country information for author
     */
    country: {
        type: String
    },
    /**
     * Birth date of the author
     */
    birthDate: {
        type: Date
    }
});

module.exports = AuthorSchema;