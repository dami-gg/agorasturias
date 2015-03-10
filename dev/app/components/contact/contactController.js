agorasturiasApp.controller('ContactCtrl', ['$rootScope','$scope', 'Data',
function ($rootScope, $scope, Data) {

    $scope.contact = {};

    $scope.submitted = false;

    $scope.submitForm = function(isValid, contact) {

        $scope.submitted = true;

        if (isValid) {

            Data.post('mail', contact)
              .then(function(response) {
                  if (response.status === "success") {
                      $rootScope.notify('Email sent correctly, we will reply you back as soon as possible', 'success');
                  }
                  else {
                      $rootScope.notify(response.message, 'danger');
                  }
              });
        }
    };
}]);
