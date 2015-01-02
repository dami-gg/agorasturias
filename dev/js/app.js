// create the module including ngRoute for all the routing needs
var agorasturiasApp = angular.module('agorasturiasApp',
  ['ui.router', 'ui.bootstrap', 'ngRoute', 'ngResource',
  'ngCkeditor','ngSanitize']);
// , 'uiRouterStyles'
// configure the routes
agorasturiasApp.config(
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url  : '/home',
                templateUrl : 'public/views/home.html'
            })

            .state('aegee-oviedo', {
                url : '/aegee-oviedo',
                templateUrl : 'public/views/aegee-oviedo.html'
            })

            .state('aegee-europe', {
                url : '/aegee-europe',
                templateUrl : 'public/views/aegee-europe.html'
            })

            .state('core-team', {
                url : '/core-team',
                templateUrl : 'public/views/core-team.html'
            })

            .state('agora-for-dummies', {
                url : '/agora-for-dummies',
                templateUrl : 'public/views/agora-for-dummies.html'/*,
                data : {
                    css : 'css/wallop-slider.css'
                }*/
            })

            .state('event-timetable', {
                url : '/event-timetable',
                templateUrl : 'public/views/event-timetable.html'
            })

            .state('pre-events', {
                url : '/pre-events',
                templateUrl : 'public/views/pre-events.html'
            })

            .state('info', {
                url  : '/info',
                templateUrl : 'public/views/info.html'
            })

            .state('partners', {
                url  : '/partners',
                templateUrl : 'public/views/partners.html'
            })

            .state('contact', {
                url  : '/contact',
                templateUrl : 'public/views/contact.html'
            })

            .state('account', {
                url  : '/account',
                templateUrl : 'public/views/account.html'
            })

            .state('login', {
              url : '/login',
              templateUrl : 'public/views/login.html'
            })

            .state('new_post',{
              url:'/new_post',
              templateUrl : 'public/views/new_post.html'
            })

            .state('edit_post',{
              url:'/edit_post',
              templateUrl : 'public/views/edit_post.html'
            });
    }
);

agorasturiasApp.factory('Data', ['$http',
function ($http) { // This service connects to our REST API

  var serviceBase = 'api/v1/';
  var obj = {};
  obj.get = function (q, object) {
    return $http.get(serviceBase + q, object).then(function (results) {
      return results.data;
    });
  };
  obj.post = function (q, object) {
    return $http.post(serviceBase + q, object).then(function (results) {
      return results.data;
    });
  };
  obj.put = function (q, object) {
    return $http.put(serviceBase + q, object).then(function (results) {
      return results.data;
    });
  };
  obj.delete = function (q) {
    return $http.delete(serviceBase + q).then(function (results) {
      return results.data;
    });
  };

  return obj;
}]);


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

agorasturiasApp.controller('PostsCtrl', ['$rootScope', '$scope', '$location', '$anchorScroll', 'Data',
  function ($rootScope, $scope, $location, $anchorScroll, Data) {

    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;

    $scope.setPage = function (pageNumber) {
        $scope.currentPage = pageNumber;
    };

    $scope.pageChanged = function() {
      $scope.lastPageLoaded = angular.copy($scope.currentPage);
      Data.get('posts/desc/'+$scope.currentPage+'/'+$scope.itemsPerPage)
      .then(function(response){

        if(response.status === "success"){
          $scope.posts = response.posts;
          $scope.totalItems = response.total_posts;

          $scope.pagedPosts = $scope.posts;
        }

      });

    };

    //$scope.loadPosts($scope.currentPage,$scope.itemsPerPage);
    $scope.pageChanged();

    $scope.gotoTop = function() {
      $location.hash('menu-wrapper');
      $anchorScroll();
    };

    $scope.editPost = function(post){
      $rootScope.currentPost = angular.copy(post);
      $location.path ('/edit_post');
    };


}]);

agorasturiasApp.controller('NewPostCtrl',['$location','$scope','Data',
function($location,$scope,Data){

  $scope.editorOptions = {
    language:'es',
    uiColor:'#ffffff'
  };

  $scope.doNewPost = function(new_post){
    new_post.username = $scope.username;
    new_post.modifier_username = $scope.username;
    new_post.user_id = $scope.uid;
    new_post.modifier_id = $scope.uid;
    new_post.image = '';
    new_post.header_image = '';

    Data.post('posts',{
      post:JSON.stringify(new_post)

    }).then(function(response){

      if(response.status==="success"){
        alert(response.message);
        $location.path('/home');
      }
      else
        alert(response.message);
    });
  };

}]);

