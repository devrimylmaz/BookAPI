const bookModel = require("../model/book/model");

module.exports = {
    createBook: async function (bookObj) {
        console.log(`service_book:createBook: creating book : bookObj: ${JSON.stringify(bookObj)}`);
        return await bookModel.create(bookObj);
    },

    updateBook: async function (bookObj) {
        console.log(`service_book:updateBook: updating book : bookObj: ${JSON.stringify(bookObj)}`);
        return await bookModel.update(bookObj);
    },

    deleteBook: async function (bookObj) {
        console.log(`service_book:deleteBook: deleting book : bookObj: ${JSON.stringify(bookObj)}`);
        return await bookModel.delete(bookObj);
    },

    getBook: async function (bookObj) {
        console.log(`service_book:getBook: getting book info : bookObj: ${JSON.stringify(bookObj)}`);
        return await bookModel.getBook(bookObj);
    },

    getAllBooks: async function (bookObj) {
        console.log(`service_book:getAllBooks: getting book info : bookObj: ${JSON.stringify(bookObj)}`);
        return await bookModel.getAllBooks(bookObj);
    }
};