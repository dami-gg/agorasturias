agorasturiasApp.factory('Data', ['$http', function ($http) { 
  // This service connects to our REST API

  var serviceBase = 'api/v1/';
  var obj = {};
  obj.get = function (q, object) {
    return $http.get(serviceBase + q, object).then(function (results) {
      return results.data;
    });
  };
  obj.post = function (q, object) {
    return $http.post(serviceBase + q, object).then(function (results) {
      return results.data;
    });
  };
  obj.put = function (q, object) {
    return $http.put(serviceBase + q, object).then(function (results) {
      return results.data;
    });
  };
  obj.delete = function (q) {
    return $http.delete(serviceBase + q).then(function (results) {
      return results.data;
    });
  };

  return obj;
}]);