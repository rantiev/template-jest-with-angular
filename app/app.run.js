(function () {

    angular
        .module('myApp')
        .run((
            $rootScope,
            $state
        ) => {
            $state.defaultErrorHandler((error) => {
                console.log(error);
            });
        });

})();