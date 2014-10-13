// create the module including ngRoute for all the routing needs
var agorasturiasApp = angular.module('agorasturiasApp', ['ui.router', 'ui.bootstrap']);

// configure the routes
agorasturiasApp.config(

    function($stateProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url  : '/home',
                templateUrl : 'pages/home.html'                
            })

            .state('aegee-oviedo', {
                url : '/aegee-oviedo',
                templateUrl : 'pages/aegee-oviedo.html'
            })

            .state('aegee-europe', {
                url : '/aegee-europe',
                templateUrl : 'pages/aegee-europe.html'
            })

            .state('agora', {
                url : '/agora',
                templateUrl : 'pages/agora.html'
            })

            .state('info', {
                url  : '/info',
                templateUrl : 'pages/info.html'
            })

            .state('partners', {
                url  : '/partners',
                templateUrl : 'pages/partners.html'
            })

            .state('contact', {
                url  : '/contact',
                templateUrl : 'pages/contact.html'
            });
    }
);

agorasturiasApp.controller('CarouselCtrl', function ($scope) {

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
  
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length;
        slides.push({
          title: ['AEGEE', 'Asturias', 'Gijón'][slides.length % 3],
          image: ['carousel-aegee.png', 'carousel-asturias.jpg', 'carousel-gijon.jpg'][slides.length % 3],
          text: ['AEGEE topic description','The Natural Paradise',
                    'The capital of the Green Coast','Surplus'][slides.length % 3]
        });
    };
  
    for (var i=0; i<3; ++i) {
        $scope.addSlide();
    }
});

agorasturiasApp.controller('FormCtrl', function ($scope) {

    $scope.submitForm = function(isValid) {

        if (isValid) {
            alert('our form is amazing');
        }

    };

});