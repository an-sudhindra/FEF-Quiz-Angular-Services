'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:LotsOBricksCtrl
 * @description
 * # LotsOBricksCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
	.controller('LotsOBricksCtrl', ['brickWarehouse',function (bwh) {
		this.name = 'Lots O Bricks';
		var vm = this;

		bwh.getLotsOfBricksRed().then(function(data){
			vm.redBricks = data;
		});
		bwh.getLotsOfBricksBlue().then(function(data){
			vm.blueBricks = data;
		});
		bwh.getLotsOfBricksGreen().then(function(data){
			vm.greenBricks = data;
		});
	}]);

