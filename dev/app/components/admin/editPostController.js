agorasturiasApp.controller('EditPostCtrl',['$location','$scope','Data',
  function($location,$scope,Data){

  $scope.editorOptions = {
    language:'es',
    uiColor:'#ffffff'
  };

  $scope.doEditPost = function(post){

    post.modifier_username = $scope.username;
    post.modifier_id = $scope.uid;

    Data.put('posts/' + post.id, {
      post:JSON.stringify(post)
    }).then(function(response){

      if(response.status === "success"){
        alert("Post successfully updated");
        $location.path('/home');
      }
      else
        alert(response.message);
    });
  };

  $scope.doDeletePost = function(postId){
    Data.delete('posts/' + postId).then(function(response){
      if(response.status === "success"){
        alert(response.message);
        $location.path('/home');
      }
      else
        alert(response.message);
    });
  };
}]);