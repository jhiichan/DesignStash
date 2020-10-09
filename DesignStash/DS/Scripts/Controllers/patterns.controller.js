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