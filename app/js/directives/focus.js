'use strict';

eventsApp.directive('focus',function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            $timeout(function () {
                element[0].focus();
            },0);
        }
    }
});