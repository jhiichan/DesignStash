(function () {
    'use strict';

    angular.module('ThemeConfig', []).config(DesignStashThemeConfig);

    DesignStashThemeConfig.$inject = ['$mdThemingProvider'];

    function DesignStashThemeConfig($mdThemingProvider) {
        $mdThemingProvider.definePalette('DesignStashPrimary', {
            '50': 'FFFFFF',     //Whole Page Background
            '100': 'FFFFFF',
            '200': 'FFFFFF',
            '300': 'FFFFFF',
            '400': 'FFFFFF',
            '500': '707070',    //Button Font
            '600': 'FFFFFF',
            '700': 'FFFFFF',
            '800': 'FFFFFF',
            '900': 'FFFFFF',
            'A100': 'FFFFFF',   //Cards Background
            'A200': 'FFFFFF',   //Nav Bar Selected Font //e5fb00
            'A400': 'FFFFFF',
            'A700': 'FFFFFF',
            'contrastDefaultColor': 'dark',
            'contrastDarkColors': undefined,
            'contrastLightColors': undefined
        });

        $mdThemingProvider.theme('DesignStashTheme')
            .primaryPalette('DesignStashPrimary');

        $mdThemingProvider.setDefaultTheme('DesignStashTheme');
    };

})();