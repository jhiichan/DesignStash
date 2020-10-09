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
(function () {
    'use strict';
    angular.module('PLApp').service('Pattern', Pattern);

    Pattern.$inject = ['$http'];

    function Pattern($http) {

        var origin = window.location.origin;

        return {
            GetPatternSrc: GetPatternSrc,
            GetPatternData: GetPatternData
        }

        function GetPatternSrc(project, level, group, name) {
            var src = origin + '/Patterns/' + project + '/' + level + '/' + group + '/' + name + '.html';
            return src;
        }

        function GetPatternData(project, level) {
            return $http.get(origin + '/Patterns/' + project + '/' + level + '/data.json');
        }
    }
})();
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
(function () {
    'use strict';

    angular.module('PatternsApp', []).controller('PatternsController', PatternsController);

    PatternsController.$inject = ['$scope', 'Pattern'];

    function PatternsController($scope, Pattern) {
        var thisCtrl = this;
        var level = 'none';
        var project = '';

        $scope.textDummy = 'Lorem Ipsum';
        $scope.arrayDummy = [];
        
        thisCtrl.patterns = null;

        thisCtrl.init = function (projectName, patternLevel) {
            level = patternLevel;
            project = projectName;
            Pattern.GetPatternData(project, level).then(function (data) {
                thisCtrl.patterns = data.data;
            });
        };

        thisCtrl.toggleShowCode = function (groupIndex, componentIndex) {
            thisCtrl.patterns[groupIndex].components[componentIndex].showCode = !thisCtrl.patterns[groupIndex].components[componentIndex].showCode;
        };

        thisCtrl.getPatternSrc = function (group, name) {
            return Pattern.GetPatternSrc(project, level, group, name);
        };

        thisCtrl.getCode = function (group, name) {
            var code = '';

            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", Pattern.GetPatternSrc(project, level, group, name), false);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status === 0) {
                        var allText = rawFile.responseText;
                        code = allText;
                    }
                }
            };
            rawFile.send(null);

            return code;
        };
    }
})();
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