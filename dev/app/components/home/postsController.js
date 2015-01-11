agorasturiasApp.controller('PostsCtrl', ['$rootScope', '$scope', '$location', '$anchorScroll', 'Data',
  function ($rootScope, $scope, $location, $anchorScroll, Data) {

    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;

    $scope.setPage = function (pageNumber) {
        $scope.currentPage = pageNumber;
    };

    $scope.pageChanged = function() {
      $scope.lastPageLoaded = angular.copy($scope.currentPage);
      Data.get('posts/desc/'+$scope.currentPage+'/'+$scope.itemsPerPage)
      .then(function(response){

        if(response.status === "success"){
          $scope.posts = response.posts;
          $scope.totalItems = response.total_posts;

          $scope.pagedPosts = $scope.posts;
        }

      });

    };

    //$scope.loadPosts($scope.currentPage,$scope.itemsPerPage);
    $scope.pageChanged();

    $scope.gotoTop = function() {
      $location.hash('menu-wrapper');
      $anchorScroll();
    };

    $scope.editPost = function(post){
      $rootScope.currentPost = angular.copy(post);
      $location.path ('/edit-post');
    };


}]);