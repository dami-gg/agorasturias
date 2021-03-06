var agorasturiasApp = angular.module('agorasturiasApp',
  ['ui.router', 'ui.bootstrap', 'ngResource', 'ngCkeditor', 'ngAnimate', 'ngSanitize',
    'pascalprecht.translate', 'angularFileUpload', 'ngCookies', 'socialLinks', 'ngToast']);

agorasturiasApp.constant("USER_ROLES", {
  "GUEST" : "guest",
  "USER" : "user",
  "EDITOR" : "editor",
  "ADMIN" : "admin"
});

agorasturiasApp.constant("ACCESS_GROUPS", {
  "ALL" : "all",
  "LOGGED" : "logged",
  "EDITORS" : "editors",
  "ADMINS" : "admins"
});

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

            .state('how-to-apply', {
                url  : '/how-to-apply',
                templateUrl : 'public/views/how-to-apply.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('how-to-get-there', {
                url  : '/how-to-get-there',
                templateUrl : 'public/views/how-to-get-there.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('what-to-see', {
                url  : '/what-to-see',
                templateUrl : 'public/views/what-to-see.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('press', {
                url  : '/press',
                templateUrl : 'public/views/press.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('event-timetable', {
                url : '/event-timetable',
                templateUrl : 'public/views/event-timetable.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('social-programme', {
                url : '/social-programme',
                templateUrl : 'public/views/social-programme.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('pre-events', {
                url : '/pre-events',
                templateUrl : 'public/views/pre-events.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('streaming', {
                url : '/streaming',
                templateUrl : 'public/views/streaming.html',
                access: ACCESS_GROUPS.LOGGED
            })

            .state('sponsors', {
                url  : '/sponsors',
                templateUrl : 'public/views/sponsors.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('patrons', {
                url  : '/patrons',
                templateUrl : 'public/views/patrons.html',
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

            .state('profile', {
                url  : '/profile',
                templateUrl : 'public/views/profile.html',
                access: ACCESS_GROUPS.LOGGED
            })

            .state('new-post',{
                url:'/new-post',
                templateUrl : 'public/views/new-post.html',
                access: ACCESS_GROUPS.EDITORS
            })

            .state('edit-post',{
                url:'/edit-post',
                templateUrl : 'public/views/edit-post.html',
                access: ACCESS_GROUPS.EDITORS
            })

            .state('file-uploader',{
                url:'/file-uploader',
                templateUrl : 'public/views/file-uploader.html',
                access: ACCESS_GROUPS.ADMINS
            })

            .state('edit-menus', {
                url:'/edit-menus',
                templateUrl:'public/views/edit-menus.html',
                access: ACCESS_GROUPS.ADMIN
            })

            .state('edit-sections', {
                url:'/edit-sections',
                templateUrl:'public/views/edit-sections.html',
                access: ACCESS_GROUPS.ADMIN
            })

            .state('edit-section', {
                url:'/edit-section',
                templateUrl:'public/views/edit-section.html',
                access: ACCESS_GROUPS.ADMIN
            })

            .state('accounts-manager', {
                url:'/accounts-manager',
                templateUrl : 'public/views/accounts-manager.html',
                access: ACCESS_GROUPS.ADMINS
            })

            .state('shop', {
                url:'/shop',
                templateUrl : 'public/views/shop.html',
                access: ACCESS_GROUPS.LOGGED
            })

            .state('product', {
                url:'/product/:productId',
                templateUrl : 'public/views/product.html',
                access: ACCESS_GROUPS.LOGGED
            })

            .state('shopping-cart', {
                url:'/shopping-cart',
                templateUrl : 'public/views/shopping-cart.html',
                access: ACCESS_GROUPS.LOGGED
            })

            .state('checkout', {
                url:'/checkout',
                templateUrl : 'public/views/checkout.html',
                access: ACCESS_GROUPS.LOGGED
            })

            ;

      $translateProvider.useUrlLoader('api/v1/translate');

      $translateProvider.preferredLanguage('en');
      $translateProvider.useCookieStorage();
    }
);

