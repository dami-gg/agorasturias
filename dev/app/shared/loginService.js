agorasturiasApp.factory('LoginService', ['USER_ROLES', function(USER_ROLES) {
    
    var user = {
        username: '',
        role: USER_ROLES.GUEST,
        email: '',
        name: ''
    };
    
    return user;
}]);