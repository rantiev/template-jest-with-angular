require('jest');
require('angular');
require('angular-mocks');

require('../app.js');
require('./helper.service.js');

describe('helper service', function () {
    let _helperService;

    beforeEach(function () {
        angular.mock.module('myApp');

        inject(function (
            helperService
        ){
            _helperService = helperService
        });
    });

    it('should contain checkScheme', function () {
        expect(typeof _helperService.checkScheme === 'function').toBe(true);
    });

    it('checkScheme should compare givenScheme to rightScheme', function () {
        const o1 = {};
        const o2 = o1;

        expect(_helperService.checkScheme(o1, o2)).toBe(true);
    });

    it('checkScheme should fail on compare givenScheme to wrongScheme', function () {
        const o1 = {};
        const o2 = {};

        expect(_helperService.checkScheme(o1, o2)).toBe(false);
    });

    //not helpers function test, but to have an example of jest functin call check
    it('jest.fn() should be called required times with proper properties', function () {
        const f1 = jest.fn().mockImplementation(function (x) {
            return x;
        });

        f1(1);
        f1(2);
        f1(3);
        const res = f1(4);

        expect(f1).toBeCalled();
        expect(f1).toBeCalledWith(3);
        expect(f1).toHaveBeenCalledTimes(4);
        expect(f1).lastCalledWith(4);
        expect(res).toBe(4);
        expect(res).not.toBe(5);
    });

    it('fn1() should be called required times with proper properties', function () {
        const f1 = jest.fn().mockImplementation(_helperService.f1);
        const res = f1(4);

        expect(f1).toBeCalled();
        expect(f1).toBeCalledWith(4);
        expect(f1).toHaveBeenCalledTimes(1);
        expect(f1).lastCalledWith(4);
        expect(res).toBe('called with 4');
    });

});