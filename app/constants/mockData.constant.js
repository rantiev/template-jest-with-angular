(function () {

    angular
        .module('myApp')
        .constant('mockData', {
            books: [
                {
                    author: 'Baba Jaba 1',
                    title: 'Baba Jaba 1 story.'
                },
                {
                    author: 'Baba Jaba 2',
                    title: 'Baba Jaba 2 story.'
                }
            ]
        });

})();