(function () {
    'use strict';

    angular.module('ThemeConfig', []).config(DesignStashThemeConfig);

    DesignStashThemeConfig.$inject = ['$mdThemingProvider', '$mdIconProvider'];

    function DesignStashThemeConfig($mdThemingProvider, $mdIconProvider) {
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
            'contrastDarkColors': undefined,//['50', '100', '200', '300', '400', 'A100'],
            'contrastLightColors': undefined
        });

        $mdThemingProvider.definePalette('DesignStashAccent', {
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
            'contrastDarkColors': undefined,//['50', '100', '200', '300', '400', 'A100'],
            'contrastLightColors': undefined
        });

        $mdThemingProvider.definePalette('DesignStashWarn', {
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
            'contrastDarkColors': undefined,//['50', '100', '200', '300', '400', 'A100'],
            'contrastLightColors': undefined
        });

        $mdThemingProvider.definePalette('DesignStashBackground', {
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
            'contrastDarkColors': undefined,//['50', '100', '200', '300', '400', 'A100'],
            'contrastLightColors': undefined
        });

        $mdThemingProvider.theme('DesignStashTheme')
            .primaryPalette('DesignStashPrimary')
            .accentPalette('DesignStashAccent')
            .warnPalette('DesignStashWarn')
            .backgroundPalette('DesignStashBackground');

        $mdThemingProvider.setDefaultTheme('DesignStashTheme');
    }

})();