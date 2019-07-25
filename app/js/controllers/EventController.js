'use strict';

eventsApp.controller('EventController', function ($scope, eventData, $cookieStore, userData, $routeParams, $route) {
    $scope.sortorder = 'name';

    // eventData.getEvent($routeParams.eventId)
    //     .$promise
    //     .then(function (event) {
    //         $scope.event = event;
    //     })
    //     .catch(function (response) {
    //         console.log(response);
    //     });

    $scope.event = $route.current.locals.event;

    $scope.upVoteSession = function (session) {
        if (isUserLoggedIn()) {
            var user = JSON.parse($cookieStore.get('user'));
            userData.getUser(user.userName)
                .$promise
                .then(function (data) {
                    user = data;
                    if (user.sessionsVotes.indexOf('session' + session.id) === -1) {
                        user.sessionsVotes.push('session' + session.id);

                        userData.save(user,
                            function success() {
                                session.upVoteCount++;
                                eventData.update($scope.event,
                                    function success() {
                                        console.log('session', session.id, 'up voted');
                                    },
                                    function error() {

                                    });
                            },
                            function error(response) {
                                console.log('failure ', response);
                            });
                    } else {
                        console.log('You have up voted this session before');
                    }
                });
        } else {
            window.alert('please login first');
        }
    };

    $scope.downVoteSession = function (session) {
        if (isUserLoggedIn()) {
            var user = JSON.parse($cookieStore.get('user'));
            userData.getUser(user.userName)
                .$promise
                .then(function (data) {
                    user = data;
                    if (user.sessionsVotes.indexOf('session' + session.id) === -1) {
                        user.sessionsVotes.push('session' + session.id);

                        userData.save(user,
                            function success() {
                                session.upVoteCount--;
                                eventData.update($scope.event,
                                    function success() {
                                        console.log('session', session.id, 'up voted');
                                        console.log($scope.event);
                                    },
                                    function error() {

                                    });
                            },
                            function error(response) {
                                console.log('failure ', response);
                            });
                    } else {
                        console.log('You have up voted this session before');
                    }
                });
        } else {
            window.alert('please login first');
        }
    };

    function isUserLoggedIn() {
        return $cookieStore.get('user');
    }

    $scope.reload = function () {
        $route.reload();
    }

});