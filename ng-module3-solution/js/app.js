(function() {
	"use strict";

	angular.module('NarrowIdDownApp', [])
	.controller('NarrowIdDownController', NarrowIdDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems',FoundItems)
	.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

	function FoundItems() {
		var ddo = {
			templateUrl: 'menu_list.html',
			restrict: 'E',
			scope: {
				foundItems: "<",
				onRemove: "&"
			},
			controller: NarrowIdDownDirectiveController,
			controllerAs: 'menuDir',
			bindToController: true
		};
		return ddo;
	}

	NarrowIdDownDirectiveController.$inject=['MenuSearchService'];
	function NarrowIdDownDirectiveController(MenuSearchService) {
		var menuDir = this;
		menuDir.onRemove = function (itemIndex) {
			menuDir.foundItems.splice(itemIndex.index,1);
		}

	}

	NarrowIdDownController.$inject = ['MenuSearchService'];
	function NarrowIdDownController(MenuSearchService) {
		var menu = this;


		menu.getMatchedMenuItems = function () {
			var promise = MenuSearchService.getMenuItems();
			var data = promise.then(function success(a) {
				var fil = [];
				for (var i = 0; i < a.data.menu_items.length; i++) {
					if(a.data.menu_items[i].name.toLowerCase().indexOf(menu.searchTerm) !== -1)
					{
						fil.push(a.data.menu_items[i]);
					}
				}
				menu.found = fil;
			});
		}
	}

	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {
		var service = this;

		service.getMenuItems = function() {
			var ans1 = $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json")
			});
			return ans1;
		};
	}
})();
