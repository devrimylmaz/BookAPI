var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Author = require('../author/schema');

/**
 * @constructor
 */
var BookSchema = new Schema({
    /**
     * Name of the book
     */
    title: {
        type: String,
        required: true,
        unique: true
    },
    /**
     * Author of the book
     */
    author: {
        type: Author,
        required: true
    },
    /**
     * Price of the book
     */
    price: {
        type: String
    },
    /**
     * ISBN of the book
     */
    isbn: {
        type: String
    },
    /**
     * Language of the book
     */
    language: {
        type: String
    },
    /**
     * Number of pages
     */
    numberOfPages: {
        type: String
    },
    /**
     * Publisher info fo the book
     */
    publisher: {
        type: String
    }
});

module.exports = BookSchema;