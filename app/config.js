export default (ngModule, Angular) => {
  ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'formlyConfigProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider, formlyConfigProvider) {
    //$locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('!');

    // set templates here
    formlyConfigProvider.setType({
      name: 'ipAddress',
      extends: 'input',
      defaultOptions: {
        validators: {
          ipAddress: function(viewValue, modelValue) {
            var value = modelValue || viewValue;
            return /(\d{1,3}\.){3}\d{1,3}/.test(value);
          }
        },
        templateOptions: {
          label: 'IP Address',
          placeholder: 'Enter a valid ipAddress!'
        }
      }
    });

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('default', {
      url: '/',
      template: require('./default/default.html'),
      controller: function() {
        let vm = this;
        angular.extend(vm, {
          user: {
            email: '',
            password: '',
            checked: false
          },
          title: 'This is the default way to do forms',
          submit: function() {
            alert(JSON.stringify(vm.user));
          }
        });
      },
      controllerAs: 'default'
    }).state('formlyDefault', {
      url: '/formly-default',
      template: require('./default/formly-default.html'),
      controller: function() {
        let vm = this;
        angular.extend(vm, {
          userFields: [
            {
              key: 'email',
              type: 'input',
              templateOptions: {
                type: 'email',
                label: 'Email address',
                placeholder: 'Enter email'
              }
            },
            {
              key: 'password',
              type: 'input',
              templateOptions: {
                type: 'password',
                label: 'Password',
                placeholder: 'Password'
              }
            },
            {
              key: 'checked',
              type: 'checkbox',
              templateOptions: {
                label: 'Check me out'
              }
            }
          ],
          title: 'The Formly Way',
          submit: function() {
            alert(JSON.stringify(vm.user));
          }
        });
      },
      controllerAs: 'formly'
    }).state('formlyResolve', {
      url: '/formly-resolve',
      template: require('./default/formly-resolve.html'),
      resolve: {
        fieldData: function(formlyService) {
          return formlyService.get('userFields');
        }
      },
      controller: 'ResolveController',
      controllerAs: 'resolve'
    }).state('formlyPolymorphic', {
      url: '/formly-polymorphic',
      template: require('./default/formly-resolve.html'),
      resolve: {
        fieldData: function(formlyService) {
          return formlyService.get('userFields');
        }
      },
      controller: 'PolymorphicController',
      controllerAs: 'resolve'
    })
  }]);
}