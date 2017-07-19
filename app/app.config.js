(function () {

    angular
        .module('myApp')
        .config((
            $stateProvider,
            $urlRouterProvider
        ) => {

            $stateProvider
                .state({
                    name: 'home',
                    url: '/home',
                    controller: 'HomeController',
                    template: '<div class="home">{{message}}</div>',
                    resolve: {
                        user: ($q) => {
                            /**
                             * There were some problems with testing async code
                             * when jest was arguing on this issue in not related test
                             * when state is not resolved, this is here for debugging/testing purpose
                             */
                            return $q.reject(new Error('Weird error!'));
                        }
                    }
                })
                .state({
                    name: 'page1',
                    url: '/page1',
                    controller: 'Page1Controller',
                    template: '<div class="page1">{{message}}</div>',
                    resolve: {
                        user: ($q) => {
                            return $q.resolve({
                                name: 'Paca Vaca'
                            });
                        }
                    }
                })
                .state({
                name: 'page2',
                url: '/page2',
                controller: 'Page2Controller',
                template: '<div class="page2">{{message}}</div>',
                resolve: {
                    user: ($q) => {
                        return $q.resolve({
                            name: 'Paca Vaca'
                        });
                    }
                }
            });

            $urlRouterProvider.otherwise('/home');
        });

})();