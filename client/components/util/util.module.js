'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('angularAuth0App.util', [])
  .factory('Util', UtilService)
  .name;
