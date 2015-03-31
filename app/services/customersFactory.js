(function () {

    customersFactory.$inject = ['$http'];

    angular.module('customersApp').factory('customersFactory', customersFactory);

    function customersFactory ($http) {

        return {
            getCustomers: function () {
                return $http.get('/api/customers');
            },
            getCustomer: function (customerId) {
                return $http.get('/api/customers/' + customerId);
            },
            saveCustomer: function (customer) {
                return $http.post('/api/customers', customer).then(function (results) {
                    return results.data;
                });
            }
        }
    }

}());
