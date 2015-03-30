agorasturiasApp.controller('SponsorsCtrl', function ($scope, PartitionService) {

  	var mainPartners = $scope.mainPartners = [],
  		universityPartners = $scope.universityPartners = [],
		sponsors = $scope.sponsors = [],
		transportationPartners = $scope.transportationPartners = [];

    var fillSponsors = function() {

        mainPartners.push({ logo: 'public/img/sponsors/asturias.png', link: 'http://www.asturias.es/' });
        mainPartners.push({ logo: 'public/img/sponsors/ayto-gijon.png', link: 'http://www.gijon.es/' });
        mainPartners.push({ logo: 'public/img/sponsors/laboral.png', link: 'http://www.laboralciudaddelacultura.com/' });
        mainPartners.push({ logo: 'public/img/sponsors/oficongresos.png', link: 'http://congresos.gijon.es/' });
        mainPartners.push({ logo: 'public/img/sponsors/divertia.png', link: 'http://www.teatrojovellanos.com/' });
        mainPartners.push({ logo: 'public/img/sponsors/gijon-deporte.png', link: 'http://deporte.gijon.es/' });

        universityPartners.push({ logo: 'public/img/sponsors/uniovi.png', link: 'http://www.uniovi.es/' });
        universityPartners.push({ logo: 'public/img/sponsors/epi.png', link: 'http://www.epigijon.uniovi.es/' });

        sponsors.push({ logo: 'public/img/sponsors/tirma.png', link: 'http://www.tirma.com/' });
        sponsors.push({ logo: 'public/img/sponsors/kemphor.png', link: 'http://www.kemphor.com/' });
        sponsors.push({ logo: 'public/img/sponsors/aviles.png', link: 'http://aviles.es/web/turismo/' });
        sponsors.push({ logo: 'public/img/sponsors/conseyu-gijon.png', link: 'http://www.cmx.es/' });
        sponsors.push({ logo: 'public/img/sponsors/garcia.png', link: 'http://www.comercialgarcia.es/' });
        sponsors.push({ logo: 'public/img/sponsors/moka.png', link: 'http://www.mokacatering.com/' });
        sponsors.push({ logo: 'public/img/sponsors/ktm.png', link: 'http://www.ktm.com/es/ready-to-race.html' });
        sponsors.push({ logo: 'public/img/sponsors/redyser.png', link: 'http://www.redyser.com/' });
        sponsors.push({ logo: 'public/img/sponsors/elarco.png', link: 'http://www.elarco.es/' });
        sponsors.push({ logo: 'public/img/sponsors/conseyu.png', link: 'http://www.cmpa.es/' });
        sponsors.push({ logo: 'public/img/sponsors/makro.png', link: 'http://www.makro.es/' });
        sponsors.push({ logo: 'public/img/sponsors/uni-alicante.png', link: 'http://www.ua.es/' });
        sponsors.push({ logo: 'public/img/sponsors/elvalle.png', link: 'http://www.snackselvalle.com/' });
        sponsors.push({ logo: 'public/img/sponsors/graphicshops.png', link: 'http://graphicshops.com/' });
        sponsors.push({ logo: 'public/img/sponsors/kia.png', link: 'http://www.asturconsa.com/' });

        transportationPartners.push({ logo: 'public/img/sponsors/alsa.png', link: 'http://www.alsa.es/' });
        transportationPartners.push({ logo: 'public/img/sponsors/renfe.png', link: 'http://www.renfe.es/' });
    };

    if ($scope.sponsors.length === 0) {
    	fillSponsors();
    }

    $scope.mainPartners = PartitionService.partition(mainPartners, 3);
    $scope.universityPartners = PartitionService.partition(universityPartners, 2);
    $scope.sponsors = PartitionService.partition(sponsors, 4);
    $scope.transportationPartners = PartitionService.partition(transportationPartners, 2);
});
