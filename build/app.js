/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = react_runtime;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(272);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(262);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* ACTION TYPE CONSTANTS*/

var SHOW = 'app/todo/SHOW';

exports.SHOW = SHOW;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoTypes = exports.todoActions = exports.todoOperations = undefined;

var _reducers = __webpack_require__(21);

var _reducers2 = _interopRequireDefault(_reducers);

var _operations = __webpack_require__(20);

var todoOperations = _interopRequireWildcard(_operations);

var _actions = __webpack_require__(11);

var todoActions = _interopRequireWildcard(_actions);

var _types = __webpack_require__(7);

var todoTypes = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.todoOperations = todoOperations;
exports.todoActions = todoActions;
exports.todoTypes = todoTypes;
exports.default = _reducers2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* ACTION TYPE CONSTANTS*/

var ADD = 'app/todo/ADD';
var REPLACE = 'app/todo/REPLACE';
var LOAD = 'app/todo/LOAD';
var REMOVE = 'app/todo/REMOVE';
var UPDATE = 'app/todo/UPDATE';

exports.ADD = ADD;
exports.REPLACE = REPLACE;
exports.LOAD = LOAD;
exports.REMOVE = REMOVE;
exports.UPDATE = UPDATE;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReducer = __webpack_require__(25);

Object.defineProperty(exports, "createReducer", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createReducer).default;
  }
});

var _fetch = __webpack_require__(26);

Object.defineProperty(exports, "fetch", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fetch).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showMessage = undefined;

var _types = __webpack_require__(5);

var m = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var showMessage = function showMessage(msg) {
	return { type: m.SHOW, payload: msg };
};

exports.showMessage = showMessage;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showMessage = undefined;

var _actions = __webpack_require__(9);

var messageActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var showMessage = messageActions.showMessage;

exports.showMessage = showMessage;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeTodo = exports.replaceTodo = exports.addTodo = exports.loadTodos = exports.updateCurrent = undefined;

var _types = __webpack_require__(7);

var t = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var updateCurrent = function updateCurrent(val) {
    return { type: t.UPDATE, payload: val };
}; /* ACTION CREATOR FUNCTIONS
   Put here the functions that return an action object that can be dispatched
   HINT: Always use functions for consistency, don't export plain objects
   */

var loadTodos = function loadTodos(todos) {
    return { type: t.LOAD, payload: todos };
};
var addTodo = function addTodo(todo) {
    return { type: t.ADD, payload: todo };
};
var replaceTodo = function replaceTodo(todo) {
    return { type: t.REPLACE, payload: todo };
};
var removeTodo = function removeTodo(id) {
    return { type: t.REMOVE, payload: id };
};

exports.updateCurrent = updateCurrent;
exports.loadTodos = loadTodos;
exports.addTodo = addTodo;
exports.replaceTodo = replaceTodo;
exports.removeTodo = removeTodo;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(37);

var _reduxThunk = __webpack_require__(41);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _ducks = __webpack_require__(16);

var reducers = _interopRequireWildcard(_ducks);

var _middleware = __webpack_require__(23);

var _reduxDevtoolsExtension = __webpack_require__(39);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
    var rootReducer = (0, _redux.combineReducers)(reducers);

    return (0, _redux.createStore)(rootReducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_middleware.apiService, _reduxThunk2.default, (0, _middleware.createLogger)(true))));
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _css = __webpack_require__(33);

var _css2 = _interopRequireDefault(_css);

var _components = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'bootstrap/dist/css/bootstrap.css'; 
var App = function App() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_components.Header, null),
        _react2.default.createElement(_components.Message, { message: "" }),
        _react2.default.createElement(_components.TodoForm, null),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/:filter?",
            render: function render(_ref) {
                var match = _ref.match;
                return _react2.default.createElement(_components.TodoList, { filter: match.params.filter });
            }
        }),
        _react2.default.createElement(
            "footer",
            null,
            "Footer"
        ),
        _react2.default.createElement(_css2.default, null)
    );
};
exports.default = App;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(84);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _app = __webpack_require__(13);

var _app2 = _interopRequireDefault(_app);

