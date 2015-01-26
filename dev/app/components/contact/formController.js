agorasturiasApp.controller('FormCtrl', ['$scope', 'Data'
function ($scope, Data) {

    $scope.submitForm = function(isValid,contact) {

        $scope.submitted = true;

        if (isValid) {

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
