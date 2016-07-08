(function() {

	'use strict';

	angular
	.module('lb-App', ['ui.router', 'oc.lazyLoad', 'ngResource', 'ui-notification'])
	.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider','$ocLazyLoadProvider', 'NotificationProvider'];

	function config($stateProvider, $urlRouterProvider, ocLazyLoadProvider, NotificationProvider) {							
			$urlRouterProvider.otherwise('/login');			
	/*		
			$stateProvider.state('dashboard', {
				url: '/dashboard',				
				templateUrl: 'views/dashboard/main.html',
				resolve: {
					loadMyDirectives: function($ocLazyLoad) {
						return $ocLazyLoad.load({
									name: 'lb-App',
									files: [
										'js/directives/header/header.js',
										'js/directives/sidebar/sidebar.js',
										'js/services/authentication.service.js',
										'js/directives/header/header.controller.js'						
									]
								}),
								$ocLazyLoad.load({
									name: 'ngDialog',
									files: ['bower_components/ng-dialog/js/ngDialog.js']
								}),
								$ocLazyLoad.load({
									name: 'smart-table',
									files: ['bower_components/angular-smart-table/dist/smart-table.js']
								})
					}
				}
			});

			$stateProvider.state('dashboard.projects', {
				url: '/projects',
				templateUrl: 'views/dashboard/proyectos.html',
				controller: 'proyectoCtrl as vm',
				resolve: {
					load: function($ocLazyLoad) {
						return $ocLazyLoad.load({
									name: 'lb-App',
									files: [
										'js/controllers/project.controller.js',
										'js/factory/project.factory.js',
										'js/factory/client.factory.js',
										'js/factory/source.factory.js',
										'js/filters/filter.js',
										'js/directives/rangeFilter/stDateRange.directive.js'																			
									]
								})
					}
				}
			});

			$stateProvider.state('dashboard.projectDetail', {
				url: '/project/:id',
				templateUrl: 'views/dashboard/detailProject.html',
				controller: 'detailProjectCtrl as vm',
				resolve: {
					load: function($ocLazyLoad) {
						return $ocLazyLoad.load({
								name: 'lb-App',
								files: [
									'js/controllers/detailProject.controller.js',
									'js/factory/project.factory.js',
									'js/factory/projectTransaction.factory.js',
									'js/factory/transaction.factory.js'
								]
						})
					}
				}
			});

			$stateProvider.state('dashboard.transactions', {
				url: '/transactions',
				templateUrl: 'views/dashboard/transactions.html',
				controller: 'transactionCtrl as vm',
				resolve: {
					load: function($ocLazyLoad) {
						return $ocLazyLoad.load({
								name: 'lb-App',
								files: [
									'js/controllers/transaction.controller.js',
									'js/factory/transaction.factory.js'
								]
						})
					}
				}
			});

			$stateProvider.state('dashboard.clients', {
				url: '/clients',
				templateUrl: 'views/dashboard/clientes.html',
				controller: 'clienteCtrl as vm',
				resolve: {
					load: function($ocLazyLoad) {
						return $ocLazyLoad.load({
									name: 'lb-App',
									files: [
										'js/factory/client.factory.js',
										'js/controllers/client.controller.js'										
									]
								})
					}
				}

			});

			$stateProvider.state('dashboard.sources', {
				url: '/sources',
				templateUrl: 'views/dashboard/fuentes.html',
				controller: 'sourceCtrl as vm',
				resolve: {
					load: function($ocLazyLoad) {
						return $ocLazyLoad.load({
									name: 'lb-App',
									files: [
										'js/factory/source.factory.js',
										'js/controllers/source.controller.js'
									]
								})
					}
				}
			});
*/
			$stateProvider.state('login', {
				url: '/login',
				templateUrl: 'views/auth/login.html',				
				controller: 'loginCtrl as vm',				
				resolve: {
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'lb-App',
							files: [
								'js/services/authentication.service.js',
								'js/controllers/login.controller.js',
									]
						})
					}
				}
				
			});
/*
			NotificationProvider.setOptions({ 
				delay: 10000, 
				startTop: 20, 
				startRight: 10, 
				verticalSpacing: 20, 
				horizontalSpacing: 20, 
				positionX: 'left', 
				positionY: 'bottom' 
			});

                    Notification('Primary notification');                
                    Notification.error('Error notification');               
                    Notification.success('Success notification');                
                    Notification.info('Information notification');                                
                    Notification.warning('Warning notification');
*/
	};
/*
	angular
	.module('lb-App')
	.run(['$rootScope', '$location', '$window', '$state', function($rootScope, $location, $window, $state) {
		$rootScope.$on('$stateChangeStart', function(event, toState, fromState) {

			if(toState.name === 'login' && isLoggedIn($window)) {
				event.preventDefault();
				$state.go('dashboard.projects');	
			} 

			if(toState.name !== 'login' && !isLoggedIn($window)) {				
				event.preventDefault();
				$state.go('login');				
			}
			
		});
	}]);

	
	var isLoggedIn = function(window) {
    	var token = window.localStorage['platform-token'];

    	if(token) {
      		var payload = token.split('.')[1];
      		payload = window.atob(payload);
      		payload = JSON.parse(payload);

	      return payload.exp > Date.now() / 1000;
	    } 
    	return false;
  	};
*/

})();
