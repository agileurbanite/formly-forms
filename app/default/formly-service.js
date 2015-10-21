let formlyService = ($q, $timeout) => {
  let characters = [
    {
      id: 1,
      username: 'naruto',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tempus lectus. Vestibulum nisi libero, pharetra nec pellentesque scelerisque, fringilla vel massa. Vestibulum eu lacinia dui, mattis aliquam nisi. Duis luctus imperdiet tincidunt. Sed sed orci posuere, malesuada lectus sit amet, eleifend nisl. Aliquam sit amet elementum turpis, vulputate posuere ipsum. Phasellus est dui, sodales eget mollis vitae, pulvinar vel quam. Aliquam erat volutpat. Fusce mollis hendrerit magna. Curabitur porta felis nec elit ullamcorper sagittis. Donec eros metus, sagittis vulputate eleifend vel, finibus lacinia elit. Fusce tellus erat, fermentum ac nulla nec, dapibus maximus lectus.',
      rank: 'genin',
      tribe: 'uzumaki',
      catchphrase: 'Dattebayo!',
      type: ['wind'],
      powers: ['kage bunshin no jutsu', 'rasengan']
    },
    {
      id: 2,
      username: 'sasuke',
      about: 'Nam id faucibus erat, eu varius tellus. Morbi faucibus pharetra odio nec imperdiet. Cras elementum tellus lectus, non aliquam velit viverra sit amet. Pellentesque elit arcu, varius non ligula ac, fermentum luctus massa. Aenean ut est sodales, suscipit augue non, dignissim massa. Nunc sit amet feugiat ligula, luctus tempus turpis. In in elit dapibus, imperdiet nunc a, euismod nunc. Sed a rhoncus massa. Fusce lacinia tellus est, ac pretium justo maximus vel. Pellentesque scelerisque, risus sed pretium malesuada, justo risus facilisis nulla, eu efficitur nisi massa in elit. Praesent maximus ac tortor rutrum volutpat. Duis sapien enim, hendrerit non ultricies in, aliquet porttitor neque.',
      rank: 's-rank',
      tribe: 'uchiha',
      catchphrase: '...',
      type: ['fire', 'lightning'],
      powers: ['chidori', 'sharingan']
    },
    {
      id: 3,
      username: 'sakura',
      about: 'Proin vestibulum sapien eu diam ornare malesuada. Nullam feugiat in neque at luctus. Nulla id felis ullamcorper leo finibus mattis et ac nunc. Etiam vehicula arcu a nisi egestas convallis. Aliquam erat volutpat. Duis sed tortor magna. Sed elementum dapibus leo, quis gravida massa. Pellentesque in vulputate lacus. Mauris feugiat aliquam augue, sed dictum diam mollis vel. Sed pellentesque, libero quis dictum hendrerit, nisi orci viverra dui, a elementum magna tortor ac arcu. Vestibulum laoreet risus eu maximus vestibulum. Aliquam pellentesque ligula sed sem placerat, et ornare metus vestibulum. Praesent eu justo quis elit consequat suscipit. Cras elementum eget lacus ut rhoncus.',
      rank: 'jounin',
      tribe: 'haruno',
      catchphrase: 'Shannaro!',
      type: [],
      powers: ['healing', 'super strength']
    },
    {
      id: 4,
      username: 'kakashi',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tempus lectus. Vestibulum nisi libero, pharetra nec pellentesque scelerisque, fringilla vel massa. Vestibulum eu lacinia dui, mattis aliquam nisi. Duis luctus imperdiet tincidunt. Sed sed orci posuere, malesuada lectus sit amet, eleifend nisl. Aliquam sit amet elementum turpis, vulputate posuere ipsum. Phasellus est dui, sodales eget mollis vitae, pulvinar vel quam. Aliquam erat volutpat. Fusce mollis hendrerit magna. Curabitur porta felis nec elit ullamcorper sagittis. Donec eros metus, sagittis vulputate eleifend vel, finibus lacinia elit. Fusce tellus erat, fermentum ac nulla nec, dapibus maximus lectus.',
      rank: 'jounin',
      tribe: 'hatake',
      catchphrase: 'Oy!',
      type: ['lightning'],
      powers: ['kage bunshin no jutsu', 'rasengan', 'healing', 'super strength', 'chidori', 'sharingan']
    },
    {
      id: 5,
      username: 'itachi',
      about: 'In nec luctus est, ut auctor nisi. Donec et diam tristique, pulvinar nulla at, placerat arcu. Vestibulum rutrum aliquam vulputate. In elementum enim sed metus suscipit pharetra. Cras hendrerit odio vel rhoncus ornare. Aliquam eget dolor volutpat justo tempus dictum non non est. Sed ornare orci quis ipsum lacinia, ac ullamcorper felis condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis risus sit amet augue mollis, eu imperdiet purus tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent scelerisque molestie finibus. Donec bibendum urna eu purus blandit egestas. Donec eu urna orci. Sed semper diam ut sodales iaculis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras bibendum mauris dolor, a luctus ex feugiat vitae.',
      rank: 's-rank',
      tribe: 'uchiha',
      catchphrase: '...',
      type: ['lightning'],
      powers: ['kage bunshin no jutsu', 'rasengan', 'healing', 'super strength', 'chidori', 'sharingan', 'mangekyou sharingan']
    }
  ];
  return {
    get: () => {
      return $timeout(function() {
        return characters;
      }, 2000);
    },
    getCharacterById: (id) => {
      let character = _.filter(characters, function(obj) {
        return obj.id == id;
      });
      return $timeout(function() {
        return character;
      }, 500);
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
        },
        {
          key: 'text',
          type: 'ipAddress'
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
  ngModule.service('formlyService', formlyService);
}