(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService'];
  function SignUpController(SignUpService) {
    var $ctrl = this;

    $ctrl.signUp = function () {
      SignUpService.storeUser($ctrl.firstName,$ctrl.lastName,
        $ctrl.inputEmail,$ctrl.phoneNumber,$ctrl.favorite);
      }

      $ctrl.getUser = function () {
        var user = SignUpService.getUser();
        if(user) {
          $ctrl.firstName = user.firstName;
          $ctrl.lastName = user.lastName;
          $ctrl.inputEmail = user.emailAddress;
          $ctrl.phoneNumber = user.phoneNumber;
          $ctrl.favorite = user.favoriteMenuItem;
        }
        return user;
      }
    }

  })();
