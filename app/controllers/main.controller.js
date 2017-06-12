(function () {

    angular
        .module('myApp')
        .controller('MainController', MainController);

    function MainController (
        $scope
    ) {
        $scope.title = 'Page title!';
        $scope.sum = sum;
        $scope.sayHi = sayHi;
        $scope.hi = sayHi();

        $scope.headerText = 'here';
        $scope.footerText = 'here as well';
    }

    /**
     * Returens sum
     *
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    function sum (a, b) {
        return a + b;
    }

    /**
     * Returns Hi! string
     *
     * @returns {string}
     */
    function sayHi () {
        return 'Hi!';
    }

})();