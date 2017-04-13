'use strict';

describe('Component: SongrecordsComponent', function() {
  // load the controller's module
  beforeEach(module('angularAuth0App.songrecords'));

  var SongrecordsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    SongrecordsComponent = $componentController('songrecords', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
