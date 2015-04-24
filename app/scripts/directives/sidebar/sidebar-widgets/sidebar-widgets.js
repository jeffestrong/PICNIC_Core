'use strict';

angular.module('yapp')
	.directive('sidebarwidgets',function(){
		return {
        templateUrl:'scripts/directives/sidebar/sidebar-widgets/sidebar-widgets.html',
        restrict: 'E',
        replace: true,
    	}
	});
