'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html'
        })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html'
        })
          .state('accordion', {
            url: '/accordion',
            parent: 'dashboard',
            templateUrl: 'views/ui-elements/accordion.html',
            conntroller: 'AccordionDemoCtrl'
        }) 
          .state('alert', {
          url: '/alert',
          parent: 'dashboard',
          templateUrl: 'views/ui-elements/alert.html',
          conntroller: 'AlertDemoCtrl'
        })
          .state('collapse', {
          url: '/collapse',
          parent: 'dashboard',
          templateUrl: 'views/ui-elements/collapse.html',
          conntroller: 'CollapseDemoCtrl'
        }) 
          .state('datepicker', {
          url: '/datepicker',
          parent: 'dashboard',
          templateUrl: 'views/ui-elements/datepicker.html',
          conntroller: 'DatepickerDemoCtrl'
        })
          .state('dropdown', {
          url: '/dropdown',
          parent: 'dashboard',
          templateUrl: 'views/ui-elements/dropdown.html',
          conntroller: 'DropdownCtrl'
        })
          .state('modal', {
          url: '/modal',
          parent: 'dashboard',
          templateUrl: 'views/ui-elements/modal.html',
          conntroller: 'ModalDemoCtrl'
        })  
          .state('pagination', {
          url: '/pagination',
          parent: 'dashboard',
          templateUrl: 'views/ui-elements/pagination.html',
          conntroller: 'PaginationDemoCtrl'
        })  
          .state('popover', {
          url: '/popover',
          parent: 'dashboard',
          templateUrl: 'views/ui-elements/popover.html',
          conntroller: 'PopoverDemoCtrl'
        })    
          .state('progressbars', {
          url: '/progressbars',
          parent: 'dashboard',
          templateUrl: 'views/ui-elements/progressbar.html',
          conntroller: 'ProgressDemoCtrl'
        })                  
          .state('button', {
            url: '/button',
            parent: 'dashboard',
            templateUrl: 'views/ui-elements/button.html',
            conntroller: 'ButtonsCtrl'
        }); 

  });
