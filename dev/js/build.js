// create the module including ngRoute for all the routing needs
var agorasturiasApp = angular.module('agorasturiasApp',
  ['ui.router', 'ui.bootstrap', 'ngResource', 'ngCkeditor', 'ngSanitize', 
    'pascalprecht.translate', 'angularFileUpload', 'ngCookies', 'socialLinks']);

agorasturiasApp.constant("USER_ROLES", {
  "GUEST" : "guest",
  "USER" : "user",
  "ADMIN" : "admin"
});

agorasturiasApp.constant("ACCESS_GROUPS", {
  "ALL" : "all",
  "LOGGED" : "logged",
  "ADMIN" : "admin"
});

// configure the routes
agorasturiasApp.config(function($stateProvider, $urlRouterProvider, $translateProvider, ACCESS_GROUPS) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url  : '/home',
                templateUrl : 'public/views/home.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('post',{
                url:'/post/:postId',
                templateUrl : 'public/views/post.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('aegee-oviedo', {
                url : '/aegee-oviedo',
                templateUrl : 'public/views/aegee-oviedo.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('aegee-europe', {
                url : '/aegee-europe',
                templateUrl : 'public/views/aegee-europe.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('core-team', {
                url : '/core-team',
                templateUrl : 'public/views/core-team.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('agora', {
                url : '/agora',
                templateUrl : 'public/views/agora.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('info', {
                url  : '/info',
                templateUrl : 'public/views/info.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('event-timetable', {
                url : '/event-timetable',
                templateUrl : 'public/views/event-timetable.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('pre-events', {
                url : '/pre-events',
                templateUrl : 'public/views/pre-events.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('partners', {
                url  : '/partners',
                templateUrl : 'public/views/partners.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('contact', {
                url  : '/contact',
                templateUrl : 'public/views/contact.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('account', {
                url  : '/account',
                templateUrl : 'public/views/account.html',
                access: ACCESS_GROUPS.LOGGED
            })

            .state('new-post',{
                url:'/new-post',
                templateUrl : 'public/views/new-post.html',
                access: ACCESS_GROUPS.ADMIN
            })

            .state('edit-post',{
                url:'/edit-post',
                templateUrl : 'public/views/edit-post.html',
                access: ACCESS_GROUPS.ADMIN
            })

            .state('file-uploader',{
                url:'/file-uploader',
                templateUrl : 'public/views/file-uploader.html',
                access: ACCESS_GROUPS.ADMIN
            });

      $translateProvider.useUrlLoader('api/v1/translate');

      $translateProvider.preferredLanguage('en');
      $translateProvider.useCookieStorage();
    }
);

agorasturiasApp.run(
  ['$state', '$rootScope', 'LoginService', 'ACCESS_GROUPS', 'USER_ROLES',
  function($state, $rootScope, Login, ACCESS_GROUPS, USER_ROLES) {

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

      if (toState.access === ACCESS_GROUPS.LOGGED && Login.role === USER_ROLES.GUEST) {

        e.preventDefault();
        $state.go('home');
      }

      if (toState.access === ACCESS_GROUPS.ADMIN && Login.role !== USER_ROLES.ADMIN) {

        e.preventDefault();
        $state.go('home');
      }

      $rootScope.isHomePage = toState.url === "/home";
    });
}]);

agorasturiasApp.controller('CarouselCtrl', function ($scope) {

    $scope.interval = 5000;
    var slides = $scope.slides = [];

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length;
        slides.push({
          title: ['AEGEE', 'Asturias', 'Gijón'][slides.length % 3],
          image: ['carousel-aegee.png', 'carousel-asturias.png', 'carousel-gijon.png'][slides.length % 3],
          text: ['EUROPEAN_FORUM','NATURAL_PARADISE',
                    'GREEN_COAST_CAPITAL'][slides.length % 3]
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
      $cookieStore.put('post', post.id);

      $rootScope.currentPost = angular.copy(post);
      $location.path ('/post/' + post.id);
    };
}]);

