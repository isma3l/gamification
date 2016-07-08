(function() {

	'use strict';

	angular
	.module('lb-App')
	.controller('headerCtrl', headerCtrl);


	headerCtrl.$inject = ['authenticationService', '$state'];

	function headerCtrl(authenticationService, $state) {
		var vm = this;


		vm.logout = function() {
			authenticationService.logout();
			$state.go('login');
		};



	}

})();