(function () {

    angular
        .module('myApp')
        .service('helperService', helperService);

    function helperService () {

        return {
            checkScheme,
            f1
        };

        /**
         * Checks that given scheme is appropriate
         *
         * @param schemeGiven
         * @param schemeRight
         * @returns {boolean}
         */
        function checkScheme (schemeGiven, schemeRight) {
            return schemeGiven === schemeRight;
        }

        function f1 (x) {
            f2(1);
            f2(2);
            f2(3);
            return f2(x);
        }

        function f2 (x) {
            return 'called with ' + x;
        }

    }

})();