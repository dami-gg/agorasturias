agorasturiasApp.controller('LanguageSwitcherCtrl', ['$scope', '$translate', 
    function ($scope, $translate) { 

    $translate.use('en');
    $translate.refresh();

    $scope.changeLanguage = function () {
      if ($translate.use() == 'en') {
        $translate.use('es');
      }  
      else {
        $translate.use('en');
      }
    };
}]);