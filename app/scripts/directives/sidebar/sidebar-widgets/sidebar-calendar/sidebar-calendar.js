'use strict';

angular.module('yapp')
	.directive('sidebarcalendar',function(){
		return {
        templateUrl:'scripts/directives/sidebar/sidebar-widgets/sidebar-calendar/sidebar-calendar.html',
        restrict: 'E',
        replace: true,
    	}
	});
