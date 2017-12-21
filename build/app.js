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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

module.exports = (__webpack_require__(0))(46);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getVisibleTodos = exports.deleteTodo = exports.toggleTodo = exports.saveTodo = exports.fetchTodos = exports.removeTodo = exports.replaceTodo = exports.addTodo = exports.loadTodos = exports.updateCurrent = exports.TODO_REMOVE = exports.TODOS_LOAD = exports.TODO_REPLACE = exports.TODO_ADD = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _todoServices = __webpack_require__(18);

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

module.exports = (__webpack_require__(0))(1630);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1693);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(216);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _TodoForm = __webpack_require__(15);

var _TodoForm2 = _interopRequireDefault(_TodoForm);

var _TodoList = __webpack_require__(16);

var _TodoList2 = _interopRequireDefault(_TodoList);

var _Message = __webpack_require__(13);

var _Message2 = _interopRequireDefault(_Message);

var _Footer = __webpack_require__(12);

var _Footer2 = _interopRequireDefault(_Footer);

var _PersonForm = __webpack_require__(14);

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
                        _react2.default.createElement(_Footer2.default, null),
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(30);

var _reduxForm = __webpack_require__(6);

var _reduxDevtoolsExtension = __webpack_require__(24);

var _reduxThunk = __webpack_require__(25);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(22);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(2);

var _Main = __webpack_require__(8);

var _Main2 = _interopRequireDefault(_Main);

var _store = __webpack_require__(9);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(_Main2.default, null)
), document.getElementById('@@portletNameCleaned'));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _BottomNavigation = __webpack_require__(23);

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _Restore = __webpack_require__(21);

var _Restore2 = _interopRequireDefault(_Restore);

var _Favorite = __webpack_require__(32);

var _Favorite2 = _interopRequireDefault(_Favorite);

var _LocationOn = __webpack_require__(20);

var _LocationOn2 = _interopRequireDefault(_LocationOn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
	_inherits(Footer, _Component);

	function Footer() {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	}

	_createClass(Footer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_BottomNavigation2.default,
				{
					showLabels: true },
				_react2.default.createElement(_BottomNavigation.BottomNavigationButton, {
					label: 'All',
					icon: _react2.default.createElement(_Restore2.default, null),
					component: _reactRouterDom.Link, to: '/' }),
				_react2.default.createElement(_BottomNavigation.BottomNavigationButton, {
					label: 'Active',
					icon: _react2.default.createElement(_Favorite2.default, null),
					component: _reactRouterDom.Link, to: '/active' }),
				_react2.default.createElement(_BottomNavigation.BottomNavigationButton, {
					label: 'Completed',
					icon: _react2.default.createElement(_LocationOn2.default, null),
					component: _reactRouterDom.Link, to: '/completed' })
			);
		}
	}]);

	return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(6);

var _TextField = __webpack_require__(29);

var _TextField2 = _interopRequireDefault(_TextField);

var _Radio = __webpack_require__(28);

var _Radio2 = _interopRequireDefault(_Radio);

var _Checkbox = __webpack_require__(7);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Select = __webpack_require__(22);

var _Select2 = _interopRequireDefault(_Select);

var _Menu = __webpack_require__(27);

var _Menu2 = _interopRequireDefault(_Menu);

var _asyncValidate = __webpack_require__(17);

