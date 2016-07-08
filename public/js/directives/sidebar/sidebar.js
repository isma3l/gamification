(function() {

	'use strict';

	angular
	.module('lb-App')
	.directive('mySidebar', mySidebar);

	function mySidebar() {
		return {
			restrict: 'E',
			replace: 'true',
			templateUrl: 'js/directives/sidebar/sidebar.html'
		}
	}
})();