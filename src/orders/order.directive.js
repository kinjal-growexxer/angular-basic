angular.module('orderApp.orders')
  .directive('customDateValidator', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (ngModel) {
        ngModel.$validators.invalidDate = function (viewValue) {
          const inputDate = moment(viewValue, 'DD-MM-YYYY');
          const today = moment().startOf('day');

          const isWeekend = inputDate.day() === 0 || inputDate.day() === 6; // 0 = Sunday, 6 = Saturday
          const isPastDate = inputDate.isBefore(today);

          return !isPastDate && !isWeekend;
        };
      }
    };
  });
