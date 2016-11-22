(function() {
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiRoot','https://davids-restaurant.herokuapp.com');

  MenuDataService.$inject = ['$http', 'ApiRoot'];
  function MenuDataService($http, ApiRoot) {
    var service = this;

    service.getAllCategories = function () {
      return  $http({
        method: 'GET',
        url: (ApiRoot + '/categories.json')
      })
      .then(function success(response) {
        return response.data;
      },
      function error(response) {
        console.log(response);
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: 'GET',
        url: (ApiRoot + '/menu_items.json'),
        params: {
          category: categoryShortName
        }
      })
      .then(function success(response) {
        return response.data;
      },
      function error(response) {
        console.log(response);
      });
    };
  }
}());
