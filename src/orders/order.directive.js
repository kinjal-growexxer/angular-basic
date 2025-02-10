angular.module('orderApp.orders')
  .directive('customDateValidator', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        ngModel.$validators.invalidDate = function (modelValue, viewValue) {
          const inputDate = moment(viewValue, 'DD-MM-YYYY');
          const today = moment().startOf('day');

          // Check if the input date is in the past or a weekend
          const isWeekend = inputDate.day() === 0 || inputDate.day() === 6; // 0 = Sunday, 6 = Saturday
          const isPastDate = inputDate.isBefore(today);

          return !isPastDate && !isWeekend;
        };
      }
    };
  });
