var bookSchema = require('./schema.js');
var mongoose = require('mongoose');
var errorCodes = require('../../config/errorCodes.json');

bookSchema.statics.create = async (data) => {
    try {
        if (!data.title || !data.author) {
            console.log(`book:model.js:create - parameter missing!`);
            throw errorCodes.MISSING_PARAMS_ERROR;
        }
        const book = new bookModel({
            title: data.title,
            author: data.author,
            price: data.price,
            isbn: data.isbn,
            language: data.language,
            numberOfPages: data.numberOfPages,
            publisher: data.publisher
        });
        return await book.save();
    } catch (error) {
        console.log(`book:model.js:create - Error while creating book - err: ${JSON.stringify(error)}`);
        if (error.code === 11000) {
            throw errorCodes.DUPLICATE_KEY_ERROR;
        }
        throw error;
    }
};

bookSchema.statics.update = async (data) => {
    try {
        if (!data.title) {
            console.log(`book:model.js:update - parameter missing!`);
            throw errorCodes.MISSING_PARAMS_ERROR;
        }
        return await bookModel.findOneAndUpdate(
            {
                _id: data.id
            },
            {
                title: data.title,
                author: data.author,
                price: data.price,
                isbn: data.isbn,
                language: data.language,
                numberOfPages: data.numberOfPages,
                publisher: data.publisher
            }
        );
    } catch (error) {
        console.log(`book:model.js:update - Error while updating book - err: ${JSON.stringify(error)}`);
        throw error;
    }
};

bookSchema.statics.delete = async (data) => {
    try {
        if (!data.id) {
            console.log(`book:model.js:delete - parameter missing!`);
            throw errorCodes.MISSING_PARAMS_ERROR;
        }
        return await bookModel.findOneAndDelete(
            {
                _id: data.id
            }
        );
    } catch (error) {
        console.log(`book:model.js:delete - Error while deleting book - err: ${JSON.stringify(error)}`);
        throw error;
    }
};

bookSchema.statics.getBook = async (data) => {
    try {
        return await bookModel.find(
            {
                _id: data.id
            },
            {__v:0}
        );
    } catch (error) {
        console.log(`book:model.js:getBook - Error while getting book info - err: ${JSON.stringify(error)}`);
        throw error;
    }
};

bookSchema.statics.getAllBooks = async (data) => {
    try {

        const filter = {
            ...(data.title && {title: data.title}),
            ...(data.author && {author: data.author}),
            ...(data.price && {price: data.price}),
            ...(data.isbn && {isbn: data.isbn}),
            ...(data.language && {language: data.language}),
            ...(data.numberOfPages && {numberOfPages: data.numberOfPages}),
            ...(data.publisher && {publisher: data.publisher})
        };

        return await bookModel.find( filter, {__v:0} );
    } catch (error) {
        console.log(`book:model.js:getAllBooks - Error while getting book info - err: ${JSON.stringify(error)}`);
        throw error;
    }
};

var bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;