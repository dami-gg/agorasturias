agorasturiasApp.controller('ThumbnailsCtrl', function ($scope, partitionService) {

  var members = $scope.members = [];

  $scope.addMember = function() {
    members.push({
      name: 'Alberto Cuesta',
      position: 'Main organizer',
      image: 'http://goo.gl/eJvm24',
      hover: 'http://goo.gl/y2tsTX'
    });
  };

  for (var i=0; i<7; ++i) {
    $scope.addMember();
  }

  $scope.rows = partitionService.partition(members, 4);
});