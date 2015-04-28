'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp').controller('todoCtrl', function ($scope) {
  $scope.todos = [
    {text:'Meeting with Xian Lu.', done:false},         
    {text:'Lern AngularJS.', done:false},         
    {text:'Exercise at 6:pm.', done:false},         
    {text: 'Sarah birthday', done:false},
  ];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
});