var _store = __webpack_require__(12);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduxStore = (0, _store2.default)(window.REDUX_INITIAL_DATA);

var RootHtml = function RootHtml() {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: reduxStore },
        _react2.default.createElement(
            _reactRouterDom.MemoryRouter,
            null,
            _react2.default.createElement(_app2.default, null)
        )
    );
};

(0, _reactDom.render)(_react2.default.createElement(RootHtml, null), document.getElementById("@@portletNameCleaned"));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(40);

Object.defineProperty(exports, "formReducer", {
  enumerable: true,
  get: function get() {
    return _reduxForm.reducer;
  }
});

var _todo = __webpack_require__(6);

Object.defineProperty(exports, "todo", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_todo).default;
  }
});

var _message = __webpack_require__(17);

Object.defineProperty(exports, "message", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_message).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.messageTypes = exports.messageActions = exports.messageOperations = undefined;

var _reducers = __webpack_require__(18);

var _reducers2 = _interopRequireDefault(_reducers);

var _operations = __webpack_require__(10);

var messageOperations = _interopRequireWildcard(_operations);

var _actions = __webpack_require__(9);

var messageActions = _interopRequireWildcard(_actions);

var _types = __webpack_require__(5);

var messageTypes = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.messageOperations = messageOperations;
exports.messageActions = messageActions;
exports.messageTypes = messageTypes;
exports.default = _reducers2.default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = __webpack_require__(5);

var m = _interopRequireWildcard(_types);

var _util = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var messageReducer = (0, _util.createReducer)('')(_defineProperty({}, m.SHOW, function (state, action) {
    return action.payload;
}));

exports.default = messageReducer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var baseUrl = 'http://localhost:1337/todos';

var getTodos = exports.getTodos = function getTodos() {
    return fetch(baseUrl).then(function (res) {
        return res.json();
    });
};

var createTodo = exports.createTodo = function createTodo(name) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, isComplete: false })
    }).then(function (res) {
        return res.json();
    });
};

var updateTodo = exports.updateTodo = function updateTodo(todo) {
    return fetch(baseUrl + '/' + todo.id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }).then(function (res) {
        return res.json();
    });
};

