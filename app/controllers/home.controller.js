(function () {

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    function HomeController (
        $scope
    ) {
        $scope.message = 'This is page1';
    }

})();