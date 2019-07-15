eventsApp.factory('myCache', function($cacheFactory) {
    return $cacheFactory('myCache', {capacity: 3})
})