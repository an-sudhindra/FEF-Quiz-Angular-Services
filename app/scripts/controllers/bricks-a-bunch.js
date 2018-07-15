'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:BricksABunchCtrl
 * @description
 * # BricksABunchCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
	.controller('BricksABunchCtrl', ['brickWarehouse',function (bwh) {
		var vm = this;
		this.name = 'Bricks A Bunch';

		bwh.getBricksABunch().then(function(data){
			vm.redBricks = data;
		});
	}]);
