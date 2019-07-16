// eventsApp.factory('eventData',function ($http) {
//    return {
//        getEvent: function () {
//            return $http({method: 'GET', url: '/data/event/1'});
//        }
//    };
// });

eventsApp.factory('eventData',function ($resource) {
    var resource = $resource('/data/event/:id',{id:'@id'});
    return {
        getEvent: function () {
            return resource.get({id:1});
        },

        // save: function (event) {
        //     return $resource('/data/event').save(event);
        // }

        save: function (event, success, error) {
            var events = $resource('/data/event').query();
            events.$promise.then(function (response) {
                event.id = response.length+1;
                resource.save(event)
                    .$promise
                    .then(function (resp) {
                        success(resp);
                    })
                    .catch(function (resp) {
                        error(resp);
                    });
            });
        },

        update: function (event, success, error) {
            resource.save(event)
                .$promise
                .then(function (resp) {
                    success(resp);
                })
                .catch(function (resp) {
                    error(resp);
                });
        }
    };
});