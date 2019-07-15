// eventsApp.factory('eventData',function ($http) {
//    return {
//        getEvent: function () {
//            return $http({method: 'GET', url: '/data/event/1'});
//        }
//    };
// });

eventsApp.factory('eventData',function ($resource) {
    return {
        getEvent: function () {
            return $resource('/data/event/:id',{id:'@id'}).get({id:1});
        }
    };
});