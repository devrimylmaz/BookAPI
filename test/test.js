const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Assuming your server file is named server.js

// Configure chai to use chai-http plugin
chai.use(chaiHttp);
const expect = chai.expect;

describe('Books API', () => {
  // Test for the /book/create POST endpoint
  describe('/POST /book/create', () => {
    it('it should create a new book', (done) => {
      const book = {
        title: 'Sample Book',
        author: {
            name: "Sample Author",
            country: "Sample Country"
        },
        price: '50',
        isbn: 'Sample ISBN',
        language: 'Sample Language',
        numberOfPages: '50',
        publisher: 'Sample Publisher'
      };

      chai
        .request(app)
        .post('/book/create')
        .send(book)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message', 'OK');
          done();
        });
    });

    // Test for missing book data
    it('it should return an error if book data is missing', (done) => {
      chai
        .request(app)
        .post('/book/create')
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(500);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errorCode', '000001');
          done();
        });
    });

    // Test for duplicate book data
    it('it should return an error if book title is duplicated', (done) => {
        const book = {
            title: 'Sample Book',
            author: {
                name: "Sample Author",
                country: "Sample Country"
            },
            price: '50',
            isbn: 'Sample ISBN',
            language: 'Sample Language',
            numberOfPages: '50',
            publisher: 'Sample Publisher'
          };
        chai
          .request(app)
          .post('/book/create')
          .send(book)
          .end((err, res) => {
            expect(res).to.have.status(500);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('errorCode', '000002');
            done();
          });
      });
  });
  describe('/GET /book/get', () => {
    it('it should get book entry by title', (done) => {
      const book = {
        title: 'Sample Book'
      };

      chai
        .request(app)
        .get('/book/get')
        .send(book)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  describe('/DELETE /book/delete', () => {
    it('it should delete book entry by title', (done) => {
      const book = {
        title: 'Sample Book'
      };

      chai
        .request(app)
        .delete('/book/delete')
        .send(book)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message', 'OK');
          done();
        });
    });
  });
});