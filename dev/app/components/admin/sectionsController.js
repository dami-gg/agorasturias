agorasturiasApp.controller('SectionsCtrl',
['$rootScope', '$scope', '$location', '$anchorScroll', 'Data',
function ($rootScope, $scope, $location, $anchorScroll, Data) {

  $scope.doEditSection = function(edited_section){
    edited_section.modifier_username = $scope.username;
    Data.put('/sections/' + edited_section.id, {section:edited_section})
    .then(function(response){
      if(response.status!="error")
        $scope.notify('Section successfully saved', 'success');
      else
        $scope.notify('Error: ' + response.message, 'danger');
    });
  };

  $scope.editSection = function(section){
    $rootScope.currentSection = section;
    $location.path('/edit-section');
  };

  $scope.doDeleteSection = function(id){
    notify('Error: not implemented','danger');
  };

}]);
