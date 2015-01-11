agorasturiasApp.controller('FormCtrl', function ($scope) {

    $scope.submitForm = function(isValid) {

        $scope.submitted = true;

        if (isValid) {
            alert('our form is amazing');
        }

    };
});