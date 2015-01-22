agorasturiasApp.controller('ThumbnailsCtrl', function ($scope, partitionService) {

  var members = $scope.members = [];

  $scope.fillMembers = function() {
    members.push({ name: 'Alberto', position: 'Main organizer', 
                    image: 'public/img/team/alberto.png', hover: 'http://goo.gl/y2tsTX'});
    members.push({ name: 'Juanola', position: 'Incoming responsible', 
                    image: 'public/img/team/juanola.png', hover: ''});
    members.push({ name: 'Laura', position: 'Treasurer', 
                    image: 'public/img/team/laura.png', hover: ''});
    members.push({ name: 'Dami', position: 'Information technology', 
                    image: 'public/img/team/dami.png', hover: ''});
    members.push({ name: 'Gerar', position: 'Public relations', 
                    image: 'public/img/team/gerar.png', hover: ''});
    members.push({ name: 'Elena', position: 'Pubplic relations', 
                    image: 'public/img/team/elena.png', hover: ''});
    members.push({ name: 'Sora', position: 'Fundraising', 
                    image: 'public/img/team/sora.png', hover: ''});
    members.push({ name: 'Víctor', position: 'Fundraising', 
                    image: 'public/img/team/victor.png', hover: ''});
    members.push({ name: 'Alba', position: 'Meals responsible', 
                    image: 'public/img/team/alba.png', hover: ''});
    members.push({ name: 'Santi', position: 'Social programme', 
                    image: 'public/img/team/santi.png', hover: ''});
    members.push({ name: 'Alberto', position: 'Human resources', 
                    image: 'public/img/team/albertoHR.png', hover: ''});
    members.push({ name: 'Olga', position: 'Human resources', 
                    image: 'public/img/team/olga.png', hover: ''});
    members.push({ name: 'Marcos', position: 'AEGEE 30th anniversary', 
                    image: 'public/img/team/marcos.png', hover: ''});
  };

  if ($scope.members.length === 0) {
    $scope.fillMembers();
  }

  $scope.rows = partitionService.partition(members, 4);
});