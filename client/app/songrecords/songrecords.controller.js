'use strict';
const angular = require('angular');

/*@ngInject*/
export function songrecordsController() {
  this.message = 'Hello';
}

$scope.songrecordsController;

export default angular.module('angularAuth0App.songrecords', [])
  .controller('SongrecordsController', songrecordsController)
  .name;