var destroyTodo = exports.destroyTodo = function destroyTodo(id) {
    return fetch(baseUrl + '/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateCurrent = exports.getVisibleTodos = exports.deleteTodo = exports.toggleTodo = exports.saveTodo = exports.fetchTodos = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* OPERATIONS = REDUX THUNKS
                                                                                                                                                                                                                                                                  This file defines the public interface of the todo -- what can be dispatched from components
                                                                                                                                                                                                                                                                  */


var _api = __webpack_require__(19);

var _operations = __webpack_require__(10);

var messageOperations = _interopRequireWildcard(_operations);

var _actions = __webpack_require__(11);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fetchTodos = function fetchTodos() {
    return function (dispatch) {
        (0, _api.getTodos)().then(function (todos) {
            return dispatch(actions.loadTodos(todos));
        });
    };
};

var saveTodo = function saveTodo(name) {
    return function (dispatch) {
        dispatch(messageOperations.showMessage('Saving Todo'));
        (0, _api.createTodo)(name).then(function (res) {
            return dispatch(actions.addTodo(res));
        });
    };
};

var toggleTodo = function toggleTodo(id) {
    return function (dispatch, getState) {
        dispatch(messageOperations.showMessage('Saving todo update'));
        var todos = getState().todo.todos;

        var todo = todos.find(function (t) {
            return t.id === id;
        });
        var toggled = _extends({}, todo, { isComplete: !todo.isComplete });

        (0, _api.updateTodo)(toggled).then(function (res) {
            return dispatch(actions.replaceTodo(res));
        });
    };
};

var deleteTodo = function deleteTodo(id) {
    return function (dispatch) {
        dispatch(messageOperations.showMessage('Removing todo'));

        (0, _api.destroyTodo)(id).then(function () {
            return dispatch(actions.removeTodo(id));
        });
    };
};

var getVisibleTodos = function getVisibleTodos(todos, filter) {
    switch (filter) {
        case 'active':
            return todos.filter(function (t) {
                return !t.isComplete;
            });
        case 'completed':
            return todos.filter(function (t) {
                return t.isComplete;
            });
        default:
            return todos;
    }
};

var updateCurrent = actions.updateCurrent;

exports.fetchTodos = fetchTodos;
exports.saveTodo = saveTodo;
exports.toggleTodo = toggleTodo;
exports.deleteTodo = deleteTodo;
exports.getVisibleTodos = getVisibleTodos;
exports.updateCurrent = updateCurrent;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createReducer;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(7);

var t = _interopRequireWildcard(_types);

var _util = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = {
    todos: [],
    currentTodo: ''
};

var todoReducer = (0, _util.createReducer)(initState)((_createReducer = {}, _defineProperty(_createReducer, t.ADD, function (state, action) {
    return _extends({}, state, { todos: state.todos.concat(action.payload) });
}), _defineProperty(_createReducer, t.UPDATE, function (state, action) {
    return _extends({}, state, { currentTodo: action.payload });
}), _defineProperty(_createReducer, t.LOAD, function (state, action) {
    return _extends({}, state, { todos: action.payload });
}), _defineProperty(_createReducer, t.REPLACE, function (state, action) {
    return _extends({}, state, {
        todos: state.todos.map(function (t) {
            return t.id === action.payload.id ? action.payload : t;
        })
    });
}), _defineProperty(_createReducer, t.REMOVE, function (state, action) {
    return _extends({}, state, {
        todos: state.todos.filter(function (t) {
            return t.id !== action.payload;
        })
    });
}), _createReducer));

exports.default = todoReducer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(8);

var baseUrl = typeof document === "undefined" ? "http://localhost:7777/api" : "/api";

var apiService = function apiService() {
    return function (next) {
        return function (action) {
            var result = next(action);
            if (!action.meta || !action.meta.async) {
                return result;
            }

            var _action$meta = action.meta,
                path = _action$meta.path,
                _action$meta$method = _action$meta.method,
                method = _action$meta$method === undefined ? "GET" : _action$meta$method,
                body = _action$meta.body;


            if (!path) {
                throw new Error("'path' not specified for async action " + action.type);
            }

            var url = "" + baseUrl + path;

            return (0, _util.fetch)(url, method, body).then(function (res) {
                return handleResponse(res, action, next);
            }, function (err) {
                return handleErrors(err, action, next);
            });
        };
    };
};

exports.default = apiService;


function handleErrors(err, action, next) {
    next({
        type: action.type + "_FAILED",
        payload: err,
        meta: action.meta
    });

    return Promise.reject(err);
}

function handleResponse(res, action, next) {
    next({
        type: action.type + "_COMPLETED",
        payload: res,
        meta: action.meta
    });

    return res;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apiService = __webpack_require__(22);

Object.defineProperty(exports, "apiService", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_apiService).default;
  }
});

var _logger = __webpack_require__(24);

Object.defineProperty(exports, "createLogger", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_logger).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var REGULAR = ["background: blue", "color: white"].join(";");

var SUCCESS = ["background: green", "color: white"].join(";");

var STARTED = ["background: darkorange", "color: white"].join(";");

var FAILURE = ["background: red", "color: white"].join(";");

var createLogger = function createLogger() {
    var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return function (store) {
        return function (next) {
            return function (action) {
                if (!active) {
                    return next(action);
                }

                var prevState = store.getState();
                var result = next(action);
                var nextState = store.getState();
                logGroupCollapsed("%c " + action.type + " ", determineStyle(action));
                logInfo("%cprev state", "color: darkorange", prevState);
                logInfo("%caction payload", "color: blue", action.payload);
                logInfo("%cnext state", "color: darkgreen", nextState);
                logGroupEnd();
                return result;
            };
        };
    };
};

exports.default = createLogger;


function logGroupCollapsed() {
    var logFunction = typeof console.groupCollapsed === "function" ? console.groupCollapsed : console.info;
    logFunction.apply(undefined, arguments);
}

