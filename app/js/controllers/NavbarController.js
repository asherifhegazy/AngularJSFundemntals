'use strict';

eventsApp.controller('NavbarController', function ($scope,$cookieStore, $location) {
    $scope.isUserLoggedIn = isUserLoggedIn();
    $scope.logout = function () {
        $cookieStore.remove('user');
        $scope.isUserLoggedIn = false;
        window.alert('See you soon');
    };

    $scope.createEvent = function () {
        $location.url('/newEvent');
    };

    function isUserLoggedIn() {
        return $cookieStore.get('user') ? true : false;
    }
});

