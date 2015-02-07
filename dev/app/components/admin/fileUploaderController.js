agorasturiasApp.controller('FileUploaderCtrl', 
  ['$scope', '$upload', 'Data', 'PartitionService', function($scope, $upload, Data, PartitionService) {

  $scope.$watch('files', function(files) {

    if (files !== undefined && files !== null) {

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        $scope.upload = $upload.upload({
          url: '/agorasturias/api/v1/upload', 
          method: 'POST',
          //headers: {'Authorization': 'xxx'}, // only for html5
          //withCredentials: true,
          data: {myObj: $scope.myModelObj},
          file: file, // single file or a list of files. list is only for html5
        });
      }

      getFiles();
    }
  });

  function getFiles() {
      Data.get('/images/gallery')
      .then(function(response){

        $scope.rows = [];

        if (response.status === "Success") {
          var json = response.files,
              files = [];

          for (var i=0; i<response.total_files; ++i) {
            files.push(response.files[i]);
          }

          $scope.rows = PartitionService.partition(files, 6);
        }         
      });
  }

  getFiles();

}]);
