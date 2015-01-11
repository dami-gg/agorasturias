agorasturiasApp.controller('PartnersCtrl', function ($scope, partitionService) {

  var partners = $scope.partners = [];

    $scope.addPartner = function() {
        partners.push({
          link: 'http://www.uniovi.es/',
          logo: 'http://goo.gl/NUL33N'
        });
    };

    for (var i=0; i<8; ++i) {
        $scope.addPartner();
    }

    $scope.rows = partitionService.partition(partners, 3);
});