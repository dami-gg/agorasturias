agorasturiasApp.controller('UsersCtrl', ['$rootScope','$scope','$location','$http','Data',
  function($rootScope,$scope,$location,$http,Data){

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