agorasturiasApp.controller('EditPostCtrl',['$location','$scope','Data',
function($location,$scope,Data){

  $scope.editorOptions = {
    language:'es',
    uiColor:'#ffffff'
  };

  $scope.doEditPost = function(updated_post){

    updated_post.modifier_username = $scope.username;
    updated_post.modifier_id = $scope.uid;

    Data.put('posts/'+updated_post.id, {
      post:JSON.stringify(updated_post)
    }).then(function(response){

      if(response.status==="success"){
        alert("Post actualizado correctamente");
        $location.path('/home');
      }
      else
        alert(response.message);
    });
  };

  $scope.doDeletePost = function(post_id){
    Data.delete('posts/'+post_id).then(function(response){
      if(response.status==="success"){
        alert(response.message);
        $location.path('/home');
      }
      else
        alert(response.message);
    });
  };
}]);

agorasturiasApp.controller('FormCtrl', function ($scope) {

    $scope.submitForm = function(isValid) {

        $scope.submitted = true;

        if (isValid) {
            alert('our form is amazing');
        }

    };
});

agorasturiasApp.controller('BookCtrl', function ($scope) {

  $scope.index = 0;

  $scope.images = [
    'public/img/agora-for-dummies-page-1.jpg',
    'public/img/agora-for-dummies-page-2.jpg',
    'public/img/agora-for-dummies-page-3.jpg',
    'public/img/agora-for-dummies-page-4.jpg',
    'public/img/agora-for-dummies-page-5.jpg',
    'public/img/agora-for-dummies-page-6.jpg',
    'public/img/agora-for-dummies-page-7.jpg',
    'public/img/agora-for-dummies-page-8.jpg',
    'public/img/agora-for-dummies-page-9.jpg',
    'public/img/agora-for-dummies-page-10.jpg',
    'public/img/agora-for-dummies-page-11.jpg',
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

agorasturiasApp.controller('PartnersCtrl', function ($scope, partitionService) {

  var partners = $scope.partners = [];

    $scope.addPartner = function() {
        partners.push({
          link: 'http://www.uniovi.es/',
          logo: 'http://goo.gl/NUL33N'
        });
    };

    for (var i=0; i<8; ++i) {
        $scope.addPartner();
    }

    $scope.rows = partitionService.partition(partners, 3);
});

agorasturiasApp.controller('ThumbnailsCtrl', function ($scope, partitionService) {

  var members = $scope.members = [];

  $scope.addMember = function() {
    members.push({
      name: 'Alberto Cuesta',
      position: 'Main organizer',
      image: 'http://goo.gl/eJvm24',
      hover: 'http://goo.gl/y2tsTX'
    });
  };

  for (var i=0; i<7; ++i) {
    $scope.addMember();
  }

  $scope.rows = partitionService.partition(members, 4);
});

agorasturiasApp.controller('UsersCtrl', ['$rootScope','$scope','$location','$http','Data',
function($rootScope,$scope,$location,$http,Data){

  $rootScope.newPost = function(){
    $rootScope.currentPost = null;
    $location.path('/new_post');
  };

  //initially set those objects to null to avoid undefined error
  $rootScope.login = {};

  $rootScope.doLogin = function (user) {
    Data.post('login',
      {
        username:user.username,
        password:user.password
      }).then(function (response) {
      if (response.status === "success") {
        $rootScope.authenticated = true;
        $rootScope.username = response.username;
        $rootScope.uid = response.uid;
        $rootScope.appID = response.app_id;
        $rootScope.email = response.email;
        $rootScope.name = response.name;

        $location.path('/home');
      }
      else
        alert(response.message);
    });
  };
}]);

agorasturiasApp.service('partitionService', function() {

  this.partition = function (dataArray, chunkSize) {
    var result = [];

    for (var i = 0; i < dataArray.length; i += chunkSize) {
      result.push(dataArray.slice(i, i+chunkSize));
    }

    return result;
  };
});

agorasturiasApp.filter('htmlSafe',['$sce',function($sce){
  return $sce.trustAsHtml;
}]);
