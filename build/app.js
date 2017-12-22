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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
exports.getVisibleTodos = exports.deleteTodo = exports.toggleTodo = exports.saveTodo = exports.fetchTodos = exports.removeTodo = exports.replaceTodo = exports.addTodo = exports.loadTodos = exports.updateCurrent = exports.TODO_REMOVE = exports.TODOS_LOAD = exports.TODO_REPLACE = exports.TODO_ADD = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _todoServices = __webpack_require__(15);

var _messages = __webpack_require__(4);

var initState = {
    todos: [],
    currentTodo: ''
};

var TODO_ADD = exports.TODO_ADD = 'TODO_ADD';
var TODO_REPLACE = exports.TODO_REPLACE = 'TODO_REPLACE';
var TODOS_LOAD = exports.TODOS_LOAD = 'TODOS_LOAD';
var TODO_REMOVE = exports.TODO_REMOVE = 'TODO_REMOVE';

var CURRENT_UPDATE = 'CURRENT_UPDATE';

var updateCurrent = exports.updateCurrent = function updateCurrent(val) {
    return { type: CURRENT_UPDATE, payload: val };
};
var loadTodos = exports.loadTodos = function loadTodos(todos) {
    return { type: TODOS_LOAD, payload: todos };
};
var addTodo = exports.addTodo = function addTodo(todo) {
    return { type: TODO_ADD, payload: todo };
};
var replaceTodo = exports.replaceTodo = function replaceTodo(todo) {
    return { type: TODO_REPLACE, payload: todo };
};
var removeTodo = exports.removeTodo = function removeTodo(id) {
    return { type: TODO_REMOVE, payload: id };
};

var fetchTodos = exports.fetchTodos = function fetchTodos() {
    return function (dispatch) {
        (0, _todoServices.getTodos)().then(function (todos) {
            return dispatch(loadTodos(todos));
        });
    };
};

var saveTodo = exports.saveTodo = function saveTodo(name) {
    return function (dispatch) {
        dispatch((0, _messages.showMessage)('Saving Todo'));
        (0, _todoServices.createTodo)(name).then(function (res) {
            return dispatch(addTodo(res));
        });
    };
};

var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
    return function (dispatch, getState) {
        dispatch((0, _messages.showMessage)('Saving todo update'));
        var todos = getState().todo.todos;

        var todo = todos.find(function (t) {
            return t.id === id;
        });
        var toggled = _extends({}, todo, { isComplete: !todo.isComplete });

        (0, _todoServices.updateTodo)(toggled).then(function (res) {
            return dispatch(replaceTodo(res));
        });
    };
};

var deleteTodo = exports.deleteTodo = function deleteTodo(id) {
    return function (dispatch) {
        dispatch((0, _messages.showMessage)('Removing todo'));

        (0, _todoServices.destroyTodo)(id).then(function () {
            return dispatch(removeTodo(id));
        });
    };
};

var getVisibleTodos = exports.getVisibleTodos = function getVisibleTodos(todos, filter) {
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

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case TODO_ADD:
            return _extends({}, state, { todos: state.todos.concat(action.payload) });
        case CURRENT_UPDATE:
            return _extends({}, state, { currentTodo: action.payload });
        case TODOS_LOAD:
            return _extends({}, state, { todos: action.payload });
        case TODO_REPLACE:
            return _extends({}, state, {
                todos: state.todos.map(function (t) {
                    return t.id === action.payload.id ? action.payload : t;
                })
            });
        case TODO_REMOVE:
            return _extends({}, state, {
                todos: state.todos.filter(function (t) {
                    return t.id !== action.payload;
                })
            });
        default:
            return state;
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showMessage = undefined;

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var action = arguments[1];

	switch (action.type) {
		case MESSAGE_SHOW:
			return action.payload;
		case _todo.TODO_ADD:
		case _todo.TODOS_LOAD:
		case _todo.TODO_REPLACE:
		case _todo.TODO_REMOVE:
			return '';
		default:
			return state;
	}
};

var _todo = __webpack_require__(3);

var MESSAGE_SHOW = 'MESSAGE_SHOW';

var showMessage = exports.showMessage = function showMessage(msg) {
	return { type: MESSAGE_SHOW, payload: msg };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(267);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(306);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(20);

var _TodoForm = __webpack_require__(13);

var _TodoForm2 = _interopRequireDefault(_TodoForm);

var _TodoList = __webpack_require__(14);

var _TodoList2 = _interopRequireDefault(_TodoList);

var _Message = __webpack_require__(11);

var _Message2 = _interopRequireDefault(_Message);

var _PersonForm = __webpack_require__(12);

var _PersonForm2 = _interopRequireDefault(_PersonForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { 'class': 'Todo-App' },
                _react2.default.createElement(_Message2.default, { message: '' }),
                _react2.default.createElement(_TodoForm2.default, null),
                _react2.default.createElement(
                    _reactRouterDom.MemoryRouter,
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/:filter?',
                            render: function render(_ref) {
                                var match = _ref.match;
                                return _react2.default.createElement(_TodoList2.default, { filter: match.params.filter });
                            }
                        }),
                        _react2.default.createElement(_PersonForm2.default, null)
                    )
                )
            );
        }
    }]);

    return Main;
}(_react.Component);

