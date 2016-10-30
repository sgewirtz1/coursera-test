(function() {
	'use strict';

/**
*  This is the Lunch Checker module for checking
*  that one's lunch isn't too big
*/
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
	//set the default message
	$scope.myMessage = "";
	$scope.customStyle = {};

	$scope.checkFoods = function () {
		if ($scope.lunchMenu == "" || $scope.lunchMenu == undefined) {
			$scope.myMessage = "Please enter data first."
			$scope.customStyle.textColor = " red"
		}
		else {
			var foods = $scope.lunchMenu.split(",");
			if (foods.length <=  3 || foods == undefined) {
				$scope.myMessage = "Enjoy!";
				$scope.customStyle.textColor = " green"
			}
			else {
				$scope.myMessage = "Too Much!";
				$scope.customStyle.textColor = " green"
			}
		}
	}
}

})();