angular.module('orderApp.orders')
  .controller('ViewOrderController', function ($scope, $stateParams, OrderService, $state) {

    //Fetch order data
    OrderService.getOrder($stateParams.orderId).then(function (response) {
      $scope.order = response.data;
    }, function (error) {
      alert('Error fetching order details.', error);
    });

    // Delete Order
    $scope.deleteOrder = function (orderId) {
      if (confirm('Are you sure you want to delete this order?')) {
        OrderService.deleteOrder(orderId).then(function (response) {
          alert('Order deleted successfully!');
          $state.go('orders');
        }, function (error) {
          alert('Error deleting order.', error);
        });
      }
    };
  });
