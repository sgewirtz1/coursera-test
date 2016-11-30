(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;
  var user;
  var favoriteItemDetails;
  var imageLink;

  service.storeUser = function (fName, lName, email, telNum, faveNum) {
    var usr = createUser(fName, lName, email, telNum, faveNum);
    favoriteItemDetails = validateMenuItem(faveNum);
    saveUser(usr);
  }

  service.getUser = function () {
    return user;
  }

  service.getFavorite = function () {
    return favoriteItemDetails;
  }

  service.getImageSrc = function () {
    return imageLink;
  }

  function saveUser(usr) {
    user = usr;
  }

  function createUser(fName, lName, email, telNum, faveNum) {
    return {
      firstName: fName,
      lastName: lName,
      emailAddress: email,
      phoneNumber: telNum,
      favoriteMenuItem: faveNum,
    };
  }

  function validateMenuItem(itemNumber) {
    return $http.get(ApiPath + '/menu_items/' + itemNumber.toUpperCase() + '.json')
    .then(function (response) {
      imageLink = (ApiPath + '/images/' + itemNumber.toUpperCase() + '.json');
      return response.data;
    },
    function (error) {
      // drop error on the floor
    });
  }
  };
})();
