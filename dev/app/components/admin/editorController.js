agorasturiasApp.controller('EditorCtrl',
  ['$rootScope', '$scope', '$location', '$anchorScroll', 'Data',
    function ($rootScope, $scope, $location, $anchorScroll, Data) {

  $scope.editorOptions = {
    language:'es',
    uiColor:'#ffffff'
  };

  /***
  * POSTS
  ***/

  $scope.doEditPost = function(post) {
    post.modifier_username = $scope.username;
    post.modifier_id = $scope.uid;

    Data.put('posts/' + post.id, {
      post:JSON.stringify(post)
    }).then(function(response){

      if(response.status === "success"){
        $scope.notify('Post successfully changed', 'success');
        $location.path('/home');
      }
      else {
        $scope.notify('Error: ' + response.message, 'danger');
      }
    });
  };

  $scope.doDeletePost = function(postId) {
    Data.delete('posts/' + postId).then(function(response){
      if(response.status === "success"){
        $scope.notify('Post successfully deleted', 'success');
        $location.path('/home');
      }
      else {
        $scope.notify('Error: ' + response.message, 'danger');
      }
    });
  };

  $scope.doNewPost = function(newPost){
    newPost.username = $scope.username;
    newPost.modifier_username = $scope.username;
    newPost.user_id = $scope.uid;
    newPost.modifier_id = $scope.uid;
    newPost.header_image = '';

    Data.post('posts', {
      post:JSON.stringify(newPost)
    }).then(function(response){
      if(response.status==="success"){
        $scope.notify('Post successfully created', 'success');
        $location.path('/home');
      }
      else {
        $scope.notify('Error: ' + response.message, 'danger');
      }
    });
  };

  /***
  * MENUS
  ***/

  $scope.editMenus = function() {
    Data.get('/menus')
      .then(function(response){
        if(response.status === "success"){
          $scope.menusList = response.menus;
        }
        else {
          $scope.notify('Error: ' + response.message, 'danger');
        }
      });
  };

  $scope.doSaveMenu = function(edited_menu){
    edited_menu.modifier_username = $scope.username;
    Data.put('/menus/' + edited_menu.id, { 
        menu: edited_menu 
    }).then(function(response){
      if(response.status !== "error") {
        $scope.notify('Menu successfully saved', 'success');
      }
      else {
        $scope.notify('Error: ' + response.message, 'danger');
      }
    });
  };

  $scope.doDeleteMenu = function(id){
    notify('Error: not implemented','danger');
  };

  /***
  * SECTIONS
  ***/

  $scope.editSections = function() {
    Data.get('/sections')
     .then(function(response){
        if(response.status === "success"){
          $scope.sectionsList = response.sections;
          $location.path('/edit-sections');
        }
      });
  };  

  $scope.doEditSection = function(edited_section){
    edited_section.modifier_username = $scope.username;
    Data.put('/sections/' + edited_section.id, {
      section:edited_section
    }).then(function(response){
      if(response.status !== "error") {
        $scope.notify('Section successfully saved', 'success');
      }
      else {
        $scope.notify('Error: ' + response.message, 'danger');
      }
    });
  };

  $scope.editSection = function(section){
    $rootScope.currentSection = section;
    $location.path('/edit-section');
  };

  $scope.doDeleteSection = function(id){
    notify('Error: not implemented','danger');
  };

  if ($location.path() === "/edit-menus") {
    $scope.editMenus();
  }
  else if ($location.path() === "/edit-sections") {
    $scope.editSections();
  }

}]);