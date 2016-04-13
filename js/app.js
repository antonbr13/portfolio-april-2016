(function() {

    angular.module('portfolioApp', ['ui.router'])

   .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider

         .state('home', {
            url          : '/',
            controller   : 'homeCtrl',
            controllerAs : 'home',
            templateUrl  : 'js/templates/homeTmpl.html'
         })

         .state('portfolio', {
            url          : '/portfolio',
            controller   : 'portfolioCtrl',
            controllerAs : 'portfolio',
            templateUrl  : 'js/templates/portfolioTmpl.html'
         })

         .state('about', {
            url          : '/about',
            controller   : 'aboutCtrl',
            controllerAs : 'about',
            templateUrl  : 'js/templates/aboutTmpl.html'
         })

         .state('contact', {
            url          : '/contact',
            controller   : 'contactCtrl',
            controllerAs : 'contact',
            templateUrl  : 'js/templates/contactTmpl.html'
         });

      $urlRouterProvider
        .otherwise('/');

   });




}());
