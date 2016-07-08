(function() {

	'use strict';

	angular
	.module('lb-App')
	.controller('loginCtrl', loginCtrl);


	loginCtrl.$inject = ['$scope', '$state', 'authenticationService', 'Notification'];

	function loginCtrl($scope, $state, authenticationService, Notification) {

		var vm = this;
		var screenRegister = true;

		vm.types = [{value: "true", description: "Docente"}, {value: "false", description: "Alumno"}];
		vm.newUser = {};
		vm.newUser.admin = vm.types[0].value;
		vm.user = {};
		
		vm.changeInputsRegister = function() {
			vm.showMessageSuccess = false;
		};

		var validateFields = function() {
			if(vm.newUser.name && vm.newUser.email && vm.newUser.password && vm.newUser.password2) {
				if(vm.newUser.password === vm.newUser.password2) {
					return true;
				} else {					
					Notification.error({message: "Las contraseñas no coinciden.", positionX: 'center', positionY: 'bottom'});
				}
			} else {				
				Notification.error({message: "Asegurate de completar todos los campos.", positionX: 'center', positionY: 'bottom'});
			}
			return false;
		};


		vm.register = function() {			
			if(validateFields()) {
				authenticationService.register(vm.newUser).then(
					function() {
						Notification.success({message: "Se registró exitosamente.", 
							positionX: 'center', positionY: 'bottom'});						
					},
					function() {						
						Notification.error({message: "El email ya se encuentra registrado.", 
							positionX: 'center', positionY: 'bottom'});
				});
			}
		};


		vm.submit = function() {
			if(vm.user.email && vm.user.password) {
				authenticationService.login(vm.user).then(
				function(result, responseHeaders) {
					//$state.go('dashboard.projects');
					Notification.info({message: "Bienvenido, la plataforma aun se encuentra en construcción.", 
							positionX: 'center', positionY: 'top'});	
				},
				function(httpResponse) {
					Notification.error({message: "El email o la clave son inválidos.", 
							positionX: 'center', positionY: 'bottom'});
				});
			} else {
					Notification.error({message: "Asegurate de completar todos los campos.", 
							positionX: 'center', positionY: 'bottom'});
			}			
		};

		vm.showRegister = function() {
			if(!screenRegister) {
				vm.change();
				screenRegister = true;
				vm.newUser.name = vm.newUser.email = vm.newUser.password = vm.newUser.password2 = "";
				vm.newUser.admin = vm.types[0].value;
			}	
		};

		vm.showLogin = function() {
			if(screenRegister) {
				vm.showMessageSuccess = false;
				vm.change();
				screenRegister = false;
				vm.user.email = vm.user.password = "";
			}
		};

		vm.change = function() {
			$('.form').animate({
    			height: "toggle",
    			'padding-top': 'toggle',
    			'padding-bottom': 'toggle',
    			opacity: "toggle"
  				}, "slow");
		};



	}

})();
