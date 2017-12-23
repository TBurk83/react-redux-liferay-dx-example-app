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

module.exports = (__webpack_require__(0))(1);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* ACTION TYPE CONSTANTS*/

var SHOW = 'app/todo/SHOW';

exports.SHOW = SHOW;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoTypes = exports.todoActions = exports.todoOperations = undefined;

var _reducers = __webpack_require__(22);

var _reducers2 = _interopRequireDefault(_reducers);

var _operations = __webpack_require__(21);

var todoOperations = _interopRequireWildcard(_operations);

var _actions = __webpack_require__(10);

var todoActions = _interopRequireWildcard(_actions);

var _types = __webpack_require__(5);

var todoTypes = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.todoOperations = todoOperations;
exports.todoActions = todoActions;
exports.todoTypes = todoTypes;
exports.default = _reducers2.default;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReducer = __webpack_require__(26);

Object.defineProperty(exports, "createReducer", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createReducer).default;
  }
});

var _fetch = __webpack_require__(27);

Object.defineProperty(exports, "fetch", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fetch).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(257);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showMessage = undefined;

var _types = __webpack_require__(3);

var m = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var showMessage = function showMessage(msg) {
	return { type: m.SHOW, payload: msg };
};

exports.showMessage = showMessage;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showMessage = undefined;

var _actions = __webpack_require__(8);

var messageActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var showMessage = messageActions.showMessage;

exports.showMessage = showMessage;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeTodo = exports.replaceTodo = exports.addTodo = exports.loadTodos = exports.updateCurrent = undefined;

var _types = __webpack_require__(5);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = __webpack_require__(28);

Object.defineProperty(exports, "Message", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_message).default;
  }
});

var _todoForm = __webpack_require__(29);

Object.defineProperty(exports, "TodoForm", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_todoForm).default;
  }
});

var _todoList = __webpack_require__(30);

Object.defineProperty(exports, "TodoList", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_todoList).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(35);

var _reduxThunk = __webpack_require__(40);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _ducks = __webpack_require__(17);

var reducers = _interopRequireWildcard(_ducks);

var _middleware = __webpack_require__(24);

var _reduxDevtoolsExtension = __webpack_require__(38);

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _routes = __webpack_require__(16);

var _routes2 = _interopRequireDefault(_routes);

var _components = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "header",
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/" },
                "All"
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/active" },
                "Active"
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/complete" },
                "Complete"
            )
        ),
        _react2.default.createElement(_components.Message, { message: "" }),
        _react2.default.createElement(_components.TodoForm, null),
        _routes2.default.map(function (route) {
            return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: route.path }, route));
        }),
        _react2.default.createElement(
            "footer",
            null,
            "I`m the footer, I am on every page."
        )
    );
};
exports.default = App;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(83);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(7);

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

var _components = __webpack_require__(11);

var routes = [{
    path: "/:status?",
    component: _components.TodoList,
    exact: true
}];

exports.default = routes;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(39);

Object.defineProperty(exports, "formReducer", {
  enumerable: true,
  get: function get() {
    return _reduxForm.reducer;
  }
});

var _todo = __webpack_require__(4);

Object.defineProperty(exports, "todo", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_todo).default;
  }
});

var _message = __webpack_require__(18);

Object.defineProperty(exports, "message", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_message).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.messageTypes = exports.messageActions = exports.messageOperations = undefined;

var _reducers = __webpack_require__(19);

var _reducers2 = _interopRequireDefault(_reducers);

var _operations = __webpack_require__(9);

var messageOperations = _interopRequireWildcard(_operations);

var _actions = __webpack_require__(8);

var messageActions = _interopRequireWildcard(_actions);

var _types = __webpack_require__(3);

var messageTypes = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.messageOperations = messageOperations;
exports.messageActions = messageActions;
exports.messageTypes = messageTypes;
exports.default = _reducers2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = __webpack_require__(3);

var m = _interopRequireWildcard(_types);

var _util = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var messageReducer = (0, _util.createReducer)('')(_defineProperty({}, m.SHOW, function (state, action) {
    return action.payload;
}));

exports.default = messageReducer;

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateCurrent = exports.getVisibleTodos = exports.deleteTodo = exports.toggleTodo = exports.saveTodo = exports.fetchTodos = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* OPERATIONS = REDUX THUNKS
                                                                                                                                                                                                                                                                  This file defines the public interface of the todo -- what can be dispatched from components
                                                                                                                                                                                                                                                                  */


var _api = __webpack_require__(20);

var _operations = __webpack_require__(9);

var messageOperations = _interopRequireWildcard(_operations);

var _actions = __webpack_require__(10);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createReducer;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(5);

var t = _interopRequireWildcard(_types);

var _util = __webpack_require__(6);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(6);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apiService = __webpack_require__(23);

Object.defineProperty(exports, "apiService", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_apiService).default;
  }
});

var _logger = __webpack_require__(25);

Object.defineProperty(exports, "createLogger", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_logger).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isomorphicFetch = __webpack_require__(31);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
    var message = _ref.message;
    return message ? _react2.default.createElement(
        'span',
        { className: 'message' },
        message
    ) : null;
};

exports.default = (0, _reactRedux.connect)(function (state) {
    return { message: state.message };
})(Message);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _todo = __webpack_require__(4);

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
                'form',
                { onSubmit: this.handleSubmit },
                _react2.default.createElement('input', { type: 'text',
                    value: currentTodo,
                    onChange: this.handleInputChange
                })
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
/* 30 */
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

var _todo = __webpack_require__(4);

var _reactstrap = __webpack_require__(37);

var _deleteForever = __webpack_require__(33);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(34);
module.exports = self.fetch.bind(self);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(36);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(32);

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
/* 34 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(17);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(2);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(267);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(268);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(306);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(339);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map