function logGroupEnd() {
    var logFunction = typeof console.groupEnd === "function" ? console.groupEnd : console.info;
    logFunction.apply(undefined, arguments);
}

function logInfo() {
    var _console;

    (_console = console).info.apply(_console, arguments);
}

function determineStyle(action) {
    if (!action.meta || !action.meta.async) {
        return REGULAR;
    }

    if (action.type.indexOf("_COMPLETED") > -1) {
        return SUCCESS;
    }

    if (action.type.indexOf("_FAILED") > -1) {
        return FAILURE;
    }

    return STARTED;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (initialState) {
    return function (reducerMap) {
        return function () {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
            var action = arguments[1];

            var reducer = reducerMap[action.type];
            return reducer ? reducer(state, action) : state;
        };
    };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isomorphicFetch = __webpack_require__(36);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (url, method, body) {
    var options = {
        method: method,
        headers: requestHeaders(),
        body: method !== "GET" ? JSON.stringify(body) : null
    };

    return (0, _isomorphicFetch2.default)(url, options).then(function (res) {
        return parseStatus(res.status, res.json());
    });
};

function parseStatus(status, res) {
    return new Promise(function (resolve, reject) {
        if (status >= 200 && status < 300) {
            res.then(function (response) {
                return resolve(response);
            });
        } else {
            res.then(function (response) {
                return reject({ status: status, response: response });
            });
        }
    });
}

function requestHeaders() {
    return {
        Accept: "application/json",
        "Content-Type": "application/json"
    };
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterLink = function FilterLink(_ref) {
			var filter = _ref.filter,
			    children = _ref.children;
			return _react2.default.createElement(
						_reactRouterDom.NavLink,
						{
									to: filter === 'all' ? '/' : '/' + filter,
									activeStyle: {
												textDecoration: 'none',
												color: 'black'
									}
						},
						children
			);
};

exports.default = FilterLink;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(3);

var _FilterLink = __webpack_require__(27);

var _FilterLink2 = _interopRequireDefault(_FilterLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
    return _react2.default.createElement(
        _reactstrap.Nav,
        { pills: true },
        _react2.default.createElement(
            _reactstrap.NavItem,
            null,
            _react2.default.createElement(
                _FilterLink2.default,
                { filter: 'all' },
                'All'
            )
        ),
        _react2.default.createElement(
            _reactstrap.NavItem,
            null,
            _react2.default.createElement(
                _FilterLink2.default,
                { filter: 'active' },
                'Active'
            )
        ),
        _react2.default.createElement(
            _reactstrap.NavItem,
            null,
            _react2.default.createElement(
                _FilterLink2.default,
                { filter: 'completed' },
                'Completed'
            )
        )
    );
};

exports.default = Header;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = __webpack_require__(30);

Object.defineProperty(exports, "Message", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_message).default;
  }
});

var _todoForm = __webpack_require__(31);

Object.defineProperty(exports, "TodoForm", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_todoForm).default;
  }
});

var _todoList = __webpack_require__(32);

Object.defineProperty(exports, "TodoList", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_todoList).default;
  }
});

var _header = __webpack_require__(28);

Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_header).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactstrap = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
    var message = _ref.message;
    return message ? _react2.default.createElement(
        _reactstrap.Alert,
        { color: 'success' },
        message
    ) : null;
};

exports.default = (0, _reactRedux.connect)(function (state) {
    return { message: state.message };
})(Message);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _todo = __webpack_require__(6);

var _reactstrap = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoForm = function (_Component) {
    _inherits(TodoForm, _Component);

    function TodoForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TodoForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoForm.__proto__ || Object.getPrototypeOf(TodoForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleInputChange = function (evt) {
            var val = evt.target.value;
            _this.props.updateCurrent(val);
        }, _this.handleSubmit = function (evt) {
            evt.preventDefault();
            _this.props.saveTodo(_this.props.currentTodo);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TodoForm, [{
        key: 'render',
        value: function render() {
            var currentTodo = this.props.currentTodo;

            return _react2.default.createElement(
                _reactstrap.Form,
                { onSubmit: this.handleSubmit },
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(_reactstrap.Input, { type: 'text',
                        value: currentTodo,
                        onChange: this.handleInputChange,
                        placeholder: 'Todo'
                    })
                )
            );
        }
    }]);

    return TodoForm;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        currentTodo: state.todo.currentTodo
    };
};

