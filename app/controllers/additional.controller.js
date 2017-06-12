(function () {

    angular
        .module('myApp')
        .controller('AdditionalController', AdditionalController);

    function AdditionalController (
        $scope
    ) {
        $scope.additionalMessage = 123;
    }

})();