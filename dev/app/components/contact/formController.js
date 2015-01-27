agorasturiasApp.controller('FormCtrl', ['$scope', 'Data', function ($scope, Data) {

  $scope.contact = {};

  $scope.submitForm = function(isValid, contact) {

    if (isValid) {

      Data.post("mail", contact)
      .success(function(response) {
          alert("Email sent correctly");
      }).error(function(response) {
          alert("An error occured");
      });
    }
  };
}]);
