require('jest');

const _ = require('lodash');

require('angular');
require('angular-ui-router');
require('angular-mocks');
require('modules/subApp.module.js');
require('app.js');
require('app.config.js');
require('app.run.js');
require('app.bootstrap.js');
require('constants/mockData.constant.js');
require('services/helper.service.js');

require('controllers/main.controller.js');
require('controllers/additional.controller.js');
require('controllers/home.controller.js');
require('controllers/page1.controller.js');
require('controllers/page2.controller.js');

require('components/myHeader/myHeader.directive.js');
require('components/myFooter/myFooter.component.js');

Object.defineProperty(window, '_', {
    value: _,
});

/*
const mock = () => {
    let storage = {};
    return {
        getItem: key => key in storage ? storage[key] : null,
        setItem: (key, value) => storage[key] = value || '',
        removeItem: key => delete storage[key],
        clear: () => storage = {},
    };
};

Object.defineProperty(window, 'localStorage', {value: mock()});
Object.defineProperty(window, 'sessionStorage', {value: mock()});
Object.defineProperty(window, 'getComputedStyle', {
    value: () => ['-webkit-appearance']
});*/
