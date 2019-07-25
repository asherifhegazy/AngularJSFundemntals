'use strict';

eventsApp.controller('EventListController', function ($scope, $route) {
    // $scope.events = eventData.getAllEvents();
    $scope.events = $route.current.locals.events;
});