(function () {

    angular
        .module('myApp')
        .controller('MainController', main);

    function main (
        $scope
    ) {
        $scope.title = 'Page title!';
        $scope.sum = sum;
    }

    /**
     * Returens sum
     *
     * @param a
     * @param b
     * @returns {*}
     */
    function sum (a, b) {
        return a + b;
    }

})();