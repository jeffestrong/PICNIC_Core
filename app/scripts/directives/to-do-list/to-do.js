'use strict';

angular.module('AniTheme')
.directive('todolist',function(){
		return {
	    templateUrl:'scripts/directives/to-do-list/to-do.html',
	    restrict: 'E',
	    replace: true,
    	controller: function($scope){

			setTimeout(function(){
    			$('.todo-list-wrap').perfectScrollbar();
			}, 100);

        }
	}
});