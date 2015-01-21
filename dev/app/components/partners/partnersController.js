agorasturiasApp.controller('PartnersCtrl', function ($scope, partitionService) {

  var partners = $scope.partners = [];

    $scope.fillPartners = function() {
        partners.push({ logo: 'public/img/partners/alsa.png', link: 'http://www.alsa.es/' });
        partners.push({ logo: 'public/img/partners/renfe.png', link: 'http://www.renfe.es/' });
    };

    if ($scope.partners.length === 0) {
      $scope.fillPartners();
    }

    $scope.rows = partitionService.partition(partners, 4);
});