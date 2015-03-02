agorasturiasApp.controller('SponsorsCtrl', function ($scope, PartitionService) {

  var sponsors = $scope.sponsors = [];

    $scope.fillsponsors = function() {
        
        sponsors.push({ logo: 'public/img/sponsors/uniovi.png', link: 'http://www.uniovi.es/' });
        sponsors.push({ logo: 'public/img/sponsors/ayto-gijon.png', link: 'http://www.gijon.es/' });
        sponsors.push({ logo: 'public/img/sponsors/epi.png', link: 'http://www.epigijon.uniovi.es/' });
        sponsors.push({ logo: 'public/img/sponsors/laboral.png', link: 'http://www.laboralciudaddelacultura.com/' });
        sponsors.push({ logo: 'public/img/sponsors/oficongresos.png', link: 'http://congresos.gijon.es/' });
        sponsors.push({ logo: 'public/img/sponsors/conseyu.png', link: 'http://www.cmpa.es/' });
        sponsors.push({ logo: 'public/img/sponsors/aviles.png', link: 'http://aviles.es/web/turismo/' });
        sponsors.push({ logo: 'public/img/sponsors/gijon-deporte.png', link: 'http://deporte.gijon.es/' });
        sponsors.push({ logo: 'public/img/sponsors/kemphor.png', link: 'http://www.kemphor.com/' });
        sponsors.push({ logo: 'public/img/sponsors/ktm.png', link: 'http://www.ktm.com/es/ready-to-race.html/' });
        sponsors.push({ logo: 'public/img/sponsors/alsa.png', link: 'http://www.alsa.es/' });
        sponsors.push({ logo: 'public/img/sponsors/renfe.png', link: 'http://www.renfe.es/' });
    };

    if ($scope.sponsors.length === 0) {
      $scope.fillsponsors();
    }

    $scope.rows = PartitionService.partition(sponsors, 4);
});