(function () {

    angular
        .module('myApp')
        .directive('myHeader', myHeader);

    function myHeader () {
        return {
            scope: {
                text: '=?'
            },
            template: '<div class="header">{{updatedText}}</div>',
            link: function (scope) {

                scope.updatedText = `Header ${scope.text}`;

            }
        }
    }

})();