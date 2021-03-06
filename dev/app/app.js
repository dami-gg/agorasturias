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
