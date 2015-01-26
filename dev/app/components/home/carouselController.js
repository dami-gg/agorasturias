agorasturiasApp.controller('CarouselCtrl', function ($scope) {

    $scope.interval = 5000;
    var slides = $scope.slides = [];

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length;
        slides.push({
          title: ['AEGEE', 'Asturias', 'Gijón'][slides.length % 3],
          image: ['carousel-aegee.png', 'carousel-asturias.png', 'carousel-gijon.png'][slides.length % 3],
          text: ['EUROPEAN_FORUM','NATURAL_PARADISE',
                    'GREEN_COAST_CAPITAL'][slides.length % 3]
        });
    };

    for (var i=0; i<3; ++i) {
        $scope.addSlide();
    }
});