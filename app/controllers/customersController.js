(function() {

    var CustomersController = function ($scope, customersFactory) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };

        function init() {
            customersFactory.getCustomers()
                .success(function (customers) {
                    $scope.customers = customers;
                })
                .error(function (data, status, headers, config) {
                    //handle error
                });
        }

        init();
    };

    CustomersController.$inject = ['$scope', 'customersFactory'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);

}());
