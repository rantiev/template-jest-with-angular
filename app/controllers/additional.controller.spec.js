describe('AdditionalController', function() {
    let $controller;
    let $scope;
    let controller;

    beforeEach(function () {
        angular.mock.module('myApp');

        inject(function(_$controller_){
            $controller = _$controller_;
        });

        $scope = {};
        controller = $controller('AdditionalController', { $scope: $scope });
    });

    describe('check $scope', function() {
        xit('should equal', function() {
            expect($scope.additionalMessage).toEqual('additional message');
        });
    });
});