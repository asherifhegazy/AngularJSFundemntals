'use strict';

eventsApp.factory('userData',function ($resource) {
    var resource = $resource('/data/user/:userName',{userName:'@userName'});
    return {
        getUser: function (username) {
            return resource.get({userName:username});
        },

        // save: function (user) {
        //     return resource.save(user);
        // }

        save: function (user, success, error) {
            resource.save(user)
                .$promise
                .then(function (response) {
                    success(response);
                })
                .catch(function (response) {
                    error(response);
                })
        }
    };
});