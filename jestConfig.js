/**
 * Everything works without jestConfig as well
 * so we can remove it from package.json jest config
 *
 * if you need to do something before run tests add following to your package.json:
 *
 * "jest": {
 *   "verbose": true,
 *   "setupTestFrameworkScriptFile": "<rootDir>/jestConfig.js",
 *   "moduleDirectories": ["node_modules", "app"]
 * }
 *
 * And save this file as jestConfig.js in your root folder, see example of what you can do there
 * below:
 */

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
