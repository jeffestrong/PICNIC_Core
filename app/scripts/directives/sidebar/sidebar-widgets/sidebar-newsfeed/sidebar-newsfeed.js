'use strict';

angular.module('yapp')
	.directive('sidebarNewsfeed',function(){
		return {
        templateUrl:'scripts/directives/sidebar/sidebar-widgets/sidebar-newsfeed/sidebar-newsfeed.html',
        restrict: 'E',
        replace: true,
    	}
	});
