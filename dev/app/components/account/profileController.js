agorasturiasApp.controller('ProfileCtrl', ['$scope', 'LoginService', 'Data', 
    function ($scope, LoginService, Data) {

        $scope.userData = LoginService.session;

        $scope.submitted = false;

        $scope.changePassword = function(isValid, oldPassword, newPassword) {

            $scope.submitted = true;

            if (isValid) {                

                Data.put('changepwd', {
                        username: LoginService.session.username, 
                        curr_pass: oldPassword, 
                        new_pass: newPassword
                    })
                    .then(function(response) {                           
                        if (response.status === "success") {
                            $scope.notify('Password correctly changed', 'success');
                        }
                        else {
                            $scope.notify(response.message, 'danger');
                        }                            
                    }); 
            }
        };

        $scope.passwordsMatch = function(newPassword, newPasswordConfirmation) {
            return newPassword === newPasswordConfirmation;
        };
    }
]);