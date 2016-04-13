(function() {

    angular.module('portfolioApp')

    .directive('navbarDirective', function() {

       return {
         restrict     : "E",
         templateUrl  : 'js/directives/navbar/navbarDirectiveTmpl.html',
         controller   : 'navbarDirectiveCtrl',
         controllerAs : 'navbar'
      };
    });




}());
