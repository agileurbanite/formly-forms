export default ngModule => {
  ngModule.directive('hello', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./hello.html'),
      controllerAs: 'vm',
      controller: function() {
        var vm = this;
        vm.greeting = 'Hello webpack';
      }
    }
  });
}