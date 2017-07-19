(function () {

    angular
        .module('myApp')
        .controller('Page2Controller', Page2Controller);

    function Page2Controller (
        $scope
    ) {
        $scope.message = 'This is page2';
    }

})();