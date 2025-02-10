angular.module('orderApp.orders')
  .controller('CreateUpdateOrderController', function ($scope, OrderService, $state, $stateParams) {

    $scope.title = 'Create New Order';
    $scope.format = 'dd-MM-yyyy';
    $scope.showFormError = false;

    $scope.datePopup = {
      opened : false
    };

    $scope.order = {
      wineName: '',
      quantity: '',
      price: '',
      customer: '',
      date: ''
    };

    $scope.dateOptions = {
      formatYear : 'yyyy',
      minDate : new Date(),
      startingDay : 1,
      datepickerMode : 'day'
    };

    // Wine list for smart search
    $scope.wineList = [
      { id: 1, name: "Cabernet Sauvignon" },
      { id: 2, name: "Merlot" },
      { id: 3, name: "Chardonnay" },
      { id: 4, name: "Pinot Noir" },
      { id: 5, name: "Sauvignon Blanc" },
      { id: 6, name: "Riesling" },
      { id: 7, name: "Zinfandel" },
      { id: 8, name: "Malbec" },
      { id: 9, name: "Syrah" },
      { id: 10, name: "Tempranillo" },
      { id: 11, name: "Cabernet Franc" },
      { id: 12, name: "Grenache" },
      { id: 13, name: "Pinot Grigio" },
      { id: 14, name: "Shiraz" },
      { id: 15, name: "Sangiovese" },
      { id: 16, name: "Barbera" },
      { id: 17, name: "Prosecco" },
      { id: 18, name: "Chianti" },
      { id: 19, name: "Beaujolais" },
      { id: 20, name: "Moscato" },
    ];

    if ($stateParams.orderId) {
      $scope.title = "Update Order";
      OrderService.getOrder($stateParams.orderId).then(function (response) {
        $scope.order = response.data;
        $scope.order.orderDate = moment($scope.order.orderDate, 'YYYY-MM-DD').toDate();
      }, function (error) {
        alert('Error fetching order details.', error);
      });
    }

    $scope.openDatePicker = function(type) {
      $scope[type].opened = true;
    };

    // Submit the order
    $scope.submitOrder = function () {
      $scope.showFormError = false;
      if ($scope.createOrderForm.$valid) {
        $scope.order.orderDate = moment($scope.order.orderDate).format('YYYY-MM-DDTHH:mm:ss.SSS')
        if ($stateParams.orderId) {
          $scope.order.id = $stateParams.orderId;
          OrderService.updateOrder($scope.order).then(function (response) {
            alert('Order updated successfully!');
            $state.go('orders');
          }, function (error) {
            alert('Error updating order.', error);
          });
        } else {
          OrderService.createOrder($scope.order).then(function (response) {
            alert('Order created successfully!');
            $state.go('orders');
          }, function (error) {
            alert('Error creating order.', error);
          });
        }
      } else {
        $scope.showFormError = true;
        alert('Please correct the form errors.');
      }
    };

    //Get wine name by search
    $scope.getWineNames = function (query) {
      return $scope.wineList.filter(function (wine) {
        return wine.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    };
  });
