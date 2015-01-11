agorasturiasApp.controller('LanguageSwitcherCtrl', ['$scope', '$translate', function ($scope, $translate) { 

    $scope.changeLanguage = function () {
      if ($translate.use() == 'en') {
        $translate.use('es');
      }  
      else {
        $translate.use('en');
      }
    };
}]);