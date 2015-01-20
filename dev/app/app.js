// create the module including ngRoute for all the routing needs
var agorasturiasApp = angular.module('agorasturiasApp',
  ['ui.router', 'ui.bootstrap', 'ngResource', 'ngCkeditor', 'ngSanitize', 
    'pascalprecht.translate', 'angularFileUpload', 'ngCookies', 'ngSocial']);

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

            .state('agora-for-dummies', {
                url : '/agora-for-dummies',
                templateUrl : 'public/views/agora-for-dummies.html',
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

            .state('info', {
                url  : '/info',
                templateUrl : 'public/views/info.html',
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

agorasturiasApp.run(
  ['$state','$rootScope', 'LoginService', 'ACCESS_GROUPS', 'USER_ROLES', 
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
    });
}]);
