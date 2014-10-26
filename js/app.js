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

    $scope.interval = 5000;
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

agorasturiasApp.controller('PostsCtrl', function ($scope) {

    var posts = $scope.posts = [];

    $scope.addPost = function() {
        posts.push({
          title: 'AUTUMN AGORA IS CALLING',
          image: 'http://www.europarl.it/resource/static/images/martin_schulz_ep_president_1.jpg',
          text: ['On the road to Autumn Agora Cagliari 2014...', 'Summer has finally come but nothing could ever stop preparations for the AEGEE Autumn Agora 2014, one of the most important youth events in Europe in terms of number of participants and importance of the discussed issues: thanks to this, AEGEE has obtained a role in the United Nations advisory board and in the Council of Europe.','Agora is the general Assembly of AEGEE association and it takes place twice a year, every year, since 1986, involving generations of students from hundreds of cities. In this special occasion, all of the European Antennae reach the organizing city of the event in order to deal with topics that concern active citizenship and the impact of young people in Europe of the future.']
        });
    };

    for (var i=0; i<7; ++i) {
        $scope.addPost();
    }

    $scope.totalItems = posts.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;

    $scope.setPage = function (pageNumber) {
        $scope.currentPage = pageNumber;
    };

    $scope.pageChanged = function() {
        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
        var end = begin + $scope.itemsPerPage;

        $scope.pagedPosts = $scope.posts.slice(begin, end);
    };

    $scope.pageChanged();
});

agorasturiasApp.controller('FormCtrl', function ($scope) {

    $scope.submitForm = function(isValid) {

        if (isValid) {
            alert('our form is amazing');
        }

    };
});