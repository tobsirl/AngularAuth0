'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './songrecords.routes';

export class SongrecordsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('angularAuth0App.songrecords', [uiRouter])
  .config(routes)
  .component('songrecords', {
    template: require('./songrecords.html'),
    controller: SongrecordsComponent,
    controllerAs: 'songrecordsCtrl'
  })
  .name;
