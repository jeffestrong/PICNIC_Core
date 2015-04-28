'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {

    $scope.$state = $state;

    $scope.date = new Date();
    
    $scope.layoutToggler = function(y){

		if(y==$scope.multiCollapseVar)
			$scope.multiCollapseVar = 0;
		else
			$scope.multiCollapseVar = y;
	};

	$scope.load = (function(){
		$('#world-map').vectorMap({
			backgroundColor: '#FFFFFF',	
			regionStyle: {
				initial: {
					fill: '#CCC'
				},
				hover: {
					fill: "#3CA2E0"
				}
			}
		});
	});
});	
