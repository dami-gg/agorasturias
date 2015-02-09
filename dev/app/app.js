// create the module including ngRoute for all the routing needs
var agorasturiasApp = angular.module('agorasturiasApp',
  ['ui.router', 'ui.bootstrap', 'ngResource', 'ngCkeditor', 'ngSanitize', 
    'pascalprecht.translate', 'angularFileUpload', 'ngCookies', 'socialLinks']);

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

            .state('pre-events', {
                url : '/pre-events',
                templateUrl : 'public/views/pre-events.html',
                access: ACCESS_GROUPS.ALL
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

            .state('accounts-manager',{
                url:'/accounts-manager',
                templateUrl : 'public/views/accounts-manager.html',
                access: ACCESS_GROUPS.ADMINS
            })

            .state('profile',{
                url:'/profile',
                templateUrl : 'public/views/profile.html',
                access: ACCESS_GROUPS.ALL
            })

            .state('shop',{
                url:'/shop',
                templateUrl : 'public/views/shop.html',
                access: ACCESS_GROUPS.LOGGED
            })

            .state('product',{
                url:'/product/:productId',
                templateUrl : 'public/views/product.html',
                access: ACCESS_GROUPS.LOGGED
            })

            .state('shopping-cart',{
                url:'/shopping-cart',
                templateUrl : 'public/views/shopping-cart.html',
                access: ACCESS_GROUPS.LOGGED
            })

            .state('checkout',{
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

agorasturiasApp.run(
  ['$state', '$rootScope', 'LoginService', 'ACCESS_GROUPS', 'USER_ROLES',
  function($state, $rootScope, Login, ACCESS_GROUPS, USER_ROLES) {

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

        if (Login.role !== USER_ROLES.ADMIN) {

          if (toState.access === ACCESS_GROUPS.LOGGED && Login.role === USER_ROLES.GUEST) {

            e.preventDefault();
            $state.go('home');
          }

          if (toState.access === ACCESS_GROUPS.EDITORS && Login.role !== USER_ROLES.EDITOR) {

            e.preventDefault();
            $state.go('home');
          }
        }

        $rootScope.isHomePage = toState.url === "/home";
    });
}]);
