agorasturiasApp.controller('NewPostCtrl',['$location','$scope','Data', function($location,$scope,Data){

  $scope.editorOptions = {
    language:'es',
    uiColor:'#ffffff'
  };

  $scope.doNewPost = function(newPost){
    newPost.username = $scope.username;
    newPost.modifier_username = $scope.username;
    newPost.user_id = $scope.uid;
    newPost.modifier_id = $scope.uid;
    newPost.header_image = '';

    Data.post('posts',{
      post:JSON.stringify(newPost)

    }).then(function(response){

      if(response.status==="success"){
        $location.path('/home');
      }
      else {
        alert(response.message);
      }
    });
  };

}]);
