require("angular");
require("angular-mocks");

require('../app.js');
require("../services/helper.service.js");

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
        expect(typeof _helperService.checkScheme === 'function').toEqual(true);
    });

    it('checkScheme should compare givenScheme to rightScheme', function () {
        const o1 = {};
        const o2 = o1;

        expect(_helperService.checkScheme(o1, o2)).toEqual(true);
    });

    it('checkScheme should fail on compare givenScheme to wrongScheme', function () {
        const o1 = {};
        const o2 = {};

        expect(_helperService.checkScheme(o1, o2)).toEqual(false);
    });

});