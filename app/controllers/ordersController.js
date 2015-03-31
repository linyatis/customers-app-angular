(function() {

    var OrdersController = function ($scope, $stateParams, customersFactory) {
        var customerId = $stateParams.customerId;
        $scope.customer = null;

        function init() {
            //Search the customers for the customerId
            customersFactory.getCustomer(customerId)
                .success(function (customer) {
                    $scope.customer = customer;
                })
                    .error(function (data, status, headers, config) {
                    //handle error
                });
        }

        init();
    };

    OrdersController.$inject = ['$scope', '$stateParams', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);

}());
