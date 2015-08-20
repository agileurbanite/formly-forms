let formlyService = ($q, $timeout) => {
  return {
    get: (fields) => {
      let formFields = [
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
            label: 'Cool Stuff',
            placeholder: 'Cool Stuff'
          }
        },
        {
          key: 'checked',
          type: 'checkbox',
          templateOptions: {
            label: 'Check me out'
          }
        }
      ];
      return $timeout(function() {
        return formFields;
      }, 2000);
    },
    set: () => {
      let deferred = $q.defer();
      let formFields = [
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'email',
            label: 'Email address',
            placeholder: 'Enter email',
            required: true
          }
        },
        {
          key: 'awesome',
          type: 'input',
          modelOptions: {
            debounce: {
              default: 2000,
              blur: 0
            },
            updateOn: 'default blur'
          },
          templateOptions: {
            label: 'Awesome Field',
            placeholder: 'Enter awesomeness',
            required: true
          }
        },
        {
          key: 'story',
          type: 'textarea',
          templateOptions: {
            label: 'Some sweet story',
            placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)'
          }
        },
        {
          key: 'left',
          type: 'input',
          templateOptions: {
            placeholder: 'Formly is terrific!',
            addonLeft: {
              class: 'glyphicon glyphicon-euro'
            },
            label: 'One add-on on the left (icon)'
          }
        },
        {
          key: 'both',
          type: 'input',
          templateOptions: {
            placeholder: 'How great is this?',
            addonLeft: {
              class: 'glyphicon glyphicon-home'
            },
            addonRight: {
              text: '$'
            },
            label: 'One add-on on both side (left: icon, right: text)'
          }
        },
        {
          key: 'right',
          type: 'input',
          templateOptions: {
            placeholder: 'Nice, isn\'t it??',

            addonRight: {
              class: 'glyphicon glyphicon-heart'
            },
            label: 'One add-on on the right (icon)'
          }
        }
      ];
      $timeout(function() {
        deferred.resolve(formFields);
      }, 5000);
      return deferred.promise;
    }
  }
};

export default ngModule => {
  ngModule.factory('formlyService', formlyService);
}