'use strict';

angular.module('AniTheme')
	.directive('rightSidebar',function(){
		return {
        templateUrl:'scripts/directives/sidebar/right-sidebar.html?v='+window.app_version,
        restrict: 'E',
        replace: true,

        controller: function($scope){

			setTimeout(function(){
    			$('.sidenav-outer').perfectScrollbar();
			}, 100);

			$scope.showingSubNav = 0;

			$scope.showSubNav = function(x){
				console.log('msg');
				if(x==$scope.showingSubNav)
					$scope.showingSubNav = 0;
				else
					$scope.showingSubNav = x;
				};
    	}
   

	}
});
