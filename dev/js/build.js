// create the module including ngRoute for all the routing needs
var agorasturiasApp = angular.module('agorasturiasApp',
  ['ui.router', 'ui.bootstrap', 'ngResource', 'ngCkeditor', 'ngSanitize', 
    'pascalprecht.translate', 'angularFileUpload', 'ngCookies', 'ngSocial']);

// configure the routes
agorasturiasApp.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
        
        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url  : '/home',
                templateUrl : 'public/views/home.html'
            })

            .state('post',{
              url:'/post/:postId',
              templateUrl : 'public/views/post.html'
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
                templateUrl : 'public/views/agora-for-dummies.html'
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

            .state('new-post',{
              url:'/new-post',
              templateUrl : 'public/views/new-post.html'
            })

            .state('edit-post',{
              url:'/edit-post',
              templateUrl : 'public/views/edit-post.html'
            })

            .state('file-uploader',{
              url:'/file-uploader',
              templateUrl : 'public/views/file-uploader.html'
            });

      $translateProvider.translations('en', {
        
          // TODO: Load from DB table
          HOME: 'Home',
          ABOUT: 'About',
          AEGEE_EUROPE: 'AEGEE-Europe',
          CORE_TEAM: 'Core team',
          AGORA: 'Agora',
          GENERAL_INFORMATION: 'General information',
          AGORA_FOR_DUMMIES: 'Agora for dummies',
          EVENT_TIMETABLE: 'Event timetable',
          PRE_EVENTS: 'Pre-events',
          PARTNERS: 'Partners',
          CONTACT: 'Contact',
          LANGUAGE: 'Versión en español'
      });

      $translateProvider.translations('es', {
        
          // TODO: Load from DB table
          HOME: 'Inicio',
          ABOUT: 'Sobre nosotros',
          AEGEE_EUROPE: 'AEGEE-Europa',
          CORE_TEAM: 'Equipo organizador',
          AGORA: 'Ágora',
          GENERAL_INFORMATION: 'Información general',
          AGORA_FOR_DUMMIES: 'Ágora para novatos',
          EVENT_TIMETABLE: 'Calendario de eventos',
          PRE_EVENTS: 'Preeventos',
          PARTNERS: 'Colaboradores',
          CONTACT: 'Contacto',
          LANGUAGE: 'English version'
      });

      $translateProvider.preferredLanguage('en');
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
agorasturiasApp.controller('PostsCtrl', 
  ['$rootScope', '$scope', '$location', '$anchorScroll', 'Data', '$translate', '$cookieStore',
    function ($rootScope, $scope, $location, $anchorScroll, Data, $translate, $cookieStore) {

    var currentPageInCookie = $cookieStore.get("currentPage");

    if (currentPageInCookie !== undefined) {
      $scope.currentPage = currentPageInCookie;
    }
    else {
      $scope.currentPage = 1;
    }

    $scope.itemsPerPage = 5;  

    $scope.setPage = function (pageNumber) {
        $scope.currentPage = pageNumber;
        $cookieStore.put("currentPage", pageNumber);
    };

    $scope.pageChanged = (function() {
      $scope.lastPageLoaded = angular.copy($scope.currentPage);
      Data.get('posts/' + $translate.use() + '/desc/' + $scope.currentPage + '/' + $scope.itemsPerPage)
      .then(function(response){

        if(response.status === "success"){
          $scope.posts = response.posts;
          $scope.totalItems = response.total_posts;

          $scope.pagedPosts = $scope.posts;
        }

      });

      $cookieStore.put("currentPage", $scope.lastPageLoaded);
    })();

    $scope.gotoTop = function() {
      $location.hash('menu-wrapper');
      $anchorScroll();
    };

    $scope.editPost = function(post){
      $rootScope.currentPost = angular.copy(post);
      $location.path ('/edit-post');
    };

    $scope.openPost = function(post){
      $cookieStore.put('post', post);

      $rootScope.currentPost = angular.copy(post);
      $location.path ('/post/' + post.id);
    };
}]);

agorasturiasApp.controller('PostViewerCtrl', 
  ['$rootScope', '$scope', '$location', '$anchorScroll', 'Data', '$translate', '$cookieStore', '$stateParams',
    function ($rootScope, $scope, $location, $anchorScroll, Data, $translate, $cookieStore, $stateParams) {

    var paramPostId = $stateParams.postId,
        postInCookie = $cookieStore.get("post");

    if (postInCookie !== undefined && postInCookie.id === paramPostId) {
      $rootScope.currentPost = postInCookie;
    }    
    else {      
      $rootScope.currentPost = getPostById(paramPostId);
      $cookieStore.put('post', $rootScope.currentPost);
    }

    $scope.currentUrl = document.location.href;

    function getPostById (postId) {
      Data.get('posts/' + postId + '/' + $translate.use())
      .then(function(response){

        if(response.status === "success"){
          $rootScope.currentPost = {id: postId, title: response.title, text: response.text };
        }

      });
    }

    $scope.gotoTop = function() {
      $location.hash('menu-wrapper');
      $anchorScroll();
    };
}]);

agorasturiasApp.controller('NewPostCtrl',['$location','$scope','Data', function($location,$scope,Data){

  $scope.editorOptions = {
    language:'es',
    uiColor:'#ffffff'
  };

  $scope.doNewPost = function(newPost){
    newPost.username = $scope.username;
    newPost.modifier_username = $scope.username;
    newPost.user_id = $scope.uid;
    newPost.modifier_id = $scope.uid;
    newPost.image = '';
    newPost.header_image = '';

    Data.post('posts',{
      post:JSON.stringify(newPost)

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

  $scope.doEditPost = function(post){

    post.modifier_username = $scope.username;
    post.modifier_id = $scope.uid;

    Data.put('posts/' + post.id, {
      post:JSON.stringify(post)
    }).then(function(response){

      if(response.status === "success"){
        alert("Post successfully updated");
        $location.path('/home');
      }
      else
        alert(response.message);
    });
  };

  $scope.doDeletePost = function(postId){
    Data.delete('posts/' + postId).then(function(response){
      if(response.status === "success"){
        alert(response.message);
        $location.path('/home');
      }
      else
        alert(response.message);
    });
  };
}]);
agorasturiasApp.controller('FileUploaderCtrl', 
  ['$scope', '$upload', 'Data', 'partitionService', function($scope, $upload, Data, partitionService) {

  $scope.$watch('files', function(files) {

    if (files !== undefined && files !== null) {

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        $scope.upload = $upload.upload({
          url: '/agorasturias/api/v1/upload', 
          method: 'POST',
          //headers: {'Authorization': 'xxx'}, // only for html5
          //withCredentials: true,
          data: {myObj: $scope.myModelObj},
          file: file, // single file or a list of files. list is only for html5
        });
      }

      getFiles();
    }
  });

  function getFiles() {
      Data.get('/images/gallery')
      .then(function(response){

        $scope.rows = [];

        if (response.status === "Success") {
          var json = response.files,
              files = [];

          for (var i=0; i<response.total_files; ++i) {
            files.push(response.files[i]);
          }

          $scope.rows = partitionService.partition(files, 6);
        }         
      });
  }

  getFiles();

}]);

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
agorasturiasApp.controller('FormCtrl', function ($scope) {

    $scope.submitForm = function(isValid) {

        $scope.submitted = true;

        if (isValid) {
            alert('our form is amazing');
        }

    };
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
agorasturiasApp.controller('ApplicationCtrl', 
    ['$scope',  '$rootScope', '$translate', '$cookieStore', '$location','$http','Data',
    function ($scope, $rootScope, $translate, $cookieStore, $location, $http, Data) { 

    var langInCookie = $cookieStore.get("lang");

    if (langInCookie !== undefined) {
      $translate.use(langInCookie);
    }

    $scope.changeLanguage = function () {
      if ($translate.use() === 'en') {
        $translate.use('es');        
      }  
      else {
        $translate.use('en');
      }

      $cookieStore.put("lang", $translate.use());
    };

    //initially set those objects to null to avoid undefined error
    $rootScope.login = {};
    $rootScope.currentPost = null;

    $rootScope.doLogin = function (user) {
      Data.post('login', { 
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
          else {
            alert(response.message);
          }
        });
      };
}]);
agorasturiasApp.factory('Data', ['$http', function ($http) { 
  // This service connects to our REST API

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
agorasturiasApp.controller('NavigationCtrl', 
  ['$scope', '$location', '$state', '$stateParams',
    function ($scope, $location, $state, $stateParams) {

      $scope.reloadContent = function () {
        var destinationPath = '/home';
        if ($location.path() === destinationPath) {
            $state.transitionTo($state.current, $stateParams, { reload: true, inherit: true, notify: true });
        } else {
            $location.path(destinationPath);
        }
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