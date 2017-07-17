describe('helper service', function () {
    let $httpBackend;
    let $rootScope;
    let $timeout;
    let helperService;
    let mockData;

    beforeEach(function () {
        angular.mock.module('myApp');

        inject(function (
            _$httpBackend_,
            _$rootScope_,
            _$timeout_,
            _helperService_,
            _mockData_
        ){
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;
            $timeout = _$timeout_;
            helperService = _helperService_;
            mockData = _mockData_;

            $httpBackend
                .when('GET', '/books')
                .respond(mockData.books);

        });
    });

    it('should contain checkScheme', function () {
        expect(typeof helperService.checkScheme === 'function').toBe(true);
    });

    it('checkScheme should compare givenScheme to rightScheme', function () {
        const o1 = {};
        const o2 = o1;

        expect(helperService.checkScheme(o1, o2)).toBe(true);
    });

    it('checkScheme should fail on compare givenScheme to wrongScheme', function () {
        const o1 = {};
        const o2 = {};

        expect(helperService.checkScheme(o1, o2)).toBe(false);
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

    xit('DOESN\'T WORK: fn1() should be called required times with proper properties', function () {
        const spy = jest.spyOn(helperService, 'f1');
        const spy2 = jest.spyOn(helperService, 'f2');
        const res = helperService.f1(4);
        /*
         helperService.f2(4);
         helperService.f2(4);
         helperService.f2(4);
         helperService.f2(4);
        */

        expect(spy).toBeCalled();
        expect(spy).toBeCalledWith(4);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).lastCalledWith(4);

        expect(spy2).toHaveBeenCalledTimes(4);

        expect(res).toBe('called with 4');
    });

    it('test fn that returns native promise', () => {
        expect.assertions(1);

        const p = expect(helperService.getPromise()).resolves.toEqual('resolved');

        $timeout.flush();

        return p;
    });

    it('test fn that returns $q promise', () => {
        expect.assertions(1);

        const p = new Promise((resolve, reject) => {
            helperService.get$qPromise()
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });

            $timeout.flush();
            $rootScope.$digest();
        });

        return p.then((res) => {
            expect(res).toEqual('resolved')
        });

    });

    it('should return athor - title books list length of 2', () => {
        let x;

        helperService
            .getBooks()
            .then((res) => {
                x = res;
            });

        $httpBackend.flush();

        expect(x.length).toBe(2);
        expect(x[0]).toBe(`${mockData.books[0].author} - ${mockData.books[0].title}`);

    });

/*    it('test async fn using async test', async () => {
        expect.assertions(1);
        await expect(_helperService.getPromise()).resolves.toEqual('resolved');
    });*/

    it('lodash should be connected properly', () => {
        expect(helperService.useLodash().join()).toBe('a,b,c');
    });

});