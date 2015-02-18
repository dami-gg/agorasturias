agorasturiasApp.controller('ProfileCtrl', ['$scope', 'LoginService', 'Data', 
    function ($scope, LoginService, Data) {

        $scope.userData = LoginService.session;
    }
]);