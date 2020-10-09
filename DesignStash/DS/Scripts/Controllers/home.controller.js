(function () {
    'use strict';

    angular.module('HomeApp', []).controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$timeout', '$mdSidenav'];

    function HomeController($scope, $timeout, $mdSidenav) {
        $scope.toggleSideNavLeft = function (componentID) {
            $mdSidenav(componentID).toggle();
        };
    }

})();