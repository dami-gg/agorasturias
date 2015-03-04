agorasturiasApp.controller('FormCtrl', ['$scope', 'Data', '$location',
function ($scope, Data, $location) {

  $scope.contact = {};

  $scope.submitForm = function(isValid, contact) {

    if (isValid) {

      Data.post("mail", contact)
      .then(function(response) {
        if(response.status == "success"){
          alert("Email sent correctly");
          $location.path("/home");
        }
        else
          alert("There was a problem sending your email, please try again later");
      });
    }
  };
}]);