var _asyncValidate2 = _interopRequireDefault(_asyncValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var validate = function validate(values) {
  var errors = {};
  var requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes'];
  requiredFields.forEach(function (field) {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

var renderTextField = function renderTextField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = _objectWithoutProperties(_ref, ['input', 'label', 'meta']);

  return _react2.default.createElement(_TextField2.default, _extends({
    hintText: label,
    floatingLabelText: label,
    errorText: touched && error
  }, input, custom));
};

var renderCheckbox = function renderCheckbox(_ref2) {
  var input = _ref2.input,
      label = _ref2.label;
  return _react2.default.createElement(_Checkbox2.default, {
    label: label,
    checked: input.value ? true : false,
    onCheck: input.onChange
  });
};

var renderRadioGroup = function renderRadioGroup(_ref3) {
  var input = _ref3.input,
      rest = _objectWithoutProperties(_ref3, ['input']);

  return _react2.default.createElement(_Radio.RadioGroup, _extends({}, input, rest, {
    valueSelected: input.value,
    onChange: function onChange(event, value) {
      return input.onChange(value);
    }
  }));
};

var renderSelectField = function renderSelectField(_ref4) {
  var input = _ref4.input,
      label = _ref4.label,
      _ref4$meta = _ref4.meta,
      touched = _ref4$meta.touched,
      error = _ref4$meta.error,
      children = _ref4.children,
      custom = _objectWithoutProperties(_ref4, ['input', 'label', 'meta', 'children']);

  return _react2.default.createElement(_Select2.default, _extends({
    floatingLabelText: label,
    errorText: touched && error
  }, input, {
    onChange: function onChange(event, index, value) {
      return input.onChange(value);
    },
    children: children
  }, custom));
};

var MaterialUiForm = function MaterialUiForm(props) {
  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting;

  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reduxForm.Field, {
        name: 'firstName',
        component: renderTextField,
        label: 'First Name'
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reduxForm.Field, { name: 'lastName', component: renderTextField, label: 'Last Name' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reduxForm.Field, { name: 'email', component: renderTextField, label: 'Email' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reduxForm.Field,
        { name: 'sex', component: renderRadioGroup },
        _react2.default.createElement(_Radio2.default, { value: 'male', label: 'male' }),
        _react2.default.createElement(_Radio2.default, { value: 'female', label: 'female' })
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reduxForm.Field,
        {
          name: 'favoriteColor',
          component: renderSelectField,
          label: 'Favorite Color'
        },
        _react2.default.createElement(_Menu.MenuItem, { value: 'ff0000', primaryText: 'Red' }),
        _react2.default.createElement(_Menu.MenuItem, { value: '00ff00', primaryText: 'Green' }),
        _react2.default.createElement(_Menu.MenuItem, { value: '0000ff', primaryText: 'Blue' })
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reduxForm.Field, { name: 'employed', component: renderCheckbox, label: 'Employed' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reduxForm.Field, {
        name: 'notes',
        component: renderTextField,
        label: 'Notes',
        multiLine: true,
        rows: 2
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'button',
        { type: 'submit', disabled: pristine || submitting },
        'Submit'
      ),
      _react2.default.createElement(
        'button',
        { type: 'button', disabled: pristine || submitting, onClick: reset },
        'Clear Values'
      )
    )
  );
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate: validate,
  asyncValidate: _asyncValidate2.default
})(MaterialUiForm);

/***/ }),
/* 15 */
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
/* 16 */
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

var _compose = __webpack_require__(19);

var _compose2 = _interopRequireDefault(_compose);

var _todo = __webpack_require__(3);

var _List = __webpack_require__(26);

var _List2 = _interopRequireDefault(_List);

var _Checkbox = __webpack_require__(7);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(33);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _DeleteForever = __webpack_require__(31);

var _DeleteForever2 = _interopRequireDefault(_DeleteForever);

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
        _List.ListItem,
        { dense: true, button: true },
        _react2.default.createElement(_Checkbox2.default, {
            name: name,
            id: name.replace(/ /g, '').toLowerCase(),
            checked: isComplete,
            onChange: function onChange() {
                return toggleTodo(id);
            }
        }),
        _react2.default.createElement(_List.ListItemText, { primary: name }),
        _react2.default.createElement(
            _List.ListItemSecondaryAction,
            null,
            _react2.default.createElement(
                _IconButton2.default,
                { onClick: function onClick() {
                        return deleteTodo(id);
                    } },
                _react2.default.createElement(_DeleteForever2.default, null)
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
                _List2.default,
                { className: 'todoList' },
                this.props.todos.map(function (todo) {
                    return _react2.default.createElement(TodoItem, _extends({ key: todo.id,
                        toggleTodo: _this2.props.toggleTodo,
                        deleteTodo: _this2.props.deleteTodo
                    }, todo));
                })
            );
        }
    }]);

    return TodoList;
}(_react.Component);

exports.default = (0, _compose2.default)((0, _reactRedux.connect)(function (state, ownProps) {
    return { todos: (0, _todo.getVisibleTodos)(state.todo.todos, ownProps.filter) };
}, { fetchTodos: _todo.fetchTodos, toggleTodo: _todo.toggleTodo, deleteTodo: _todo.deleteTodo }))(TodoList);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

var asyncValidate = function asyncValidate(values /*, dispatch */) {
  return sleep(1000).then(function () {
    // simulate server latency
    if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
      // eslint-disable-next-line no-throw-literal
      throw { email: 'Email already Exists' };
    }
  });
};

exports.default = asyncValidate;

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = compose;
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1013);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1208);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(140);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1467);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1648);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1726);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(224);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(227);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(229);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(235);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(69);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(726);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(795);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(94);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map