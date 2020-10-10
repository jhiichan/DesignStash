(function () {
    'use strict';

    angular.module('HomeApp', []).controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$timeout', '$mdSidenav', 'Pattern'];

    function HomeController($scope, $timeout, $mdSidenav, Pattern) {
        var thisCtrl = this;

        thisCtrl.themes = null;

        //$scope.toggleSideNavLeft = function (componentID) {
        //    $mdSidenav(componentID).toggle();
        //};

        thisCtrl.init = function () {
            Pattern.GetThemes().then(function (data) {
                thisCtrl.themes = data.data;
            });
        };
    }

})();