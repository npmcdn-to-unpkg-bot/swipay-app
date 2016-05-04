swipay = angular.module('swipay', ['ui.router']);

swipay.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "/views/login.html"
        })
      .state('state1', {
          url: "/state1",
          templateUrl: "/views/business/business.html"
      })
      .state('state1.list', {
          url: "/list",
          templateUrl: "/views/business/business.home.html",
          controller: function ($scope) {
              $scope.items = ["A", "List", "Of", "Items"];
          }
      })
      .state('state2', {
          url: "/state2",
          templateUrl: "/views/clients/client.html"
      })
      .state('state2.list', {
          url: "/list",
          templateUrl: "/views/clients/client.home.html",
          controller: function ($scope) {
              $scope.things = ["A", "Set", "Of", "Things"];
          }
      });

    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});
});