(function () {
    'use strict';

    angular.module('PatternLibraryApp', [])
        .controller('PatternLibraryController', PatternLibraryController)
        .directive('initBind', function ($compile) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    attr.$observe('ngBindHtml', function () {
                        if (attr.ngBindHtml) {
                            $compile(element[0].children)(scope);
                        }
                    });
                }
            };
        });

    PatternLibraryController.$inject = ['$scope', '$timeout', '$mdSidenav'];
    
    function PatternLibraryController($scope, $timeout, $mdSidenav) {
        $scope.toggleSideNavLeft = function (componentID) {
            $mdSidenav(componentID).toggle();
        };
    }
})();