exports.default = Main;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(18);

var _reduxForm = __webpack_require__(6);

var _reduxDevtoolsExtension = __webpack_require__(21);

var _reduxThunk = __webpack_require__(22);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _todo = __webpack_require__(3);

var _todo2 = _interopRequireDefault(_todo);

var _messages = __webpack_require__(4);

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
	todo: _todo2.default,
	message: _messages2.default,
	form: _reduxForm.reducer
});

exports.default = (0, _redux.createStore)(reducer, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(83);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(2);

var _Main = __webpack_require__(7);

var _Main2 = _interopRequireDefault(_Main);

var _store = __webpack_require__(8);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(_Main2.default, null)
), document.getElementById('@@portletNameCleaned'));

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phoneNumber = exports.minLength2 = exports.minLength = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(6);

var _reactstrap = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var required = function required(value) {
  return value ? undefined : 'Required';
};
var maxLength = function maxLength(max) {
  return function (value) {
    return value && value.length > max ? 'Must be ' + max + ' characters or less' : undefined;
  };
};
var maxLength15 = maxLength(15);
var minLength = exports.minLength = function minLength(min) {
  return function (value) {
    return value && value.length < min ? 'Must be ' + min + ' characters or more' : undefined;
  };
};
var minLength2 = exports.minLength2 = minLength(2);
var number = function number(value) {
  return value && isNaN(Number(value)) ? 'Must be a number' : undefined;
};
var minValue = function minValue(min) {
  return function (value) {
    return value && value < min ? 'Must be at least ' + min : undefined;
  };
};
var minValue18 = minValue(18);
var email = function email(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
};
var tooOld = function tooOld(value) {
  return value && value > 65 ? 'You might be too old for this' : undefined;
};
var aol = function aol(value) {
  return value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined;
};
var alphaNumeric = function alphaNumeric(value) {
  return value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;
};
var phoneNumber = exports.phoneNumber = function phoneNumber(value) {
  return value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined;
};

var renderField = function renderField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      null,
      label
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('input', _extends({}, input, { placeholder: label, type: type })),
      touched && (error && _react2.default.createElement(
        'span',
        null,
        error
      ) || warning && _react2.default.createElement(
        'span',
        null,
        warning
      ))
    )
  );
};

var FieldLevelValidationForm = function FieldLevelValidationForm(props) {
  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting;

  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit },
    _react2.default.createElement(_reduxForm.Field, {
      name: 'username',
      type: 'text',
      component: renderField, componentClass: 'Input',
      label: 'Username',
      validate: [required, maxLength15, minLength2],
      warn: alphaNumeric
    }),
    _react2.default.createElement(_reduxForm.Field, {
      name: 'email',
      type: 'email',
      component: renderField, componentClass: 'Input',
      label: 'Email',
      validate: email,
      warn: aol
    }),
    _react2.default.createElement(_reduxForm.Field, {
      name: 'age',
      type: 'number',
      component: renderField, componentClass: 'Input',
      label: 'Age',
      validate: [required, number, minValue18],
      warn: tooOld
    }),
    _react2.default.createElement(_reduxForm.Field, {
      name: 'phone',
      type: 'number',
      component: renderField, componentClass: 'Input',
      label: 'Phone number',
      validate: [required, phoneNumber]
    }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactstrap.Button,
        { type: 'submit', disabled: submitting },
        'Submit'
      ),
      _react2.default.createElement(
        _reactstrap.Button,
        { type: 'button', disabled: pristine || submitting, onClick: reset },
        'Clear Values'
      )
    )
  );
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _todo = __webpack_require__(3);

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

exports.default = (0, _reactRedux.connect)(function (state) {
    return { currentTodo: state.todo.currentTodo };
}, { updateCurrent: _todo.updateCurrent, saveTodo: _todo.saveTodo })(TodoForm);

/***/ }),
/* 14 */
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

var _todo = __webpack_require__(3);

var _reactstrap = __webpack_require__(5);

var _deleteForever = __webpack_require__(17);

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

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
    return { todos: (0, _todo.getVisibleTodos)(state.todo.todos, ownProps.filter) };
}, { fetchTodos: _todo.fetchTodos, toggleTodo: _todo.toggleTodo, deleteTodo: _todo.deleteTodo })(TodoList);

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(19);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(16);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(17);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(2);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(257);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(268);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(339);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map