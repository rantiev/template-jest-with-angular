(function () {

    angular
        .module('myApp')
        .controller('Page1Controller', Page1Controller);

    function Page1Controller (
        $scope
    ) {
        $scope.message = 'This is page1';
    }

})();