const authorModel = require("../model/author/model");

module.exports = {
    createAuthor: async function (authorObj) {
        console.log(`service_author:createAuthor: creating author : authorObj: ${JSON.stringify(authorObj)}`);
        return await authorModel.create(authorObj);
    },

    updateAuthor: async function (authorObj) {
        console.log(`service_author:updateAuthor: updating author : authorObj: ${JSON.stringify(authorObj)}`);
        return await authorModel.update(authorObj);
    },

    deleteAuthor: async function (authorObj) {
        console.log(`service_author:deleteAuthor: deleting author : authorObj: ${JSON.stringify(authorObj)}`);
        return await authorModel.delete(authorObj);
    },

    getAuthor: async function (authorObj) {
        console.log(`service_author:getAuthor: getting author info : authorObj: ${JSON.stringify(bookObj)}`);
        return await authorModel.getAuthor(authorObj);
    },

    getAllAuthors: async function (authorObj) {
        console.log(`service_author:getAllAuthors: getting author info : authorObj: ${JSON.stringify(authorObj)}`);
        return await authorModel.getAllAuthors(authorObj);
    }
};