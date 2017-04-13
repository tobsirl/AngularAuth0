'use strict';

import angular from 'angular';

export default angular.module('angularAuth0App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
