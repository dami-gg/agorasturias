agorasturiasApp.controller('ContactCtrl', ['$scope', 'Data',
	function ($scope, Data) {

    $scope.contact = {};

    $scope.submitted = false;

    $scope.submitForm = function(isValid, contact) {

        $scope.submitted = true;

        if (isValid) {

            Data.post('mail', contact)
              .then(function(response) {
                  if (response.status === "success") {
                      $scope.notify('Email sent correctly, we will reply you back as soon as possible',
                      	'success');

                      $scope.contactForm.$setPristine();
                      $scope.contact = {};
                      $scope.submitted = false;
                  }
                  else {
                      $scope.notify(response.message, 'danger');
                  }
              });
        }
    };
}]);
