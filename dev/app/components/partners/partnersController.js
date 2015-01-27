agorasturiasApp.controller('PartnersCtrl', function ($scope, partitionService) {

  var partners = $scope.partners = [];

    $scope.fillPartners = function() {
        
        partners.push({ logo: 'public/img/partners/uniovi.png', link: 'http://www.uniovi.es/' });
        partners.push({ logo: 'public/img/partners/ayto-gijon.png', link: 'http://www.gijon.es/' });
        partners.push({ logo: 'public/img/partners/epi.png', link: 'http://www.epigijon.uniovi.es/' });
        partners.push({ logo: 'public/img/partners/laboral.png', link: 'http://www.laboralciudaddelacultura.com/' });
        partners.push({ logo: 'public/img/partners/oficongresos.png', link: 'http://congresos.gijon.es/' });
        partners.push({ logo: 'public/img/partners/conseyu.png', link: 'http://www.cmpa.es/' });
        partners.push({ logo: 'public/img/partners/kemphor.png', link: 'http://www.kemphor.com/' });
        partners.push({ logo: 'public/img/partners/alsa.png', link: 'http://www.alsa.es/' });
        partners.push({ logo: 'public/img/partners/renfe.png', link: 'http://www.renfe.es/' });
    };

    if ($scope.partners.length === 0) {
      $scope.fillPartners();
    }

    $scope.rows = partitionService.partition(partners, 4);
});