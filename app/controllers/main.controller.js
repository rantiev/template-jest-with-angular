(function () {

    angular
        .module('myApp')
        .controller('MainController', MainController);

    function MainController (
        $scope
    ) {
        $scope.title = 'Page title!';
        $scope.sum = sum;

        $scope.headerText = 'here';
        $scope.footerText = 'here as well';
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