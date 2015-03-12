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
        }
        else {
          $scope.authenticated = false;
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
