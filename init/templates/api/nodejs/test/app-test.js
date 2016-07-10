'use strict';

// Requires
var request = require('supertest'),
    app     = require('../app.js');

// Route Tests
describe('GET /', function() {
    it('should return 200 OK', function(done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
});

// Error Route tests
describe('GET /500', function() {
    it('should return 500', function(done) {
        request(app)
            .get('/500')
            .expect(500, done);
    });
});

describe('GET /404', function() { // This will fail!
    it('should return 404', function(done) {
        request(app)
            .get('/404')
            .expect(404, done);
    });
});

describe('GET /403', function() { // This will fail!
    it('should return 403', function(done) {
        request(app)
            .get('/403')
            .expect(403, done);
    });
});


