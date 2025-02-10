angular.module('orderApp')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/orders');

    $stateProvider
      .state('orders', {
        url: '/orders',
        templateUrl: 'src/orders/order.html',
        controller: 'OrderController'
      })
      .state('create', {
        url: '/create',
        templateUrl: 'src/orders/createUpdateOrder/createUpdateOrder.html',
        controller: 'CreateUpdateOrderController'
      })
      .state('update', {
        url: '/update/:orderId',
        templateUrl: 'src/orders/createUpdateOrder/createUpdateOrder.html',
        controller: 'CreateUpdateOrderController'
      })
      .state('view', {
        url: '/view/:orderId',
        templateUrl: 'src/orders/viewOrder/viewOrder.html',
        controller: 'ViewOrderController'
      });
  });
