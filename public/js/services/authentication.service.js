(function() {

	'use strict';

	angular
	.module('lb-App')
	.service('authenticationService', authenticationService);

	authenticationService.$inject = ['$window', '$resource'];

	function authenticationService($window, $resource) {	

		var self = this;

		this.saveToken = function(token) {
			$window.localStorage['gamification-token'] = token; 
		};

		this.getToken = function () {
      		return $window.localStorage['gamification-token'];
    };

    	this.isLoggedIn = function() {
      		var token = self.getToken();
      		var payload;

      		if(token){
        		payload = token.split('.')[1];
        		payload = $window.atob(payload);
        		payload = JSON.parse(payload);

        		return payload.exp > Date.now() / 1000;
      		} else {
        		return false;
      		}
    	};
/*
    	var getPayload() = function() {
    		payload = token.split('.')[1];
        	payload = $window.atob(payload);
        	return JSON.parse(payload);
    	};
*/
    	this.currentUser = function() {
      		if(isLoggedIn()){
        		var token = self.getToken();
        		var payload = token.split('.')[1];
        		payload = $window.atob(payload);
        		payload = JSON.parse(payload);
        		
        		return {
          			email : payload.email,
          			name : payload.name
        		};
      		}
    	};


    	this.logout = function() {
      		$window.localStorage.removeItem('gamification-token');
    	};

      this.register = function(user) {
        return $resource('api/register', {}, {
          register: { method: 'POST'}
        }).register(user).$promise;
      };


    	this.login = function(user) {    		
    		var resource = $resource('api/login', {}, {
	    		login: { method: 'POST'}
	    	});

	    	return resource.login(user,
	    		function(data) {	    			
	    			self.saveToken(data.token);		
	    		},
	    		function() {	    			
	    		}).$promise;	    	
    	};

	}


})();