agorasturiasApp.config(['ngToastProvider', function(ngToast) {
    ngToast.configure({
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
    });
}]);

agorasturiasApp.config(function ($provide) {
    $provide.decorator("$exceptionHandler", function ($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause);
            ga('send', 'event', 'AngularJS error', exception.message,
                exception.stack,  0, true);
        };
    });
});

agorasturiasApp.run(
  ['$state', '$rootScope', 'LoginService', 'ACCESS_GROUPS', 'USER_ROLES',
  function($state, $rootScope, LoginService, ACCESS_GROUPS, USER_ROLES) {

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

        if (toState.access === ACCESS_GROUPS.LOGGED && LoginService.session.role === USER_ROLES.GUEST) {

            e.preventDefault();
            $state.go('home');
        }

        if (toState.access === ACCESS_GROUPS.ADMIN && LoginService.session.role !== USER_ROLES.ADMIN) {

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
      var res = post.title.split('_');
      var postId = res[1];
      Data.get('posts/' + postId)
      .then(function(response){

        if(response.status === "success"){
          $rootScope.currentPost = {id: postId, title: response.title,
            text: response.text, image: response.image, esTitle:response.esTitle,
            esText: response.esText, engTitle: response.engTitle, engText: response.engText };
        }

      });
      // $rootScope.currentPost = angular.copy(post);
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
      Data.get('posts/' + postId)
      .then(function(response){

        if(response.status === "success"){
          $rootScope.currentPost = {id: postId, title: response.title,
            text: response.text, image: response.image };
        }

      });
    }

    $scope.gotoTop = function() {
      $location.hash('menu-wrapper');
      $anchorScroll();
    };
}]);

agorasturiasApp.controller('SponsorsCtrl', function ($scope, PartitionService) {

  	var mainPartners = $scope.mainPartners = [],
  		universityPartners = $scope.universityPartners = [],
		sponsors = $scope.sponsors = [],
		transportationPartners = $scope.transportationPartners = [];

    var fillSponsors = function() {

        mainPartners.push({ logo: 'public/img/sponsors/asturias.png', link: 'http://www.asturias.es/' });
        mainPartners.push({ logo: 'public/img/sponsors/ayto-gijon.png', link: 'http://www.gijon.es/' });
        mainPartners.push({ logo: 'public/img/sponsors/laboral.png', link: 'http://www.laboralciudaddelacultura.com/' });
        mainPartners.push({ logo: 'public/img/sponsors/oficongresos.png', link: 'http://congresos.gijon.es/' });
        mainPartners.push({ logo: 'public/img/sponsors/divertia.png', link: 'http://www.teatrojovellanos.com/' });
        mainPartners.push({ logo: 'public/img/sponsors/gijon-deporte.png', link: 'http://deporte.gijon.es/' });

        universityPartners.push({ logo: 'public/img/sponsors/uniovi.png', link: 'http://www.uniovi.es/' });
        universityPartners.push({ logo: 'public/img/sponsors/epi.png', link: 'http://www.epigijon.uniovi.es/' });

        sponsors.push({ logo: 'public/img/sponsors/tirma.png', link: 'http://www.tirma.com/' });
        sponsors.push({ logo: 'public/img/sponsors/kemphor.png', link: 'http://www.kemphor.com/' });
        sponsors.push({ logo: 'public/img/sponsors/aviles.png', link: 'http://aviles.es/web/turismo/' });
        sponsors.push({ logo: 'public/img/sponsors/conseyu-gijon.png', link: 'http://www.cmx.es/' });
        sponsors.push({ logo: 'public/img/sponsors/garcia.png', link: 'http://www.comercialgarcia.es/' });
        sponsors.push({ logo: 'public/img/sponsors/moka.png', link: 'http://www.mokacatering.com/' });
        sponsors.push({ logo: 'public/img/sponsors/ktm.png', link: 'http://www.ktm.com/es/ready-to-race.html' });
        sponsors.push({ logo: 'public/img/sponsors/redyser.png', link: 'http://www.redyser.com/' });
        sponsors.push({ logo: 'public/img/sponsors/elarco.png', link: 'http://www.elarco.es/' });
        sponsors.push({ logo: 'public/img/sponsors/conseyu.png', link: 'http://www.cmpa.es/' });
        sponsors.push({ logo: 'public/img/sponsors/makro.png', link: 'http://www.makro.es/' });
        sponsors.push({ logo: 'public/img/sponsors/uni-alicante.png', link: 'http://www.ua.es/' });
        sponsors.push({ logo: 'public/img/sponsors/elvalle.png', link: 'http://www.snackselvalle.com/' });
        sponsors.push({ logo: 'public/img/sponsors/graphicshops.png', link: 'http://graphicshops.com/' });
        sponsors.push({ logo: 'public/img/sponsors/kia.png', link: 'http://www.asturconsa.com/' });

        transportationPartners.push({ logo: 'public/img/sponsors/alsa.png', link: 'http://www.alsa.es/' });
        transportationPartners.push({ logo: 'public/img/sponsors/renfe.png', link: 'http://www.renfe.es/' });
    };

    if ($scope.sponsors.length === 0) {
    	fillSponsors();
    }

    $scope.mainPartners = PartitionService.partition(mainPartners, 3);
    $scope.universityPartners = PartitionService.partition(universityPartners, 2);
    $scope.sponsors = PartitionService.partition(sponsors, 4);
    $scope.transportationPartners = PartitionService.partition(transportationPartners, 2);
});

