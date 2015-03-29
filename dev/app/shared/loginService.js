agorasturiasApp.factory('LoginService', ['USER_ROLES', function(USER_ROLES) {

    var session = {
        userId: '',
        email: '',
        name: '',
        role: USER_ROLES.GUEST,
        username: '',
        body: ''
    };

    var authenticated = false;

    var adminAccess = false;

    var login = function (userId, email, name, role, username, body) {
        this.session.userId = userId;
        this.session.email = email;
        this.session.name = name;
        this.session.role = role;
        this.session.username = username;
        this.session.body = body;

        this.authenticated = true;
        this.adminAccess = (role === USER_ROLES.ADMIN);
    };

    var logout = function () {
        this.session.userId = '';
        this.session.email = '';
        this.session.name = '';
        this.session.role = USER_ROLES.GUEST;
        this.session.username = '';
        this.session.body = '';

        this.authenticated = false;
        this.adminAccess = false;
    };

    return {
        session : session,
        authenticated : authenticated,
        adminAccess : adminAccess,
        login : login,
        logout : logout
    };
}]);
