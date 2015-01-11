agorasturiasApp.controller('FileUploaderCtrl', ['$scope', '$upload', function($scope, $upload) {
  
  $scope.$watch('files', function(files) {
    
    if (files !== undefined && files !== null) {

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        $scope.upload = $upload.upload({
          url: '/upload', // upload.php script, node.js route, or servlet url
          //method: 'POST' or 'PUT',
          //headers: {'Authorization': 'xxx'}, // only for html5
          //withCredentials: true,
          data: {myObj: $scope.myModelObj},
          file: file, // single file or a list of files. list is only for html5
          //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
          //fileFormDataName: myFile, // file formData name ('Content-Disposition'), server side request form name
                                      // could be a list of names for multiple files (html5). Default is 'file'

        });
        //.error(...)
        //.then(success, error, progress); // returns a promise that does NOT have progress/abort/xhr functions
        //.xhr(function(xhr){xhr.upload.addEventListener(...)}) // access or attach event listeners to 
                                                                //the underlying XMLHttpRequest
      }
    }
  });
}]);