agorasturiasApp.controller('EditorCtrl',
  ['$rootScope', '$scope', '$location', '$anchorScroll', 'Data',
    function ($rootScope, $scope, $location, $anchorScroll, Data) {

  $scope.editorOptions = {
    language:'es',
    uiColor:'#ffffff'
  };

  /***
  * POSTS
  ***/

  $scope.doEditPost = function(post) {
    post.modifier_username = $scope.username;
    post.modifier_id = $scope.uid;

    Data.put('posts/' + post.id, {
      post:JSON.stringify(post)
    }).then(function(response){

      if(response.status === "success"){
        $scope.notify('Post successfully changed', 'success');
        $location.path('/home');
      }
      else {
        $scope.notify('Error: ' + response.message, 'danger');
      }
    });
  };

  $scope.doDeletePost = function(postId) {
    Data.delete('posts/' + postId).then(function(response){
      if(response.status === "success"){
        $scope.notify('Post successfully deleted', 'success');
        $location.path('/home');
      }
      else {
        $scope.notify('Error: ' + response.message, 'danger');
      }
    });
  };

  $scope.doNewPost = function(newPost){
    newPost.username = $scope.username;
    newPost.modifier_username = $scope.username;
    newPost.user_id = $scope.uid;
    newPost.modifier_id = $scope.uid;
    newPost.header_image = '';

    Data.post('posts', {
      post:JSON.stringify(newPost)
    }).then(function(response){
      if(response.status==="success"){
        $scope.notify('Post successfully created', 'success');
        $location.path('/home');
      }
      else {
        $scope.notify('Error: ' + response.message, 'danger');
      }
    });
  };

  /***
  * MENUS
  ***/

  $scope.editMenus = function() {
    Data.get('/menus')
      .then(function(response){
        if(response.status === "success"){
          $scope.menusList = response.menus;
        }
        else {
          $scope.notify('Error: ' + response.message, 'danger');
        }
      });
  };

  $scope.doSaveMenu = function(edited_menu){
    edited_menu.modifier_username = $scope.username;
    Data.put('/menus/' + edited_menu.id, { 
        menu: edited_menu 
    }).then(function(response){
      if(response.status !== "error") {
        $scope.notify('Menu successfully saved', 'success');
      }
      else {
        $scope.notify('Error: ' + response.message, 'danger');
      }
    });
  };

  $scope.doDeleteMenu = function(id){
    notify('Error: not implemented','danger');
  };

  /***
  * SECTIONS
  ***/

  $scope.editSections = function() {
    Data.get('/sections')
     .then(function(response){
        if(response.status === "success"){
          $scope.sectionsList = response.sections;
          $location.path('/edit-sections');
        }
      });
  };  

  $scope.doEditSection = function(edited_section){
    edited_section.modifier_username = $scope.username;
    Data.put('/sections/' + edited_section.id, {
      section:edited_section
    }).then(function(response){
      if(response.status !== "error") {
        $scope.notify('Section successfully saved', 'success');
      }
      else {
        $scope.notify('Error: ' + response.message, 'danger');
      }
    });
  };

  $scope.editSection = function(section){
    $rootScope.currentSection = section;
    $location.path('/edit-section');
  };

  $scope.doDeleteSection = function(id){
    notify('Error: not implemented','danger');
  };

  if ($location.path() === "/edit-menus") {
    $scope.editMenus();
  }
  else if ($location.path() === "/edit-sections") {
    $scope.editSections();
  }

}]);
agorasturiasApp.controller('FileUploaderCtrl',
  ['$scope', '$upload', 'Data', 'partitionService', function($scope, $upload, Data, partitionService) {

  $scope.$watch('files', function(files) {

    if (files !== undefined && files !== null) {

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        $scope.upload = $upload.upload({
          url: '/api/v1/upload', 
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

agorasturiasApp.controller('AccountsManagerCtrl',
  ['$scope', 'Data', function ($scope, Data) {

  $scope.generateAllPasswords = function () {
      Data.post('auto_pass').then(function(response){
        $scope.notify(response.message);
      });
  };

  $scope.generateSinglePassword = function (email) {
     // TODO
     Data.post('auto_pass/'+email).then(function(response){
       $scope.notify(response.message);
     });
  };

}]);

agorasturiasApp.controller('MenusCtrl',
  ['$rootScope', '$scope', '$location', '$anchorScroll', 'Data',
  function ($rootScope, $scope, $location, $anchorScroll, Data) {

  $scope.doSaveMenu = function(edited_menu){
    edited_menu.modifier_username = $scope.username;
    Data.put('/menus/' + edited_menu.id, {menu:edited_menu})
    .then(function(response){
      if(response.status!="error")
        $scope.notify('Menu successfully saved', 'success');
      else
        $scope.notify('Error: ' + response.message, 'danger');
    });
  };

  $scope.doDeleteMenu = function(id){
    $scope.notify('Error: not implemented','danger');
  };

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
agorasturiasApp.controller('ContactCtrl', ['$scope', 'Data',
	function ($scope, Data) {

    $scope.contact = {};

    $scope.submitted = false;

    $scope.submitForm = function(isValid, contact) {

        $scope.submitted = true;

        if (isValid) {

            Data.post('mail', contact)
              .then(function(response) {
                  if (response.status === "success") {
                      $scope.notify('Email sent correctly, we will reply you back as soon as possible',
                      	'success');

                      $scope.contactForm.$setPristine();
                      $scope.contact = {};
                      $scope.submitted = false;

                  }
                  else {
                      $scope.notify(response.message, 'danger');
                  }
              });
        }
    };
}]);

agorasturiasApp.controller('ThumbnailsCtrl', function ($scope, PartitionService) {

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
    members.push({ name: 'Luz', position: 'MEALS',
                    image: 'public/img/team/luz.png', hover: ''});
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

  $scope.rows = PartitionService.partition(members, 4);
});

function product(id, name, description, price, image, stock) {

  this.id = id;
  this.name = name;
  this.description = description;
  this.price = price;
  this.image = image;
  this.stock = stock;
}

function shop(Data) {
  
  this.products = [];

  var self = this;

  Data.get('products').then(function(response) {    
    if (response.status === "success") {
      angular.extend(self.products, response.products);
    }
  });
}

shop.prototype.getProduct = function (id) {
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].id === id) {
      return this.products[i];
    }
  }
  return null;
};

function cart(cartName) {
    this.cartName = cartName;
    this.clearCart = false;
    this.checkoutParameters = {};
    this.items = [];

    // load items from local storage when initializing
    this.loadItems();

    // save items to local storage when unloading
    var self = this;
    $(window).unload(function () {
        if (self.clearCart) {
            self.clearItems();
        }
        self.saveItems();
        self.clearCart = false;
    });
}

// load items from local storage
cart.prototype.loadItems = function () {
    var items = localStorage !== null ? localStorage[this.cartName + "_items"] : null;
    if (items !== null && JSON !== null) {
        try {
            items = JSON.parse(items);
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.sku !== null && item.name !== null && item.price !== null && item.quantity !== null) {
                    item = new cartItem(item.sku, item.name, item.price, item.quantity);
                    this.items.push(item);
                }
            }
        }
        catch (err) {
            // ignore errors while loading...
        }
    }
};

// save items to local storage
cart.prototype.saveItems = function () {
    if (localStorage !== null && JSON !== null) {
        localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
    }
};

// adds an item to the cart
cart.prototype.addItem = function (id, name, price, quantity, stock) {
    quantity = this.toNumber(quantity);
    if (quantity !== 0) {

        // update quantity for existing item
        var found = false,
            item = null;
        for (var i = 0; i < this.items.length && !found; i++) {
            item = this.items[i];
            if (item.id === id) {
                found = true;
                item.quantity = this.toNumber(item.quantity + quantity);
                if (item.quantity <= 0) {
                    this.items.splice(i, 1);
                }
            }
        }

        // new item, add now
        if (!found) {
            item = new cartItem(id, name, price, quantity, stock);
            this.items.push(item);
        }

        // save changes
        this.saveItems();
    }
};

cart.prototype.getTotalPrice = function (id) {
    var total = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (id === undefined || item.id === id) {
            total += this.toNumber(item.quantity * item.price);
        }
    }
    return total;
};

cart.prototype.getTotalCount = function (id) {
    var count = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (id === undefined || item.id === id) {
            count += this.toNumber(item.quantity);
        }
    }
    return count;
};

// clear the cart
cart.prototype.clearItems = function () {
    this.items = [];
    this.saveItems();
};

// utility methods
cart.prototype.addFormFields = function (form, data) {
    if (data !== null) {
        var _input;
        $.each(data, function (name, value) {
            if (value !== null) {
                _input = $("<input></input>").attr("type", "hidden").attr("name", name).val(value);
                form.append(_input);
            }
        });
    }
};

cart.prototype.toNumber = function (value) {
    value = value * 1;
    return isNaN(value) ? 0 : value;
};

cart.prototype.addCheckoutParameters = function (serviceName, merchantID, options) {

    if (serviceName !== "Paypal") {
        throw "serviceName must be 'Paypal'";
    }
    if (merchantID === null) {
        throw "A merchantID is required in order to checkout.";
    }

    this.checkoutParameters[serviceName] = new checkoutParameters(serviceName, merchantID, options);
};

cart.prototype.checkout = function (serviceName, orderId, paypalCharge) {

  if (serviceName === null) {
    var _aux = this.checkoutParameters[Object.keys(this.checkoutParameters)[0]];
    serviceName = _aux.serviceName;
  }
  if (serviceName === null) {
    throw "Define at least one checkout service.";
  }

  var params = this.checkoutParameters[serviceName];
  if (params === null) {
    throw "Cannot get checkout parameters for '" + serviceName + "'.";
  }

  if(params.serviceName === "Paypal") {
    this.checkoutPaypal(params, orderId, paypalCharge);
  }
  else {
    throw "Unknown checkout service: " + params.serviceName;
  }
};

// http://www.paypal.com/cgi-bin/webscr?cmd=p/pdn/howto_checkout-outside
cart.prototype.checkoutPaypal = function (parms, orderId, paypalCharge) {

    // global data
    var data = {
        cmd: "_cart",
        business: parms.merchantID,
        upload: "1",
        rm: "2",
        charset: "utf-8",
        currency_code: "EUR",
        return: "http://www.agorasturias.org/#/shop",
        cancel_return: "http://www.agorasturias.org/#/shop",
        notify_url: "http://www.agorasturias.org/#/api/v1/ipn_notify/" + orderId
    };

    // item data
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        var ctr = i + 1;
        data["item_number_" + ctr] = item.id;
        data["item_name_" + ctr] = item.name;
        data["quantity_" + ctr] = item.quantity;
        data["amount_" + ctr] = item.price.toFixed(2);
    }

	data["item_number_" + (this.items.length+1)] = 0;
    data["item_name_" + (this.items.length+1)] = "Paypal charge";
    data["quantity_" + (this.items.length+1)] = 1;
    data["amount_" + (this.items.length+1)] = paypalCharge.toFixed(2);

    // build form
    var form = $('<form></form>');
    // form.attr("action", "https://www.sandbox.paypal.com/cgi-bin/webscr"); Test sandbox
    form.attr("action", "https://www.paypal.com/cgi-bin/webscr");
    form.attr("method", "POST");
    form.attr("style", "display:none;");
    this.addFormFields(form, data);

    if (parms.options !== undefined) {
        this.addFormFields(form, parms.options);
    }

    $("body").append(form);

    this.clearCart = true;

    form.submit();
    form.remove();
};

function checkoutParameters(serviceName, merchantID, options) {
    this.serviceName = serviceName;
    this.merchantID = merchantID;
    this.options = options;
}

function cartItem(id, name, price, quantity, stock) {
    this.id = id;
    this.name = name;
    this.price = price * 1;
    this.quantity = quantity * 1;
    this.stock = stock;
}

agorasturiasApp.controller('ShopCtrl',
    function ($scope, $stateParams, ShopService, $location, Data, LoginService) {

    $scope.shop = ShopService.shop;
    $scope.cart = ShopService.cart;

    $scope.orderId = -1;
    $scope.paypalCharge = ($scope.cart.getTotalPrice() * 0.0355) + (0.35 * 1.0355);

    var _productId = $stateParams.productId;

    if ($location.path().lastIndexOf("/product", 0) === 0 && _productId !== null) {

        if (isNaN(_productId)) {
        	$location.path ('/shop');
        }
        else {
            $scope.product = $scope.shop.getProduct(parseInt(_productId));
        }
    }
    else if ($location.path().lastIndexOf("/checkout", 0) === 0 && $scope.cart.items.length === 0) {
        $location.path ('/shop');
    }

    $scope.goToShop = function() {
        $location.path ('/shop');
    };

    $scope.openProductDescription = function(productId) {
        $location.path ('/product/' + productId);
    };

    $scope.goToCart = function() {
        $location.path ('/shopping-cart');
    };

    $scope.goToCheckout = function() {
        $location.path ('/checkout');
    };

    $scope.updatePaypalCharge = function() {
    	$scope.paypalCharge = ($scope.cart.getTotalPrice() * 0.0355) + (0.35 * 1.0355);
    };

    $scope.saveOrder = function(paymentType) {
        Data.post('orders', {
          username: LoginService.session.username,
          products: $scope.cart.items,
          bankTransfer: (paymentType === 'Transfer')
        }).then(function (response) {

          if (response.status === "success") {
            $scope.orderId = response.orderID;

            if (paymentType === 'Paypal') {
                $scope.cart.checkout(paymentType, $scope.orderId, $scope.paypalCharge);
            }
            else {
              $scope.notify('Order correctly processed. You should have received an email with details','success');
              $scope.cart.items = [];
              $scope.goToShop();
            }
          }
          else {
            $scope.notify('Error: ' + response.message, 'danger');
          }
      });
    };

    $scope.confirmOrder = function() {
        $scope.saveOrder('Transfer');
    };
});

agorasturiasApp.factory('ShopService', ['Data', function(Data) {

    var _shop = new shop(Data),
        _cart = new cart("AgoraShop");

    // _cart.addCheckoutParameters("Paypal", "E5YL58382ENDE"); Test sandbox
    _cart.addCheckoutParameters("Paypal", "M88EFJFDDQ5DY");

    return {
        shop: _shop,
        cart: _cart
    };
}]);

agorasturiasApp.controller('ProfileCtrl', ['$scope', 'LoginService', 'Data', 
    function ($scope, LoginService, Data) {

        $scope.userData = LoginService.session;

        $scope.submitted = false;

        $scope.changePassword = function(isValid, oldPassword, newPassword) {

            $scope.submitted = true;

            if (isValid) {                

                Data.put('changepwd', {
                        username: LoginService.session.username, 
                        curr_pass: oldPassword, 
                        new_pass: newPassword
                    })
                    .then(function(response) {                           
                        if (response.status === "success") {
                            $scope.notify('Password correctly changed', 'success');
                        }
                        else {
                            $scope.notify(response.message, 'danger');
                        }                            
                    }); 
            }
        };

        $scope.passwordsMatch = function(newPassword, newPasswordConfirmation) {
            return newPassword === newPasswordConfirmation;
        };
    }
]);
agorasturiasApp.controller('MainCtrl',
    ['$scope',  '$rootScope', '$translate', '$cookieStore', '$location',
      '$http', 'Data', 'LoginService', 'USER_ROLES', 'ngToast',
    function ($scope, $rootScope, $translate, $cookieStore, $location,
                $http, Data, LoginService, USER_ROLES, ngToast) {

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

    if (LoginService.authenticated) {
      $scope.authenticated = true;
      $scope.username = LoginService.session.username;
    }
    else {
      Data.get('session')
      .then(function(response){

        if(response.uid !== undefined && response.uid !== ""){
          LoginService.login(response.uid, response.email, response.name,
                              response.role, response.username, response.antenna);
          $scope.authenticated = true;
          $scope.username = response.username;

          $scope.adminAccess = (response.role === USER_ROLES.ADMIN);
        }
        else {
          $scope.authenticated = false;
          $scope.adminAccess = false;
        }
      });
    }

    //initially set those objects to null to avoid undefined error
    $rootScope.login = {};
    $rootScope.currentPost = null;

    $scope.login = function (user) {
      Data.post('login', {
          username: user.username,
          password: user.password
        }).then(function (response) {

          if (response.status === "success") {
            LoginService.login(response.uid, response.email, response.name,
                response.role, response.username, response.body);

            $location.path('/home');
            $scope.notify("Welcome back <b>" + response.name + "</b>", 'success');
          }
          else {
            $scope.notify("Error: " + response.message, 'danger');
            LoginService.logout();
          }

          $scope.authenticated = LoginService.authenticated;
          $scope.username = LoginService.session.username;
          $scope.adminAccess = LoginService.adminAccess;
      });
    };

    $scope.logout = function () {
      Data.get('logout').then(function (response) {
          $scope.authenticated = false;
          localStorage = null;
          LoginService.logout();
          $scope.notify("See you soon!", 'danger');
      });

      $location.path('/home');
    };

    $scope.notify = function(message, type){
      var toast = ngToast.create({
        content: message,
        className: type,
        timeout: 2000
      });
    };
}]);

agorasturiasApp.factory('LoginService', ['USER_ROLES', function(USER_ROLES) {

    var session = {
        userId: '',
        email: '',
        name: '',
        role: USER_ROLES.GUEST,
        username: '',
        body: ''
    };

    var authenticated = false;

    var adminAccess = false;

    var login = function (userId, email, name, role, username, body) {
        this.session.userId = userId;
        this.session.email = email;
        this.session.name = name;
        this.session.role = role;
        this.session.username = username;
        this.session.body = body;

        this.authenticated = true;
        this.adminAccess = (role === USER_ROLES.ADMIN);
    };

    var logout = function () {
        this.session.userId = '';
        this.session.email = '';
        this.session.name = '';
        this.session.role = USER_ROLES.GUEST;
        this.session.username = '';
        this.session.body = '';

        this.authenticated = false;
        this.adminAccess = false;
    };

    return {
        session : session,
        authenticated : authenticated,
        adminAccess : adminAccess,
        login : login,
        logout : logout
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

agorasturiasApp.service('PartitionService', function() {

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