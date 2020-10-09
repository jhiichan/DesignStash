(function () {
    'use strict';

    angular.module('PLApp', ['ngMaterial',
        'ThemeConfig',
        'HomeApp',
        'PatternLibraryApp',
        'SideNavApp',
        'PatternsApp']).config(PLThemeConfig);

    PLThemeConfig.$inject = ['$mdThemingProvider', '$mdIconProvider'];

    angular.module('ThemeConfig', []);
    angular.module('HomeApp', []);
    angular.module('PatternLibraryApp', []);
    angular.module('SideNavApp', []);
    angular.module('AtomsApp', []);

    function PLThemeConfig($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    }

})();