'use strict';

/**
 * @ngdoc function
 * @name AniTheme.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of AniTheme
 */
angular.module('AniTheme')
  .controller('DashboardCtrl', function($scope, $state, $translate, $rootScope) {

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
			zoomOnScroll: false,
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
	$scope.changeLanguage = (function (l) {
		
		$translate.use(l);			
		
	});

	$scope.toggle = function  () {
		if ($('body').hasClass('push')==true) {
			$('body').removeClass('push');
		}
		else if ($('body').hasClass('push-right1')==true) {
			$('body').removeClass('push-right1');
		}
		else if ($('.dashboard-page').hasClass('push-right')==true) {	
			$('.dashboard-page').removeClass('push-right');	
		}
	}

});	
