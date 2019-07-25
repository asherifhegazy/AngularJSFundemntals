'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder, userData) {
        $scope.user = {
            sessionsVotes: []
        };

        $scope.getGravatarUrl = function(email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        };
        
        // $scope.saveUser = function () {
        //     userData.save($scope.user)
        //         .$promise
        //         .then(function (response) {
        //             console.log('success ', response);
        //             window.alert("Success");
        //         })
        //         .catch(function (response) {
        //             console.log('failure ', response);
        //             window.alert("Failure");
        //         });
        // };

        $scope.saveUser = function () {
            userData.save($scope.user,
                function success(response) {
                    window.alert("Success");
                },
                function error(response) {
                    window.alert("Failure");
                });
        };

        $scope.cancelEdit = function () {
            window.location = "events";
        };
    }
);
