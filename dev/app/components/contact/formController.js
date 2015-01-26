<<<<<<< HEAD
agorasturiasApp.controller('FormCtrl', ['$scope', 'Data'
function ($scope, Data) {
=======
agorasturiasApp.controller('FormCtrl', ['$scope', '$http', function ($scope, $http) {
>>>>>>> 7b31582bc7fa80a2d0faac9cd3831bf1fe75a0f8

    $scope.submitForm = function(isValid,contact) {

        $scope.submitted = true;

        if (isValid) {
<<<<<<< HEAD
            Data.push('mail',contact)
            .then(response){
              if(response.status==="success"){
                alert("Email sent correctly");
              }
              else
                alert(response["message"]);
            }

        }

    };
}]);
=======
            
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
>>>>>>> 7b31582bc7fa80a2d0faac9cd3831bf1fe75a0f8
