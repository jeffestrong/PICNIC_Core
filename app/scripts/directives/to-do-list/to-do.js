'use strict';

angular.module('yapp')
.directive('todolist',function(){
	return {
    templateUrl:'scripts/directives/to-do-list/to-do.html',
    restrict: 'E',
    replace: true,
	}
});
