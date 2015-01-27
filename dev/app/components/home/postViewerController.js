agorasturiasApp.controller('PostViewerCtrl',
  ['$rootScope', '$scope', '$location', '$anchorScroll', 'Data', '$translate', '$cookieStore', '$stateParams',
    function ($rootScope, $scope, $location, $anchorScroll, Data, $translate, $cookieStore, $stateParams) {

    var paramPostId = $stateParams.postId,
        postInCookie = $cookieStore.get("post");

    if (postInCookie === undefined || postInCookie !== paramPostId) {
      $cookieStore.put('post', $rootScope.currentPost.id);
    }

    $rootScope.currentPost = getPostById(paramPostId);

    $scope.currentUrl = document.location.href;

    function getPostById (postId) {
      Data.get('posts/' + postId)
      .then(function(response){

        if(response.status === "success"){
          $rootScope.currentPost = {id: postId, title: response.title,
            text: response.text, image: response.image };
        }

      });
    }

    $scope.gotoTop = function() {
      $location.hash('menu-wrapper');
      $anchorScroll();
    };
}]);
