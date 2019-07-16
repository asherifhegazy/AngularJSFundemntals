'use strict';

eventsApp.controller('LoginController',function ($scope, userData, $cookieStore) {

    $scope.user = {};
    $scope.login = function () {
        userData.getUser($scope.user.username)
            .$promise
            .then(function (user) {
                if(user.password === $scope.user.password){
                    $cookieStore.put('user',JSON.stringify(user));
                    window.alert('Welcome ' + $scope.user.username);
                    window.location = "/EventDetails.html";
                }
                else{
                    window.alert('Username or password incorrect');
                }
           })
            .catch(function (response) {
                console.log('Failed ', response);
            });
   };

   $scope.cancelLogin = function () {
       window.location = "events";
   };
});