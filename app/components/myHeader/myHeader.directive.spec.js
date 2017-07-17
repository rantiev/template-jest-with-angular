describe('myHeader', function() {
    let $compile;
    let $rootScope;
    let scope;
    let element;

    beforeEach(function () {
        angular.mock.module('myApp');

        inject(function(_$compile_, _$rootScope_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });

        scope = $rootScope.$new();
        scope.testText = 'some string';

        element  = $compile('<my-header text="testText"></my-header>')(scope);

        scope.$digest();
    });

    it('should contain right message', function() {
        expect(element.text()).toEqual('Header some string');
    });
});