'use strict';

angular.module('AniTheme')
.directive('topnav',function(){
	return {
    templateUrl:'scripts/directives/topnav/topnav.html',
    restrict: 'E',
    replace: true,
	}
});
