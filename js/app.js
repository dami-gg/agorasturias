// create the module including ngRoute for all the routing needs
var agorasturiasApp = angular.module('agorasturiasApp', ['ui.router', 'ui.bootstrap']);
// , 'uiRouterStyles'

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

            .state('agora-for-dummies', {
                url : '/agora-for-dummies',
                templateUrl : 'pages/agora-for-dummies.html'/*,
                data : {
                    css : 'css/wallop-slider.css'
                }*/
            })

            .state('event-timetable', {
                url : '/event-timetable',
                templateUrl : 'pages/event-timetable.html'
            })

            .state('pre-events', {
                url : '/pre-events',
                templateUrl : 'pages/pre-events.html'
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

agorasturiasApp.controller('BookCtrl', function ($scope) {

  $scope.index = 0;
  
  $scope.images = [
    'img/agora-for-dummies-page-1.jpg',
    'img/agora-for-dummies-page-2.jpg',
    'img/agora-for-dummies-page-3.jpg',
    'img/agora-for-dummies-page-4.jpg',
    'img/agora-for-dummies-page-5.jpg',
    'img/agora-for-dummies-page-6.jpg',
    'img/agora-for-dummies-page-7.jpg',
    'img/agora-for-dummies-page-8.jpg',
    'img/agora-for-dummies-page-9.jpg',
    'img/agora-for-dummies-page-10.jpg',
    'img/agora-for-dummies-page-11.jpg',
  ];

}).directive('wallopSlider', function () {
    return {
      template: '<div class="wallop-slider {{animationClass}}"><ul class="wallop-slider__list"><li class="wallop-slider__item {{itemClasses[$index]}}" ng-repeat="i in images"><img ng-src="{{i}}"></li></ul><button ng-show="images.length>1" class="st-button wallop-slider__btn wallop-slider__btn--previous btn btn-success btn--previous" ng-disabled="prevDisabled" ng-click="onPrevButtonClicked()">Previous</button><button ng-show="images.length>1" class="st-button wallop-slider__btn wallop-slider__btn--next btn btn-success btn--next" ng-disabled="nextDisabled" ng-click="onNextButtonClicked()">Next</button></div>',
      restrict: 'EA',
      transclude: true,
      replace: false,
      scope: {
        images: '=',
        animation: '@',
        currentItemIndex: '=',
        onNext: '&',
        onPrevious: '&'
      },
      controller: function($scope, $timeout) {

        $scope.itemClasses = [];

        $scope.$watch('images', function(images) {
          if (images.length) {
            _goTo(0);
          }
        });

        // set animation class corresponding to animation defined in CSS. e.g. rotate, slide
        if ($scope.animation) {
          $scope.animationClass = 'wallop-slider--' + $scope.animation;
        }

        var _displayOptions = {
          btnPreviousClass: 'wallop-slider__btn--previous',
          btnNextClass: 'wallop-slider__btn--next',
          itemClass: 'wallop-slider__item',
          currentItemClass: 'wallop-slider__item--current',
          showPreviousClass: 'wallop-slider__item--show-previous',
          showNextClass: 'wallop-slider__item--show-next',
          hidePreviousClass: 'wallop-slider__item--hide-previous',
          hideNextClass: 'wallop-slider__item--hide-next'
        };

        function updateClasses() {
          if ($scope.itemClasses.length !== $scope.images.length) {
            $scope.itemClasses = [];
            for (var i=0; i<$scope.images.length; i++) {
              $scope.itemClasses.push('');
            }
          }
        }
        function _nextDisabled() {
          return ($scope.currentItemIndex + 1) === $scope.images.length;
        }
        function _prevDisabled() {
          return !$scope.currentItemIndex;
        }
        function _updatePagination() {
          $scope.nextDisabled = _nextDisabled();
          $scope.prevDisabled = _prevDisabled();
        }
        function _clearClasses() {
          for (var i=0; i<$scope.images.length; i++) {
            $scope.itemClasses[i] = '';
          }
        }

        // go to slide
        function _goTo(index) {
          if (index >= $scope.images.length || index < 0 || index === $scope.currentItemIndex) {

            if (!index) {
              $scope.itemClasses[0] = _displayOptions.currentItemClass;
            }
            return;
          }

          _clearClasses();

          $scope.itemClasses[$scope.currentItemIndex] = (index > $scope.currentItemIndex) ? _displayOptions.hidePreviousClass : _displayOptions.hideNextClass;

          var currentClass = (index > $scope.currentItemIndex) ? _displayOptions.showNextClass : _displayOptions.showPreviousClass;
          $scope.itemClasses[index] = _displayOptions.currentItemClass + ' ' + currentClass;

          $scope.currentItemIndex = index;

          _updatePagination();

        }

        // button event handlers
        $scope.onPrevButtonClicked = function () {
          _goTo($scope.currentItemIndex - 1);
        };
        $scope.onNextButtonClicked = function () {
          _goTo($scope.currentItemIndex + 1);
        };
        
        $scope.$watch('currentItemIndex', function(newVal, oldVal) {
          if (oldVal > newVal) {
            if (typeof $scope.onPrevious === 'function') {
              $scope.onPrevious();
            }
          } else {
            if (typeof $scope.onNext === 'function') {
              $scope.onNext();
            }
          }
        });

      }
    };
});