(function () {

    angular
        .module('myApp')
        .controller('MainController', MainController);

    function MainController (
        $scope,
        helperService
    ) {
        $scope.title = 'Page title!';
        $scope.sum = sum;
        $scope.sayHi = sayHi;
        $scope.hi = sayHi();

        $scope.headerText = 'here';
        $scope.footerText = 'here as well';

         helperService.get$qPromise().then(res => {
             $scope.promise = res;
         });
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