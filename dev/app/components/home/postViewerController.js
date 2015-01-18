agorasturiasApp.controller('PostViewerCtrl', 
  ['$rootScope', '$scope', '$location', '$anchorScroll', 'Data', '$translate', '$cookieStore', '$stateParams',
    function ($rootScope, $scope, $location, $anchorScroll, Data, $translate, $cookieStore, $stateParams) {

    var paramPostId = $stateParams.postId,
        postInCookie = $cookieStore.get("post");

    if (postInCookie !== undefined && postInCookie.id === paramPostId) {
      $rootScope.currentPost = postInCookie;
    }    
    else {      
      $rootScope.currentPost = getPostById(paramPostId);
      $cookieStore.put('post', $rootScope.currentPost);
    }

    $scope.currentUrl = document.location.href;

    function getPostById (postId) {
      Data.get('posts/' + postId + '/' + $translate.use())
      .then(function(response){

        if(response.status === "success"){
          $rootScope.currentPost = {id: postId, title: response.title, text: response.text };
        }

      });
    }

    $scope.gotoTop = function() {
      $location.hash('menu-wrapper');
      $anchorScroll();
    };
}]);
