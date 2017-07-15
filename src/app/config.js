webOrganizerApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './app/components/home/homeView.html',
        controller: 'homeController',
        controllerAs: 'home'
    })
    .when('/clock', {
        templateUrl : './app/components/clock/clockView.html',
        controller: 'digitalClockController',
        controllerAs: 'dClock'
    })
    .otherwise({
        redirectTo: '/'
    });

});
