let polymorphicController = function(fieldData, formlyService) {
  let vm = this;
  angular.extend(vm, {
    userFields: fieldData,
    title: 'Formly Polymorphic Example',
    submit: function() {
      alert(JSON.stringify(vm.user));
    }
  });
  formlyService.set().then(function(data) {
    vm.userFields = _.uniq(_.union(data, vm.userFields), function(item, key, a) {
      return item.key;
    });
  });
};

export default ngModule => {
  ngModule.controller('PolymorphicController', polymorphicController);
}