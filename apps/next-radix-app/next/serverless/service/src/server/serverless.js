/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './src/server sync recursive':
      /*!**************************!*\
  !*** ./src/server/ sync ***!
  \**************************/
      /***/ module => {
        eval(
          'function webpackEmptyContext(req) {\n\tvar e = new Error("Cannot find module \'" + req + "\'");\n\te.code = \'MODULE_NOT_FOUND\';\n\tthrow e;\n}\nwebpackEmptyContext.keys = () => ([]);\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = "./src/server sync recursive";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack://next-radix-app/./src/server/_sync?',
        );

        /***/
      },

    /***/ './src/app/index.ts':
      /*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    "default": mod\n  };\n};\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\n\nvar express_1 = __importDefault(__webpack_require__(/*! express */ "express"));\n\nvar path_1 = __webpack_require__(/*! path */ "path");\n\nvar app = (0, express_1["default"])();\napp.set(\'trust proxy\', true);\napp.use(\'/_next\', express_1["default"]["static"]((0, path_1.resolve)(__dirname, \'..\', \'..\', \'.next\')));\nexports["default"] = app;\n\n//# sourceURL=webpack://next-radix-app/./src/app/index.ts?',
        );

        /***/
      },

    /***/ './src/routes/index.ts':
      /*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nvar routes = [{\n  path: \'/\',\n  page: \'/index\'\n}];\nexports["default"] = routes;\n\n//# sourceURL=webpack://next-radix-app/./src/routes/index.ts?',
        );

        /***/
      },

    /***/ './src/server/serverless.ts':
      /*!**********************************!*\
  !*** ./src/server/serverless.ts ***!
  \**********************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.handler = void 0;\n\nvar aws_serverless_express_1 = __importDefault(__webpack_require__(/*! aws-serverless-express */ \"aws-serverless-express\"));\n\nvar path_1 = __webpack_require__(/*! path */ \"path\");\n\nvar app_1 = __importDefault(__webpack_require__(/*! ../app */ \"./src/app/index.ts\"));\n\nvar routes_1 = __importDefault(__webpack_require__(/*! ../routes */ \"./src/routes/index.ts\"));\n\nvar binaryMimeTypes = ['application/javascript', 'application/json', 'application/octet-stream', 'application/xml', 'font/eot', 'font/opentype', 'font/otf', 'image/jpeg', 'image/png', 'image/svg+xml', 'text/comma-separated-values', 'text/css', 'text/html', 'text/javascript', 'text/plain', 'text/text', 'text/xml'];\n\nvar handler = function handler(event, context) {\n  routes_1[\"default\"].forEach(function (route) {\n    app_1[\"default\"].get(route.path, function (req, res) {\n      return __webpack_require__(\"./src/server sync recursive\")((0, path_1.resolve)(__dirname, '..', '..', '.next', 'serverless', \"pages\".concat(route.page, \".js\"))).render(req, res);\n    });\n    return aws_serverless_express_1[\"default\"].proxy(aws_serverless_express_1[\"default\"].createServer(app_1[\"default\"], null, binaryMimeTypes), event, context);\n  });\n};\n\nexports.handler = handler;\n\n//# sourceURL=webpack://next-radix-app/./src/server/serverless.ts?",
        );

        /***/
      },

    /***/ 'aws-serverless-express':
      /*!*****************************************!*\
  !*** external "aws-serverless-express" ***!
  \*****************************************/
      /***/ module => {
        'use strict';
        module.exports = require('aws-serverless-express');

        /***/
      },

    /***/ express:
      /*!**************************!*\
  !*** external "express" ***!
  \**************************/
      /***/ module => {
        'use strict';
        module.exports = require('express');

        /***/
      },

    /***/ path:
      /*!***********************!*\
  !*** external "path" ***!
  \***********************/
      /***/ module => {
        'use strict';
        module.exports = require('path');

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__(
    './src/server/serverless.ts',
  );
  /******/ var __webpack_export_target__ = exports;
  /******/ for (var i in __webpack_exports__)
    __webpack_export_target__[i] = __webpack_exports__[i];
  /******/ if (__webpack_exports__.__esModule)
    Object.defineProperty(__webpack_export_target__, '__esModule', {
      value: true,
    });
  /******/
  /******/
})();
