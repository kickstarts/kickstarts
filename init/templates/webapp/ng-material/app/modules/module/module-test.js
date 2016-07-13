(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.test:moduleTest
	* @description
	* # moduleTest
	* Test of the app
	*/

	describe('moduleCtrl', function () {
		var controller = null, $scope = null, $location;

		beforeEach(function () {
			module('app');
		});

		beforeEach(inject(function ($controller, $rootScope, _$location_) {
			$scope = $rootScope.$new();
			$location = _$location_;

			controller = $controller('ModuleCtrl', {
				$scope: $scope
			});
		}));

		it('Should ModuleCtrl must be defined', function () {
			expect(controller).toBeDefined();
		});

		it('Should match the path Module name', function () {
			$location.path('/home');
			expect($location.path()).toBe('/home');
		});

	});
})();
