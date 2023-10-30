var express = require('express');
var service = require('./service');
var errorCodes = require('./config/errorCodes.json');

var router = express.Router();

const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

/**
 * @api {post} /book/create  Book create
 * @apiSampleRequest http://localhost:3000/book/create
 * @apiVersion 1.0.0
 * @apiName book.create
 * @apiGroup BOOK
 *
 * @apiDescription This method is called to create new book entry in database
 *
 * @apiParam (body) {String} title             Book title
 * @apiParam (body) {String} author            Author of the book
 * @apiParam (body) {String} [price]           Price of the book
 * @apiParam (body) {String} [isbn]            ISBN of the book
 * @apiParam (body) {String} [language]        Language of the book
 * @apiParam (body) {String} [numaberOfPages]  Number of pages of the book
 * @apiParam (body) {String} [publisher]       Publisher of the book
 * 
 */
router.post('/book/create', async (req, res) => {
    const bookData = req.body;

    service.book.createBook(bookData).then((bookObj) => {
        handleResponse(res, bookObj);
    }).catch(error => {
        handleError(res, error);
    });    
});

/**
 * @api {get} /book/get/{id}  get book info
 * @apiSampleRequest http://localhost:3000/book/get/:id
 * @apiVersion 1.0.0
 * @apiName book.get
 * @apiGroup BOOK
 *
 * @apiDescription This method is called to get book entry from database
 *
 * @apiParam (path) {String} id  Book ID
 * 
 */
router.get('/book/get/:id', (req, res) => {
    const bookData = {id: req.params.id};

    service.book.getBook(bookData).then((bookObj) => {
        handleResponse(res, bookObj);
    }).catch(error => {
        handleError(res, error);
    });
});

/**
 * @api {get} /book/getBooks  Get books info based on filter
 * @apiSampleRequest http://localhost:3000/book/getBooks
 * @apiVersion 1.0.0
 * @apiName book.getBooks
 * @apiGroup BOOK
 *
 * @apiDescription This method is called to get book entries from database based on filter
 *
 * @apiParam (body) {String} [title]           Book title
 * @apiParam (body) {String} [author]          Book author
 * @apiParam (body) {String} [price]           Price of the book
 * @apiParam (body) {String} [isbn]            ISBN of the book
 * @apiParam (body) {String} [language]        Language of the book
 * @apiParam (body) {String} [numaberOfPages]  Number of pages of the book
 * @apiParam (body) {String} [publisher]       Publisher of the book
 * 
 */
router.get('/book/getBooks', (req, res) => {
    const bookData = req.body;

    service.book.getAllBooks(bookData).then((bookObj) => {
        handleResponse(res, bookObj);
    }).catch(error => {
        handleError(res, error);
    });
});

/**
 * @api {post} /book/update  Update book info by id
 * @apiSampleRequest http://localhost:3000/book/update
 * @apiVersion 1.0.0
 * @apiName book.update
 * @apiGroup BOOK
 *
 * @apiDescription This method is called to update book entry by id
 * 
 * @apiParam (body) {String} id                Book ID
 * @apiParam (body) {String} [title]           Book title
 * @apiParam (body) {String} [author]          Book author
 * @apiParam (body) {String} [price]           Price of the book
 * @apiParam (body) {String} [isbn]            ISBN of the book
 * @apiParam (body) {String} [language]        Language of the book
 * @apiParam (body) {String} [numaberOfPages]  Number of pages of the book
 * @apiParam (body) {String} [publisher]       Publisher of the book
 * 
 */
router.post('/book/update', (req, res) => {
    const bookData = req.body;

    service.book.updateBook(bookData).then((bookObj) => {
        handleResponse(res, bookObj);
    }).catch(error => {
        handleError(res, error);
    });
});

/**
 * @api {delete} /book/delete/{id}  Delete book by id
 * @apiSampleRequest http://localhost:3000/book/delete/:id
 * @apiVersion 1.0.0
 * @apiName book.delete
 * @apiGroup BOOK
 *
 * @apiDescription This method is called to delete book entry by id
 *
 * @apiParam (path) {String} id  Book ID
 * 
 */
router.delete('/book/delete/:id', (req, res) => {
    const bookData = {id: req.params.id};

    service.book.deleteBook(bookData).then(() => {
        handleResponse(res, errorCodes.SUCCESS);
    }).catch(error => {
        handleError(res, error);
    });
});

module.exports = router;