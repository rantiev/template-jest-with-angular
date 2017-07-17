describe('MainController', function() {
    let $controller;
    let $scope;
    let controller;

    beforeEach(function () {
        angular.mock.module('myApp');

        inject(function(_$controller_){
            $controller = _$controller_;
        });

        $scope = {};
        controller = $controller('MainController', { $scope: $scope });
    });

    describe('check $scope', function() {
        it('should contain title', function() {
            expect($scope.title).toBeDefined();
        });

        it('should contain sum', function() {
            expect($scope.sum).toBeDefined();
        });

        it('sum 1 + 10 = 11', function() {
            expect($scope.sum(1, 10)).toEqual(11);
        });
    });
});
