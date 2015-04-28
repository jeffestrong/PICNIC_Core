'use strict';


angular.module('AniTheme')
	.directive('sidebarNewsfeed',function(){
		return {
        templateUrl:'scripts/directives/sidebar/sidebar-widgets/sidebar-newsfeed/sidebar-newsfeed.html',
        restrict: 'E',
        replace: true,
    	}
	});
