agorasturiasApp.controller('MenusCtrl',
['$rootScope', '$scope', '$location', '$anchorScroll', 'Data',
function ($rootScope, $scope, $location, $anchorScroll, Data) {

  $scope.doSaveMenu = function(edited_menu){
    edited_menu.modifier_username = $scope.username;
    Data.put('/menus/' + edited_menu.id, {menu:edited_menu})
    .then(function(response){
      if(response.status!="error")
        $scope.notify('Menu successfully saved', 'success');
      else
        $scope.notify('Error: ' + response.message, 'danger');
    });
  };

  $scope.doDeleteMenu = function(id){
    $scope.notify('Error: not implemented','danger');
  };

}]);
