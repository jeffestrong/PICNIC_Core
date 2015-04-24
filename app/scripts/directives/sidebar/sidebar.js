'use strict';

angular.module('yapp')
	.directive('sidebar',function(){
		return {
        templateUrl:'scripts/directives/sidebar/sidebar.html',
        restrict: 'E',
        replace: true,
    	}
	});
