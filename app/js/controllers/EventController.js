'use strict';

eventsApp.controller('EventController', function ($scope,$log,eventData) {
    $scope.sortorder = 'name';
    // eventData.getEvent()
    //     .success(function (event) { $scope.event = event; })
    //     .error(function (data,status,headers,config) { $log.warn(data,status,headers,config)});

    eventData.getEvent()
        .$promise.then(
            function (event) { $scope.event = event; console.log(event)},
            function (response) { console.log(response);}
        );

    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };

});