'use strict';

angular.module('AniTheme')
.directive('topnav',function(){
		return {
	    templateUrl:'scripts/directives/topnav/topnav.html',
	    restrict: 'E',
	    replace: true,
	    controller: function($scope){

        	$scope.showMenu = function(){

		        $('.dashboard-page').toggleClass('push-right');

        	}
        	$scope.changeTheme = function(setTheme){

				$('<link>')
				  .appendTo('head')
				  .attr({type : 'text/css', rel : 'stylesheet'})
				  .attr('href', 'styles/app-'+setTheme+'.css');
				  console.log('hey');

				// $.get('/api/change-theme?setTheme='+setTheme);

			}
        }
	}
});
