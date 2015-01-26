agorasturiasApp.controller('FormCtrl', ['$scope', 'Data',
  function ($scope, Data) {

      Data.push('mail',contact)
      .then(function(response){
        if(response.status==="success"){
          alert("Email sent correctly");
        }
        else
          alert(response.message);
      });
  }
}]);
