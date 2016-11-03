(function (){
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var buy = this;
		buy.items = ShoppingListCheckOffService.getToBuy();

		buy.buyItem = function (index) {
			ShoppingListCheckOffService.buyItem(index);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this;
		bought.items = ShoppingListCheckOffService.getBought();
	}

	function ShoppingListCheckOffService() {
		var serv = this;
		var toBuyItems = [
		{ name: "apple(s)", quantity: 1},
		{ name: "sheep", quantity: 1},
		{ name: "chicken(s)", quantity: 1},
		{ name: "cow(s)", quantity: 1},
		{ name: "tomato(s)", quantity: 1}
		];
		var boughtItems = [];

		serv.buyItem = function (index) {
			boughtItems.push(toBuyItems.splice(index,1)[0]);
		}

		serv.getToBuy = function () {
			return toBuyItems;
		};

		serv.getBought = function () {
			return boughtItems;
		};
	}
})();