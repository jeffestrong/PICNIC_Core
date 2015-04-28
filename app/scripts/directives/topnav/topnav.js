'use strict';

angular.module('yapp')
.directive('topnav',function(){
		return {
	    templateUrl:'scripts/directives/topnav/topnav.html',
	    restrict: 'E',
	    replace: true,
	    controller: function($scope){

        	$scope.showMenu = function(){

		        $('.dashboard-page').toggleClass('push-left');

        	}
        }
	}
});
