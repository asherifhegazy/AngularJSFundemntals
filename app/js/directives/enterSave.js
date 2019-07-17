'use strict';

eventsApp.directive('enterSave',function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            document.onkeydown = function (e) {
                if(e.keyCode === 13){
                    angular.element('#submit').focus();
                }
            }
        }
    }
});