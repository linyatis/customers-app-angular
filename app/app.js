(function() {

    var app = angular.module('customersApp', ['ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/customers");

        $stateProvider
            .state('customers', {
                url: "/customers",
                templateUrl: "app/views/customers.html",
                controller: 'CustomersController'
            })
            .state('ordersByCustomer', {
                url: "/customers/:customerId/orders",
                templateUrl: "app/views/orders.html",
                controller: 'OrdersController'
            });


    }]);

}());
