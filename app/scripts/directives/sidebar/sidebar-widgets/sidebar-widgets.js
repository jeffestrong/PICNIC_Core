'use strict';

angular.module('AniTheme')
	.directive('sidebarwidgets',function(){
		return {
        templateUrl:'scripts/directives/sidebar/sidebar-widgets/sidebar-widgets.html',
        restrict: 'E',
        replace: true,
        
        controller: function($scope){

			setTimeout(function(){
    			$('.widgets-content').perfectScrollbar();
			}, 100);
			
    	}
	}
});
