'use strict';

eventsApp.controller('NavbarController', function ($scope,$cookieStore) {
    $scope.isUserLoggedIn = isUserLoggedIn();
    $scope.logout = function () {
        $cookieStore.remove('user');
        $scope.isUserLoggedIn = false;
        window.alert('See you soon');
    };

    function isUserLoggedIn() {
        return $cookieStore.get('user') ? true : false;
    }
});

