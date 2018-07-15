'use strict';

/**
 * @ngdoc service
 * @name serviceQuizApp.brickWarehouse
 * @description
 * # brickWarehouse
 * Service in the serviceQuizApp.
 */
angular.module('serviceQuizApp').service('brickWarehouse', function () {
	this.getBricksABunch = function(){
		return $.get("/data/BricksABunch.json");
	}

	this.getLotsOfBricksBlue = function(){
		return $.get("/data/LotsOfBricks-Blue.json");
	}
	this.getLotsOfBricksRed = function(){
		return $.get("/data/LotsOfBricks-Red.json");
	}
	this.getLotsOfBricksGreen = function(){
		return $.get("/data/LotsOfBricks-Green.json");
	}
});