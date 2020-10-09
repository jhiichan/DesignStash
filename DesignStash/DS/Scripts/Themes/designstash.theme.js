(function () {
    'use strict';

    angular.module('ThemeConfig', []).config(DesignStashThemeConfig);

    DesignStashThemeConfig.$inject = ['$mdThemingProvider', '$mdIconProvider'];

    function DesignStashThemeConfig($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('orange')
            .accentPalette('orange')
            .warnPalette('orange');
    }

})();