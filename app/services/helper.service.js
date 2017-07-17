(function () {

    angular
        .module('myApp')
        .service('helperService', helperService);

    function helperService (
        $q,
        $http,
        $timeout
    ) {

        return {
            checkScheme,
            f1,
            f2,
            getPromise,
            get$qPromise,
            getBooks,
            useLodash
        };

        function checkScheme (schemeGiven, schemeRight) {
            return schemeGiven === schemeRight;
        }

        function f1 (x) {
            f2(1);
            f2(2);
            f2(3);
            return f2(x);
        }

        function f2 (x) {
            return 'called with ' + x;
        }

        function getPromise () {
            const p = new Promise(function (res, rej) {

                $timeout(() => {
                    res('resolved');
                }, 1000);

            });

            return p;
        }

        function get$qPromise () {
            const p = $q.defer();

            $timeout(() => {
                p.resolve('resolved');
            }, 1000);

            return p.promise;
        }

        function getBooks () {
            return $http({
                method: 'GET',
                url: '/books'
            }).then(res => {
                return res.data.map(item => `${item.author} - ${item.title}`);
            });
        }

        function useLodash () {
            return _.keys({
                a:1,
                b:2,
                c:3
            });
        }

    }

})();