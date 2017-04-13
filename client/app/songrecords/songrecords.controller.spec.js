'use strict';

describe('Controller: SongrecordsCtrl', function() {
  // load the controller's module
  beforeEach(module('angularAuth0App.songrecords'));

  var SongrecordsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    SongrecordsCtrl = $controller('SongrecordsCtrl', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
