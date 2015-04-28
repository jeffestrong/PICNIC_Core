'use strict';

angular.module('AniTheme')
	.directive('menubar',function(){
		return {
        templateUrl:'scripts/directives/sidebar/menu-bar/menu-bar.html',
        restrict: 'E',
        replace: true,
    	}
	});
