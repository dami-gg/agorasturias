// create the module including ngRoute for all the routing needs
var agorasturiasApp = angular.module('agorasturiasApp', ['ui.router']);

// configure the routes
agorasturiasApp.config(

    function($stateProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url  : '/home',
                templateUrl : 'pages/home.html'                
            })
/*
            .state('aegee-oviedo', {
                templateUrl : 'pages/aegee-oviedo.html',
                controller  : 'aegeeOviedoController'
            })

            .state('aegee-europe', {
                templateUrl : 'pages/aegee-europe.html',
                controller  : 'aegeeEuropeController'
            })

            .state('agora', {
                templateUrl : 'pages/agora.html',
                controller  : 'agoraController'
            })

            .state('info', {
                templateUrl : 'pages/info.html',
                controller  : 'infoController'
            })

            .state('partners', {
                templateUrl : 'pages/partners.html',
                controller  : 'partnersController'
            })
*/
            .state('contact', {
                url  : '/contact',
                templateUrl : 'pages/contact.html'
            });
    }
);
/*
agorasturiasApp.controller('mainController', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';
});

agorasturiasApp.controller('agoraController', function($scope) {

    $scope.message = 'Aaaagora!';
}); */