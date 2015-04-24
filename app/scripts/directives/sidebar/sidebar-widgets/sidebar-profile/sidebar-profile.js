'use strict';

angular.module('yapp')
	.directive('sidebarprofile',function(){
		return {
        templateUrl:'scripts/directives/sidebar/sidebar-widgets/sidebar-profile/sidebar-profile.html',
        restrict: 'E',
        replace: true,
    	}
	});
