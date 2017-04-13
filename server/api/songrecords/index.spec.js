'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var songrecordsCtrlStub = {
  index: 'songrecordsCtrl.index',
  show: 'songrecordsCtrl.show',
  create: 'songrecordsCtrl.create',
  upsert: 'songrecordsCtrl.upsert',
  patch: 'songrecordsCtrl.patch',
  destroy: 'songrecordsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var songrecordsIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './songrecords.controller': songrecordsCtrlStub
});

describe('Songrecords API Router:', function() {
  it('should return an express router instance', function() {
    songrecordsIndex.should.equal(routerStub);
  });

  describe('GET /api/songrecords', function() {
    it('should route to songrecords.controller.index', function() {
      routerStub.get
        .withArgs('/', 'songrecordsCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/songrecords/:id', function() {
    it('should route to songrecords.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'songrecordsCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/songrecords', function() {
    it('should route to songrecords.controller.create', function() {
      routerStub.post
        .withArgs('/', 'songrecordsCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/songrecords/:id', function() {
    it('should route to songrecords.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'songrecordsCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/songrecords/:id', function() {
    it('should route to songrecords.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'songrecordsCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/songrecords/:id', function() {
    it('should route to songrecords.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'songrecordsCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
