var app = angular.module('alert', []);
app.controller('alerte', function($scope ,$window) {
  $scope.message='sa marche';
  $scope.ShowAlert = function (message) {
    $window.alert(message);
  };
});
/*   $scope.ShowAlert = function () {
    $window.alert('sa marche');
*/
