(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo','favoriteItem','imageLink'];
function MyInfoController(userInfo,favoriteItem,imageLink) {
  var $ctrl = this;
  $ctrl.userInfo = userInfo;
  $ctrl.fave = favoriteItem;
  $ctrl.src = imageLink;
}
})();
