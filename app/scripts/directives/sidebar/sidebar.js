'use strict';

angular.module('AniTheme')
	.directive('sidebar',function(){
		return {
        templateUrl:'scripts/directives/sidebar/sidebar.html',
        restrict: 'E',
        replace: true,
    	}
	});
