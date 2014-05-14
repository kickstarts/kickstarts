var expect  = require('expect.js'),
    request = require('superagent'),
    path    = require('path'),
    config  = require('../config/app'),
    folder  = config.app.host + ':' + config.app.port,
    id;

describe('REST API', function() {

    'use strict';

    it('should post an object', function(done) {
        request.post(path.join(folder, '/example'))
            .send({
                name: 'Vitor',
                email: 'code@vitorbritto.com.br'
            })
            .end(function(e, res) {
                console.log(res.body);
                expect(e).to.eql(null);
                expect(res.body.length).to.eql(1);
                expect(res.body[0]._id.length).to.eql(24);
                id = res.body[0]._id;
                done();
            });
    });

    it('should retrieve an object', function(done) {
        request.get(path.join(folder, '/example/', id))
            .end(function(e, res) {
                console.log(res.body);
                expect(e).to.eql(null);
                expect(typeof res.body).to.eql('object');
                expect(res.body._id.length).to.eql(24);
                expect(res.body._id).to.eql(id);
                done();
            });
    });

    it('should retrieve a collection', function(done) {
        request.get(path.join(folder, '/example'))
            .end(function(e,res) {
                console.log(res.body);
                expect(e).to.eql(null);
                expect(res.body.length).to.be.above(0);
                expect(res.body.map(function(item) {
                    return item._id;
                })).to.contain(id);
                done();
            });
    });

    it('should update an object', function(done) {
        request.put(path.join(folder, '/example', id))
            .send({
                name: 'John Doe',
                email: 'johndoe@email.com'
            })
            .end(function(e,res) {
                console.log(res.body);
                expect(e).to.eql(null);
                expect(typeof res.body).to.eql('object');
                expect(res.body._id.length).to.eql(24);
                expect(res.body._id).to.eql(id);
                expect(res.body.name).to.eql('John Doe');
                done();
            });
    });

    it('should remove an object', function(done) {
        request.del(path.join(folder, '/example', id))
            .end(function(e,res) {
                console.log(res.body);
                expect(e).to.eql(null);
                expect(typeof res.body).to.eql('object');
                expect(res.body.msg).to.eql('success');
                done();
            });
    });

});
