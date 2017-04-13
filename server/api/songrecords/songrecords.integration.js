'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newSongrecords;

describe('Songrecords API:', function() {
  describe('GET /api/songrecords', function() {
    var songrecordss;

    beforeEach(function(done) {
      request(app)
        .get('/api/songrecords')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          songrecordss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      songrecordss.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/songrecords', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/songrecords')
        .send({
          name: 'New Songrecords',
          info: 'This is the brand new songrecords!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSongrecords = res.body;
          done();
        });
    });

    it('should respond with the newly created songrecords', function() {
      newSongrecords.name.should.equal('New Songrecords');
      newSongrecords.info.should.equal('This is the brand new songrecords!!!');
    });
  });

  describe('GET /api/songrecords/:id', function() {
    var songrecords;

    beforeEach(function(done) {
      request(app)
        .get(`/api/songrecords/${newSongrecords._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          songrecords = res.body;
          done();
        });
    });

    afterEach(function() {
      songrecords = {};
    });

    it('should respond with the requested songrecords', function() {
      songrecords.name.should.equal('New Songrecords');
      songrecords.info.should.equal('This is the brand new songrecords!!!');
    });
  });

  describe('PUT /api/songrecords/:id', function() {
    var updatedSongrecords;

    beforeEach(function(done) {
      request(app)
        .put(`/api/songrecords/${newSongrecords._id}`)
        .send({
          name: 'Updated Songrecords',
          info: 'This is the updated songrecords!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSongrecords = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSongrecords = {};
    });

    it('should respond with the updated songrecords', function() {
      updatedSongrecords.name.should.equal('Updated Songrecords');
      updatedSongrecords.info.should.equal('This is the updated songrecords!!!');
    });

    it('should respond with the updated songrecords on a subsequent GET', function(done) {
      request(app)
        .get(`/api/songrecords/${newSongrecords._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let songrecords = res.body;

          songrecords.name.should.equal('Updated Songrecords');
          songrecords.info.should.equal('This is the updated songrecords!!!');

          done();
        });
    });
  });

  describe('PATCH /api/songrecords/:id', function() {
    var patchedSongrecords;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/songrecords/${newSongrecords._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Songrecords' },
          { op: 'replace', path: '/info', value: 'This is the patched songrecords!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSongrecords = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSongrecords = {};
    });

    it('should respond with the patched songrecords', function() {
      patchedSongrecords.name.should.equal('Patched Songrecords');
      patchedSongrecords.info.should.equal('This is the patched songrecords!!!');
    });
  });

  describe('DELETE /api/songrecords/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/songrecords/${newSongrecords._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when songrecords does not exist', function(done) {
      request(app)
        .delete(`/api/songrecords/${newSongrecords._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
