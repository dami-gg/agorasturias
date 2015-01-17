// create the module including ngRoute for all the routing needs
var agorasturiasApp = angular.module('agorasturiasApp',
  ['ui.router', 'ui.bootstrap', 'ngResource', 'ngCkeditor', 'ngSanitize', 
    'pascalprecht.translate', 'angularFileUpload', 'ngCookies']);
// , 'uiRouterStyles'

// configure the routes
agorasturiasApp.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url  : '/home',
                templateUrl : 'public/views/home.html'
            })

            .state('post',{
              url:'/post',
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


