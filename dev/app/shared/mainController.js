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
    }
}]);