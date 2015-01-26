agorasturiasApp.controller('FormCtrl', ['$scope', '$http', function ($scope, $http) {

  $scope.contact = {};

  $scope.submitForm = function(isValid) {

    if (isValid) {

      $http({
        url: "api/v1/mail", 
        method: "POST",
        data: { email: $scope.contact.email, message: $scope.contact.message }
       }).success(function(response) {
          alert("Email sent correctly");
      }).error(function(response) {
          alert("An error occured");
      });
    }
  };
}]);
