'use strict';

// Requires
var request = require('supertest'),
    app     = require('../app.js'),
    agent   = request.agent(app);

// Route Tests
describe('GET /', function() {
    it('should return 200 OK', function(done) {
        agent
            .get('/')
            .expect(200, done);
    });
});

// Error Route tests
describe('GET /404', function() {
    it('should return 404', function(done) {
        agent
            .get('/404')
            .expect(404, done);
    });
});

describe('GET /403', function() {
    it('should return 403', function(done) {
        agent
            .get('/403')
            .expect(403, done);
    });
});

describe('GET /500', function() {
    it('should return 500', function(done) {
        agent
            .get('/500')
            .expect(500, done);
    });
});
