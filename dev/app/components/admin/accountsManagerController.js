agorasturiasApp.controller('AccountsManagerCtrl',
  ['$scope', 'Data', function ($scope, Data) {

  $scope.generateAllPasswords = function () {
      Data.post('auto_pass').then(function(response){
        $scope.notify(response.message);
      });
  };

  $scope.generateSinglePassword = function (email) {
     // TODO
     Data.post('auto_pass/'+email).then(function(response){
       $scope.notify(response.message);
     });
  };

}]);
