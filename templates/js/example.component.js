(function() {
  'use strict';

  angular
    .module('app')
    .component('exampleComponent', {
      templateUrl: '/js/component/example.template.html',
      controller: controller
    });

    function controller() {
      const vm = this;

      vm.$onInit = function() {
        
      }
    }
})();