export default (ngModule, Angular) => {
  ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'formlyConfigProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider, formlyConfigProvider, $state) {
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

    $stateProvider
    .state('default', {
      url: '/',
      template: require('./default/default.html'),
      resolve: {
        charactersData: function(formlyService) {
          return formlyService.get();
        }
      },
      controller: function($state, charactersData) {
        let vm = this;
        angular.extend(vm, {
          characters: charactersData,
          viewProfile: function(id) {
            $state.go('profile', {
              id: id
            });
          }
        });
      },
      controllerAs: 'default'
    })
    .state('profile', {
      url: '/profile/:id',
      template: require('./default/profile.html'),
      resolve: {
        characterData: function(formlyService, $stateParams) {
          return formlyService.getCharacterById($stateParams.id);
        }
      },
      controller: function($state, characterData) {
        let vm = this;
        angular.extend(vm, {
          character: characterData[0],
          edit: function(id) {
            $state.go('edit', {
              id: id
            });
          },
          formly: function(id) {
            $state.go('formly', {
              id: id
            });
          }
        });
      },
      controllerAs: 'profile'
    })
    .state('edit', {
      url: '/edit/:id',
      parent: 'profile',
      template: require('./default/edit.html'),
      controller: function($state, characterData) {
        let vm = this;
        angular.extend(vm, {
          model: characterData[0],
          user: {
            roles: angular.copy(characterData[0].type),
            powers: angular.copy(characterData[0].powers)
          },
          cancel: function(id) {
            $state.go('^');
          },
          submit: function() {
            vm.model.type = vm.user.roles;
            vm.model.powers = vm.user.powers;
            console.log(vm.model);
            $state.go('^');
          }
        });
      },
      controllerAs: 'edit'
    })
    .state('formly', {
      url: '/formly/:id',
      parent: 'profile',
      template: require('./default/formly.html'),
      controller: function($state, characterData) {
        console.log(characterData);
        let vm = this,
          charData = characterData[0];
        angular.extend(vm, {
          model: {},
          fields: [
            {
              key: 'username',
              type: 'input',
              id: 'username',
              defaultValue: charData.username,
              templateOptions: {
                type: 'text',
                label: 'Username',
                placeholder: 'Username',
                required: true,
                minlength: 3,
                focus: true
              }
            },
            {
              key: 'rank',
              type: 'input',
              id: 'rank',
              defaultValue: charData.rank,
              templateOptions: {
                type: 'text',
                label: 'Rank',
                placeholder: 'Rank',
                required: true
              }
            },
            {
              key: 'type',
              type: 'multiCheckbox',
              defaultValue: charData.type,
              templateOptions: {
                label: 'Type',
                options: [],
                valueProp: 'type',
                labelProp: 'type'
              },
              controller: ($scope) => {
                var types = _.map(charData.type, function(n) {
                  var type = {};
                  type.type = n;
                  return type;
                });
                $scope.to.options = types;
              }
            },
            {
              key: 'tribe',
              type: 'input',
              id: 'tribe',
              templateOptions: {
                type: 'text',
                label: 'Tribe',
                placeholder: 'Tribe',
                required: true
              }
            },
            {
              key: 'catchphrase',
              type: 'input',
              id: 'catchphrase',
              templateOptions: {
                type: 'text',
                label: 'Catchphrase',
                placeholder: 'Catchphrase',
                required: true
              }
            },
            {
              key: 'power',
              type: 'multiCheckbox',
              defaultValue: charData.powers,
              templateOptions: {
                label: 'Powers',
                options: [],
                valueProp: 'power',
                labelProp: 'power'
              },
              controller: ($scope) => {
                var powers = _.map(charData.powers, function(n) {
                  var power = {};
                  power.power = n;
                  return power;
                });
                $scope.to.options = powers;
              }
            }
          ],
          cancel: function() {
            $state.go('^');
          },
          submit: function() {
            console.log(vm.model);
            // $state.go('^');
          }
        })
      },
      controllerAs: 'formly'
    })
  }]);
}