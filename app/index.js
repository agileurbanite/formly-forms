const angular = require('angular');

require('oclazyload');
require('api-check');
require('angular-formly');
require('angular-formly-templates-bootstrap');

const ngModule = angular.module('app', [
  require('angular-ui-router'), 'oc.lazyLoad', 'formly', 'formlyBootstrap'
]);

require('./directives')(ngModule);
require('./config')(ngModule, angular);