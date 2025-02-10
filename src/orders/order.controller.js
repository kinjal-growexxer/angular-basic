angular.module('orderApp.orders')
  .controller('OrderController', function ($scope, OrderService) {
    // Initialize an empty array to store orders
    $scope.orders = [];

    // Fetch orders when the page loads
    OrderService.getOrders().then(function(response) {
      $scope.orders = response.data;
    });

    // Delete Order
    $scope.deleteOrder = function(orderId) {
      if (confirm("Are you sure you want to delete this order?")) {
        OrderService.deleteOrder(orderId).then(function(response) {
          alert('Order deleted successfully!');
          $scope.orders = $scope.orders.filter(order => order.id !== orderId);
        }, function(error) {
          alert('Error deleting order.', error);
        });
      }
    };
  });
