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