(function() {

	'use strict';

	angular
	.module('lb-App')
	.directive('myHeader', myHeader);

	function myHeader() {
		return {
			restrict: 'E',
			replace: 'true',
			templateUrl: 'js/directives/header/header.html',
			controller: 'headerCtrl as vm'
		}
	}

})();