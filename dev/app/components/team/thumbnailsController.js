agorasturiasApp.controller('ThumbnailsCtrl', function ($scope, partitionService) {

  var members = $scope.members = [];

  $scope.fillMembers = function() {
    members.push({ name: 'Alberto', position: 'MAIN_ORGANIZER', 
                    image: 'public/img/team/alberto.png', hover: 'http://goo.gl/y2tsTX'});
    members.push({ name: 'Juanola', position: 'INCOMING', 
                    image: 'public/img/team/juanola.png', hover: ''});
    members.push({ name: 'Laura', position: 'TREASURER', 
                    image: 'public/img/team/laura.png', hover: ''});
    members.push({ name: 'Dami', position: 'IT', 
                    image: 'public/img/team/dami.png', hover: ''});
    members.push({ name: 'Gerar', position: 'PR', 
                    image: 'public/img/team/gerar.png', hover: ''});
    members.push({ name: 'Elena', position: 'PR', 
                    image: 'public/img/team/elena.png', hover: ''});
    members.push({ name: 'Sora', position: 'FR', 
                    image: 'public/img/team/sora.png', hover: ''});
    members.push({ name: 'Víctor', position: 'FR', 
                    image: 'public/img/team/victor.png', hover: ''});
    members.push({ name: 'Alba', position: 'MEALS', 
                    image: 'public/img/team/alba.png', hover: ''});
    members.push({ name: 'Santi', position: 'SOCIAL_PROGRAMME', 
                    image: 'public/img/team/santi.png', hover: ''});
    members.push({ name: 'Alberto', position: 'HR', 
                    image: 'public/img/team/albertoHR.png', hover: ''});
    members.push({ name: 'Olga', position: 'HR', 
                    image: 'public/img/team/olga.png', hover: ''});
    members.push({ name: 'Marcos', position: 'ANNIVERSARY_RESPONSIBLE', 
                    image: 'public/img/team/marcos.png', hover: ''});
    members.push({ name: 'Jorge', position: 'LOGISTICS', 
                    image: 'public/img/team/jorge.png', hover: ''});
  };

  if ($scope.members.length === 0) {
    $scope.fillMembers();
  }

  $scope.rows = partitionService.partition(members, 4);
});