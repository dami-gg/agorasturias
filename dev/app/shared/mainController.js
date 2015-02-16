agorasturiasApp.controller('MainCtrl', 
    ['$scope',  '$rootScope', '$translate', '$cookieStore', '$location', 
      '$http', 'Data', 'LoginService', 'USER_ROLES',
    function ($scope, $rootScope, $translate, $cookieStore, $location, $http, Data, LoginService, USER_ROLES) { 

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

        if(response.uid !== undefined){
          LoginService.login(response.uid, response.email, response.name, response.role, response.username);
          $scope.authenticated = true;
          $scope.username = response.username;
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
                response.role, response.username);
            
            $location.path('/home');
          }
          else {
            alert(response.message);
            LoginService.logout();
          }

          $scope.authenticated = LoginService.authenticated;
          $scope.username = LoginService.session.username;
      });
    };

    $scope.logout = function () {
      $scope.authenticated = false;
      
      LoginService.logout();

      $location.path('/home');
    };
}]);