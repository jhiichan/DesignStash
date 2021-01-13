(function () {
    'use strict';

    angular.module('ThemeConfig', []).config(DesignStashThemeConfig);

    DesignStashThemeConfig.$inject = ['$mdThemingProvider'];

    function DesignStashThemeConfig($mdThemingProvider) {
        $mdThemingProvider.definePalette('DesignStashPrimary', {
            '50': 'f9f9f9',
            '100': 'f3f3f3',
            '200': 'ebebeb',
            '300': 'dcdcdc',
            '400': 'b8b8b8',
            '500': '999999',
            '600': '707070',
            '700': '5c5c5c',
            '800': '3e3e3e',
            '900': '1d1d1d',
            'A100': 'FFFFFF',
            'A200': 'FFFFFF',
            'A400': 'FFFFFF',
            'A700': 'FFFFFF'
            //'contrastDefaultColor': 'dark',
            //'contrastDarkColors': undefined,
            //'contrastLightColors': undefined
        });

        $mdThemingProvider.theme('DesignStashTheme')
            .primaryPalette('DesignStashPrimary');

        $mdThemingProvider.setDefaultTheme('DesignStashTheme');
    };

})();