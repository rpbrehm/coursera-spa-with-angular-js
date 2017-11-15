(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function($scope) {
    $scope.calculateIfTooMuch = function() {
      if ($scope.lunchItems == undefined) {
        $scope.message = "Please enter data first";
      }
      else {
        var lunchItemsSplit = $scope.lunchItems.split(',');
        if (lunchItemsSplit.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }
    }
  })
}) ();
