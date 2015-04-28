'use strict';

angular.module('yapp')
	.directive('sidebarProfile',function(){
		return {
        templateUrl:'scripts/directives/sidebar/sidebar-widgets/sidebar-profile/sidebar-profile.html',
        restrict: 'E',
        replace: true,
    	}
	});
