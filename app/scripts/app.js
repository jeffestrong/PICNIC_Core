'use strict';

/**
* @ngdoc overview
* @name AniTheme
* @description
* # AniTheme
*
* Main module of the application.
*/
angular
.module('AniTheme', [
    'ui.router',
    'ngAnimate',
    'ui.calendar',
    'chart.js',
    'textAngular',
    'gridshore.c3js.chart',
    'angular-growl',
    'growlNotifications',    
    'angular-loading-bar',
    'ui.bootstrap'
    ])
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.latencyThreshold = 5;
          cfpLoadingBarProvider.includeSpinner = false;
      }])
    .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/home');
    $urlRouterProvider.otherwise('login');

    $stateProvider
    .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
    })
    .state('login', {
        url: '/login',
        parent: 'base',
        templateUrl: 'views/pages/login.html',
        controller: 'LoginCtrl'
    })
    .state('signup', {
        url: '/signup',
        parent: 'base',
        templateUrl: 'views/pages/signup.html',
        controller: 'LoginCtrl'
    })
    .state('404-page', {
        url: '/404-page',
        parent: 'base',
        templateUrl: 'views/pages/404-page.html'
    })
    .state('dashboard', {
        url: '/dashboard',
        parent: 'base',
        templateUrl: 'views/layouts/dashboard.html',
        controller: 'DashboardCtrl'
    })
    .state('home', {
        url: '/home',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/home.html'
    })
    .state('typography', {
        url: '/typography',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/typography.html'
    })
    .state('grid', {
        url: '/grid',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/grid.html'
    })
    .state('blank', {
        url: '/blank',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/blank.html'
    })
    .state('table', {
        url: '/table',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/table.html'
    })
    .state('profile', {
        url: '/profile',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/profile.html'
    })
    .state('elements', {
        url: '/form/elements',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/forms/elements.html'
    }) 
    .state('components', {
        url: '/form/components',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/forms/components.html'
    }) 

    .state('button', {
        url: '/ui-interface/button',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/ui-elements/button.html'
    }) 

    .state('dropdown', {
        url: '/ui-interface/dropdown',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/ui-elements/dropdown.html'
    }) 
    .state('other-elements', {
        url: '/ui-interface/other-elements',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/ui-elements/other-elements.html'
    })
    .state('icons', {
        url: '/ui-interface/icons',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/ui-elements/icons.html'
    })
    .state('panels', {
        url: '/ui-interface/panels',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/panel.html'
    })
    .state('alerts', {
        url: '/ui-interface/alerts',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/ui-elements/alert.html',
        conntroller: 'AlertDemoCtrl'
    })  
    .state('progressbars', {
        url: '/ui-interface/progressbars',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/ui-elements/progressbar.html',
        conntroller: 'ProgressDemoCtrl'
    })      
    .state('pagination', {
        url: '/ui-interface/pagination',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/ui-elements/pagination.html',
        conntroller: 'PaginationDemoCtrl'
    })  
    .state('chartjs', {
        url: '/charts/chart.js',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/charts/chartjs.html'
    })  
    .state('c3chart', {
        url: '/charts/c3chart',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/charts/c3chart.html'
    })      
    .state('calendar', {
        url: '/calendar',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/calendar.html'
    })
    .state('invoice', {
        url: '/invoice',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/invoice.html'
    })
    .state('inbox', {
        url: '/mail/inbox',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/mail/inbox.html'
    })
      .state('compose', {
        url: '/mail/compose',
        parent: 'dashboard',
        templateUrl: 'views/pages/dashboard/mail/compose.html'
    });

});
