agorasturiasApp.controller('LanguageSwitcherCtrl', 
    ['$scope', '$translate', '$cookieStore', function ($scope, $translate, $cookieStore) { 

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
}]);