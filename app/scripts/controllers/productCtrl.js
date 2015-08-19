'use strict';

/**
 * @ngdoc function
 * @name AniTheme.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of AniTheme
 */
 
 angular.module('AniTheme').controller('productControl', function ($scope) {
 	$scope.products = [
 	{url:'images/food1.jpg', head:'Header is here', desc: 'Lorem ipsum dolor sit amet, consectetur quidem?Lorem ipsum dolor sit amet, consectetur quidem?Lorem ipsum dolor sit amet, consectetur quidem?Lorem ipsum dolor sit amet, consectetur quidem?'}, 
 	{url:'images/food2.jpg', head:'Header is here', desc: 'Lorem ipsum dolor sit amet, consectetur Voluptate!'},         
 	{url:'images/food3.jpg', head:'Header is here', desc: 'Lorem ipsum dolor sit amet, consectetur nulla'},         
 	{url: 'images/food4.jpg', head:'Header is here', desc: 'Lorem ipsum dolor sit amet, consectetur odit'},
 	{url: 'images/food5.jpg', head:'Header is here', desc: 'Lorem ipsum dolor sit amet, consectetur Aliquid!'},
 	{url: 'images/food6.jpg', head:'Header is here', desc: 'Lorem ipsum dolor sit amet, consectetur a!'}
 	];
 });