var mapDispatchToProps = {
    updateCurrent: _todo.todoOperations.updateCurrent,
    saveTodo: _todo.todoOperations.saveTodo
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TodoForm);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _todo = __webpack_require__(6);

var _reactstrap = __webpack_require__(3);

var _deleteForever = __webpack_require__(35);

var _deleteForever2 = _interopRequireDefault(_deleteForever);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoItem = function TodoItem(_ref) {
    var id = _ref.id,
        name = _ref.name,
        isComplete = _ref.isComplete,
        toggleTodo = _ref.toggleTodo,
        deleteTodo = _ref.deleteTodo;
    return _react2.default.createElement(
        _reactstrap.ListGroupItem,
        null,
        _react2.default.createElement(
            _reactstrap.ListGroupItemText,
            null,
            _react2.default.createElement('input', { type: 'checkbox',
                name: name,
                id: name.replace(/ /g, '').toLowerCase(),
                checked: isComplete,
                onChange: function onChange() {
                    return toggleTodo(id);
                }
            }),
            name,
            _react2.default.createElement(
                _reactstrap.Button,
                { size: 'sm', className: 'pull-right', onClick: function onClick() {
                        return deleteTodo(id);
                    } },
                _react2.default.createElement(_deleteForever2.default, null)
            )
        )
    );
};

var TodoList = function (_Component) {
    _inherits(TodoList, _Component);

    function TodoList() {
        _classCallCheck(this, TodoList);

        return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
    }

    _createClass(TodoList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchTodos();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'Todo-List' },
                _react2.default.createElement(
                    _reactstrap.ListGroup,
                    null,
                    this.props.todos.map(function (todo) {
                        return _react2.default.createElement(TodoItem, _extends({ key: todo.id,
                            toggleTodo: _this2.props.toggleTodo,
                            deleteTodo: _this2.props.deleteTodo
                        }, todo));
                    })
                )
            );
        }
    }]);

    return TodoList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        todos: _todo.todoOperations.getVisibleTodos(state.todo.todos, ownProps.filter)
    };
};

var mapDispatchToProps = {
    fetchTodos: _todo.todoOperations.fetchTodos,
    toggleTodo: _todo.todoOperations.toggleTodo,
    deleteTodo: _todo.todoOperations.deleteTodo
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TodoList);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral([" \n        .fade.show {\n\t\t    opacity: 1;\n\t\t}\n    "], [" \n        .fade.show {\n\t\t    opacity: 1;\n\t\t}\n    "]);

var _styledComponents = __webpack_require__(42);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable no-unused-expressions */


exports.default = function () {
    (0, _styledComponents.injectGlobal)(_templateObject);

    return null;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(38);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconBase = function IconBase(_ref, _ref2) {
  var children = _ref.children;
  var color = _ref.color;
  var size = _ref.size;
  var style = _ref.style;
  var width = _ref.width;
  var height = _ref.height;

  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var _ref2$reactIconBase = _ref2.reactIconBase;
  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;

  var computedSize = size || reactIconBase.size || '1em';
  return _react2.default.createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};

IconBase.contextTypes = {
  reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
};

exports.default = IconBase;
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(34);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdDeleteForever = function MdDeleteForever(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm25.9 6.6h5.7v3.4h-23.2v-3.4h5.7l1.8-1.6h8.2z m-11.8 13.2l3.6 3.6-3.6 3.5 2.4 2.3 3.5-3.5 3.5 3.5 2.4-2.3-3.6-3.5 3.6-3.6-2.4-2.4-3.5 3.6-3.5-3.6z m-4.1 11.8v-20h20v20c0 1.8-1.6 3.4-3.4 3.4h-13.2c-1.8 0-3.4-1.6-3.4-3.4z' })
        )
    );
};

exports.default = MdDeleteForever;
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(134);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(17);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(2);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(274);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(312);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(345);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(349);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map