agorasturiasApp.controller('PostViewerCtrl',
  ['$rootScope', '$scope', '$location', '$anchorScroll', 'Data', '$translate', '$cookieStore', '$stateParams',
    function ($rootScope, $scope, $location, $anchorScroll, Data, $translate, $cookieStore, $stateParams) {

    var paramPostId = $stateParams.postId,
        postInCookie = $cookieStore.get("post");

    if (postInCookie === undefined || postInCookie !== paramPostId) {
      $cookieStore.put('post', $rootScope.currentPost.id);
    }

    $rootScope.currentPost = getPostById(paramPostId);

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

agorasturiasApp.controller('BookCtrl', ['$scope', '$translate', function ($scope, $translate) {

  $scope.index = 0;
  $scope.images = [
    'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-1.jpg',
    'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-2.jpg',
    'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-3.jpg',
    'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-4.jpg',
    'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-5.jpg',
    'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-6.jpg',
    'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-7.jpg',
    'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-8.jpg',
    'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-9.jpg',
    'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-10.jpg',
    'public/img/agora/' + $translate.use() + '/agora-for-dummies-page-11.jpg'
  ];

  $scope.filelocation = '../files/' + $translate.use() + '/Agora-for-dummies.pdf';

}]).directive('wallopSlider', function () {
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
agorasturiasApp.controller('FormCtrl', ['$scope', 'Data',
  function ($scope, Data) {

      Data.push('mail', contact)
        .then(function(response) {
          if(response.status === "success"){
            alert("Email sent correctly");
          }
          else {
            alert(response.message);
          }
      });
}]);

agorasturiasApp.controller('ThumbnailsCtrl', function ($scope, partitionService) {

  var members = $scope.members = [];

  $scope.fillMembers = function() {
    members.push({ name: 'Alberto', position: 'MAIN_ORGANIZER', 
                    image: 'public/img/team/alberto.png', hover: 'http://goo.gl/y2tsTX'});
    members.push({ name: 'Juanola', position: 'INCOMING', 
                    image: 'public/img/team/juanola.png', hover: ''});
    members.push({ name: 'Laura', position: 'TREASURER', 
                    image: 'public/img/team/laura.png', hover: ''});
    members.push({ name: 'Dami', position: 'IT', 
                    image: 'public/img/team/dami.png', hover: ''});
    members.push({ name: 'Gerar', position: 'PR', 
                    image: 'public/img/team/gerar.png', hover: ''});
    members.push({ name: 'Elena', position: 'PR', 
                    image: 'public/img/team/elena.png', hover: ''});
    members.push({ name: 'Sora', position: 'FR', 
                    image: 'public/img/team/sora.png', hover: ''});
    members.push({ name: 'Víctor', position: 'FR', 
                    image: 'public/img/team/victor.png', hover: ''});
    members.push({ name: 'Alba', position: 'MEALS', 
                    image: 'public/img/team/alba.png', hover: ''});
    members.push({ name: 'Santi', position: 'SOCIAL_PROGRAMME', 
                    image: 'public/img/team/santi.png', hover: ''});
    members.push({ name: 'Alberto', position: 'HR', 
                    image: 'public/img/team/albertoHR.png', hover: ''});
    members.push({ name: 'Olga', position: 'HR', 
                    image: 'public/img/team/olga.png', hover: ''});
    members.push({ name: 'Marcos', position: 'ANNIVERSARY_RESPONSIBLE', 
                    image: 'public/img/team/marcos.png', hover: ''});
    members.push({ name: 'Jorge', position: 'LOGISTICS', 
                    image: 'public/img/team/jorge.png', hover: ''});
  };

  if ($scope.members.length === 0) {
    $scope.fillMembers();
  }

  $scope.rows = partitionService.partition(members, 4);
});
agorasturiasApp.controller('MainCtrl', 
    ['$scope',  '$rootScope', '$translate', '$cookieStore', '$location', 
      '$http', 'Data', 'LoginService', 'USER_ROLES',
    function ($scope, $rootScope, $translate, $cookieStore, $location, $http, Data, Login, USER_ROLES) { 

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

    $scope.login = function (user) {
      Data.post('login', { 
          username: user.username,
          password: user.password
        }).then(function (response) {
          
          if (response.status === "success") {
            $scope.authenticated = true;
            $scope.username = response.username;

            Login.authenticated = true;
            Login.username = response.username;
            Login.email = response.email;
            Login.name = response.name;
            Login.role = response.role;

            $location.path('/home');
          }
          else {
            alert(response.message);
            $scope.authenticated = false;
            Login.username = '';
            Login.email = '';
            Login.name = '';
            Login.role = USER_ROLES.GUEST; 
          }
      });
    };

    $scope.logout = function () {
      $scope.authenticated = false;
      Login.username = '';
      Login.email = '';
      Login.name = '';
      Login.role = USER_ROLES.GUEST; 

      $location.path('/home');
    };
}]);
agorasturiasApp.factory('LoginService', ['USER_ROLES', function(USER_ROLES) {
    
    var user = {
        username: '',
        role: USER_ROLES.GUEST,
        email: '',
        name: ''
    };
    
    return user;
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

    $scope.fillPartners = function() {
        
        partners.push({ logo: 'public/img/partners/uniovi.png', link: 'http://www.uniovi.es/' });
        partners.push({ logo: 'public/img/partners/ayto-gijon.png', link: 'http://www.gijon.es/' });
        partners.push({ logo: 'public/img/partners/epi.png', link: 'http://www.epigijon.uniovi.es/' });
        partners.push({ logo: 'public/img/partners/laboral.png', link: 'http://www.laboralciudaddelacultura.com/' });
        partners.push({ logo: 'public/img/partners/oficongresos.png', link: 'http://congresos.gijon.es/' });
        partners.push({ logo: 'public/img/partners/conseyu.png', link: 'http://www.cmpa.es/' });
        partners.push({ logo: 'public/img/partners/alsa.png', link: 'http://www.alsa.es/' });
        partners.push({ logo: 'public/img/partners/renfe.png', link: 'http://www.renfe.es/' });
    };

    if ($scope.partners.length === 0) {
      $scope.fillPartners();
    }

    $scope.rows = partitionService.partition(partners, 4);
});