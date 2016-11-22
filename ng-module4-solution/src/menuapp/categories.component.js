(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/categories.template.html',
  controller: CategoriesController,
  bindings: {
    categories: '<'
  }
});

CategoriesController.$inject = ['$rootScope']
function CategoriesController($rootScope) {
  var $ctrl = this;
  var cancellers = [];

  $ctrl.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){

    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){

    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){

    });
    cancellers.push(cancel);
  };

  $ctrl.$onDestroy = function () {
    cancellers.forEach(function (item) {
      item();
    });
  };

};

})();
