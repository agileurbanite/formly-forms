const angular = require('angular');

require('lodash');
require('oclazyload');
require('api-check');
require('angular-formly');
require('angular-formly-templates-bootstrap');

const ngModule = angular.module('app', [
  require('angular-ui-router'), 'oc.lazyLoad', 'formly', 'formlyBootstrap'
]);

require('./default/formly-service')(ngModule);
require('./default/resolve-controller')(ngModule);
require('./default/polymorphic-controller')(ngModule);
require('./directives')(ngModule);
require('./config')(ngModule, angular);