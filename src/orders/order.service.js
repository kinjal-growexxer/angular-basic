angular.module('orderApp.orders')
  .service('OrderService', function ($http) {

    this.getOrders = function () {
      return $http.get('/api/getOrders.php');
    };

    this.getOrder = function (id) {
      return $http.get('/api/getOrder.php?id=' + id);
    };

    this.createOrder = function (order) {
      return $http.post('/api/createOrder.php', order);
    };

    this.updateOrder = function (order) {
      return $http.put('/api/updateOrder.php', order);
    };

    this.deleteOrder = function (id) {
      return $http.delete('/api/deleteOrder.php?id=' + id);
    };
  });
