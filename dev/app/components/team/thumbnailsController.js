agorasturiasApp.controller('ThumbnailsCtrl', function ($scope, partitionService) {

  var members = $scope.members = [];

  $scope.fillMembers = function() {
    members.push({ name: 'Alberto', position: 'Main organizer', 
                    image: 'public/img/team/alberto.png', hover: 'http://goo.gl/y2tsTX'});
    members.push({ name: 'Juanola', position: 'Incoming', 
                    image: 'public/img/team/juanola.png', hover: ''});
    members.push({ name: 'Gerar', position: 'PR', 
                    image: 'public/img/team/gerar.png', hover: ''});
    members.push({ name: 'Elena', position: 'PR', 
                    image: 'public/img/team/elena.png', hover: ''});
    members.push({ name: 'Dami', position: 'IT', 
                    image: 'public/img/team/dami.png', hover: ''});
    members.push({ name: 'Olga', position: 'HR', 
                    image: 'public/img/team/olga.png', hover: ''});
  };

  if ($scope.members.length === 0) {
    $scope.fillMembers();
  }

  $scope.rows = partitionService.partition(members, 4);
});