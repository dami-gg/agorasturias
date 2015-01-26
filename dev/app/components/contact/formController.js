agorasturiasApp.controller('FormCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.submitForm = function(isValid) {

        $scope.submitted = true;

        if (isValid) {
            
            $http.post('/mail', 

                { email: $scope.email, message: $scope.message })

                .success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                })
                .error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            
        }

    };
}]);