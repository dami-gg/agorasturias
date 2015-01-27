agorasturiasApp.controller('PostsCtrl',
  ['$rootScope', '$scope', '$location', '$anchorScroll', 'Data', '$translate', '$cookieStore',
    function ($rootScope, $scope, $location, $anchorScroll, Data, $translate, $cookieStore) {

    var currentPageInCookie = $cookieStore.get("currentPage");

    if (currentPageInCookie !== undefined) {
      $scope.currentPage = currentPageInCookie;
    }
    else {
      $scope.currentPage = 1;
    }

    $scope.itemsPerPage = 5;

    $scope.setPage = function (pageNumber) {
        $scope.currentPage = pageNumber;
        $cookieStore.put("currentPage", pageNumber);
    };

    $scope.pageChanged = (function() {
      $scope.lastPageLoaded = angular.copy($scope.currentPage);
      Data.get('posts/' + $translate.use() + '/desc/' + $scope.currentPage + '/' + $scope.itemsPerPage)
      .then(function(response){

        if(response.status === "success"){
          $scope.posts = response.posts;
          $scope.totalItems = response.total_posts;

          $scope.pagedPosts = $scope.posts;
        }

      });

      $cookieStore.put("currentPage", $scope.lastPageLoaded);
    })();

    $scope.gotoTop = function() {
      $location.hash('menu-wrapper');
      $anchorScroll();
    };

    $scope.editPost = function(post){
      var res = post.title.split('_');
      var postId = res[1];
      Data.get('posts/' + postId)
      .then(function(response){

        if(response.status === "success"){
          $rootScope.currentPost = {id: postId, title: response.title,
            text: response.text, image: response.image, esTitle:response.esTitle,
            esText: response.esText, engTitle: response.engTitle, engText: response.engText };
        }

      });
      // $rootScope.currentPost = angular.copy(post);
      $location.path ('/edit-post');
    };

    $scope.openPost = function(post){
      $cookieStore.put('post', post.id);

      $rootScope.currentPost = angular.copy(post);
      $location.path ('/post/' + post.id);
    };
}]);
