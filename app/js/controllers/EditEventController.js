'use strict';

eventsApp.controller('EditEventController', function ($scope,eventData) {
    $scope.saveEvent = function (event,newEventForm) {
        if(newEventForm.$valid) {
            eventData.save(event,
                function success(response) {
                    console.log('Success ', response);
            },
                function error(response) {
                    console.log('Failure', response);
            });
        }
        // if(newEventForm.$valid) {
        //     eventData.save(event)
        //         .$promise
        //         .then(function (response) {
        //             console.log('Success ', response);
        //         })
        //         .catch(function (response) {
        //             console.log('Failure', response);
        //         });
        // }
    };

    $scope.cancelEdit = function () {
        window.location = "/EventDetails.html";
    };

    $scope.namePattern = /^(?:[A-Za-z]+)(?:[A-Za-z0-9 _]*)$/;
    $scope.datePattern = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])\/([0]?[1-9]|[1][0-2])\/([0-9]{4}|[0-9]{2})$/;
    $scope.numbersPattern = /^[0-9]*$/;
    $scope.lettersPattern = /^[a-zA-Z\s]*$/;
    $scope.addressPattern = /^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9 ,.]*)$/;
    $scope.imageUrlPattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
});