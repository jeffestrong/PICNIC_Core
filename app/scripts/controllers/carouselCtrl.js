'use strict';

/**
 * @ngdoc function
 * @name AniTheme.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of AniTheme
 */
 
 angular.module('AniTheme').controller('carouselCtrl', function ($scope) {
 	$scope.slides = [ 	
 	{url: 'images/img1.jpg'},
 	{url: 'images/img2.jpg'},
 	{url: 'images/img3.jpg'}
 	];
 });