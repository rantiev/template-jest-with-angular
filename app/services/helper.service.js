(function () {

    angular
        .module('myApp')
        .service('helperService', helperService);

    function helperService () {

        return {
            checkScheme
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

    }

})();