'use strict';

var eventsApp = angular.module('eventsApp',['ngResource','ngRoute','ngCookies'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',{
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });

        $routeProvider.when('/events',{
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController',
            resolve: {
                events: function (eventData) {
                    return eventData.getAllEvents().$promise;
                }
            }
        });

        $routeProvider.when('/event/:eventId',{
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController',
            resolve: {
                event: function ($route, eventData) {
                    return eventData.getEvent($route.current.pathParams.eventId).$promise;
                }
            }
        });

        $routeProvider.when('/editProfile',{
            templateUrl: 'templates/EditProfile.html',
            controller: 'EditProfileController'
        });

        $routeProvider.when('/login',{
            templateUrl: 'templates/Login.html',
            controller: 'LoginController'
        });

        $routeProvider.when('/about',{
            template: '<div class="container">' +
                '<div><h2>About</h2>' +
                '<div class="row">' +
                '<div class="span6">' +
                '<div><p>In this website you can register, login, create new event, display all events and specific event</p></div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'
        });

        $routeProvider.when('/sampleDirective',{
            templateUrl: 'templates/SampleDirective.html',
            controller: 'SampleDirectiveController'
        });

        $routeProvider.otherwise({redirectTo: '/events'});

        $locationProvider.html5Mode(true);
    });
