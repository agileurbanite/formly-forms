let resolveController = function(fieldData) {
  let vm = this;
  angular.extend(vm, {
    userFields: fieldData,
    title: 'Formly resolve example',
    submit: function() {
      alert(JSON.stringify(vm.user));
    }
  });
};

export default ngModule => {
  ngModule.controller('ResolveController', resolveController);
}