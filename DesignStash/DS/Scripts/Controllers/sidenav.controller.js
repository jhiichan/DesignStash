(function () {
    'use strict';

    angular.module('SideNavApp', [])
        .controller('SideNavController', SideNavController);

    SideNavController.$inject = ['$scope', '$timeout', '$mdSidenav', 'Pattern'];

    function SideNavController($scope, $timeout, $mdSidenav, Pattern) {
        var thisCtrl = this;
        thisCtrl.atoms = [];
        thisCtrl.molecules = [];
        thisCtrl.organisms = [];
        thisCtrl.templates = [];

        thisCtrl.init = function (project) {
            Pattern.GetPatternData(project, 'atoms').then(function (data) {
                thisCtrl.atoms = data.data;
            });
            Pattern.GetPatternData(project, 'molecules').then(function (data) {
                thisCtrl.molecules = data.data;
            });
            Pattern.GetPatternData(project, 'organisms').then(function (data) {
                thisCtrl.organisms = data.data;
            });
            Pattern.GetPatternData(project, 'templates').then(function (data) {
                thisCtrl.templates = data.data;
            });
        }
    }
})();