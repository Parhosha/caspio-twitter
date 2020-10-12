"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeThemAC = exports.getComments = exports.getPost = exports.getUser = exports.selectUserAC = exports.updStatusPostAC = exports.createPostAC = exports.setNewUserAC = exports.changeThem = exports.setComments = exports.setPost = exports.updStatusPost = exports.createPost = exports.selectUser = exports.setNewUser = exports.setState = exports["default"] = void 0;

var _api = _interopRequireDefault(require("../api/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD = 'ADD';
var SELECT = 'SELECT';
var ADDNEWUSER = 'ADDNEWUSER';
var ADDPOST = 'ADDPOST';
var UPDMSG = 'UPDMSG';
var ADDPOSTS = 'ADDPOSTS';
var ADDCOMMENTS = 'ADDCOMMENTS';
var THEM = 'THEM';
var init = {
  them: true,
  registered: 0,
  loginned: '',
  clients: [],
  posts: [],
  selectedUser: null,
  user: null,
  comments: null,
  userMsg: []
};

var ClientsReducer = function ClientsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD:
      return _objectSpread({}, state, {
        clients: action.data
      });

    case ADDPOSTS:
      return _objectSpread({}, state, {
        posts: action.posts
      });

    case SELECT:
      return _objectSpread({}, state, {
        selectedUser: action.data
      });

    case ADDNEWUSER:
      return _objectSpread({}, state, {
        user: action.user
      });

    case ADDPOST:
      return _objectSpread({}, state, {
        userMsg: [].concat(_toConsumableArray(state.userMsg), [action.post])
      });

    case UPDMSG:
      return _objectSpread({}, state, {
        userMsg: action.post
      });

    case ADDCOMMENTS:
      return _objectSpread({}, state, {
        comments: action.comments
      });

    case THEM:
      console.log(state.them);
      return _objectSpread({}, state, {
        them: !state.them
      });

    default:
      return state;
  }
};

var _default = ClientsReducer;
exports["default"] = _default;

var setState = function setState(data) {
  return {
    type: ADD,
    data: data
  };
};

exports.setState = setState;

var setNewUser = function setNewUser(user) {
  return {
    type: ADDNEWUSER,
    user: user
  };
};

exports.setNewUser = setNewUser;

var selectUser = function selectUser(data) {
  return {
    type: SELECT,
    data: data
  };
};

exports.selectUser = selectUser;

var createPost = function createPost(post) {
  return {
    type: ADDPOST,
    post: post
  };
};

exports.createPost = createPost;

var updStatusPost = function updStatusPost(post) {
  return {
    type: UPDMSG,
    post: post
  };
};

exports.updStatusPost = updStatusPost;

var setPost = function setPost(posts) {
  return {
    type: ADDPOSTS,
    posts: posts
  };
};

exports.setPost = setPost;

var setComments = function setComments(comments) {
  return {
    type: ADDCOMMENTS,
    comments: comments
  };
};

exports.setComments = setComments;

var changeThem = function changeThem() {
  return {
    type: THEM
  };
};

exports.changeThem = changeThem;

var setNewUserAC = function setNewUserAC(newUser) {
  return function _callee(dispatch) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(setNewUser(newUser));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.setNewUserAC = setNewUserAC;

var createPostAC = function createPostAC(post) {
  console.log(post);
  return function _callee2(dispatch) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch(createPost(post));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.createPostAC = createPostAC;

var updStatusPostAC = function updStatusPostAC(post) {
  console.log(post);
  return function _callee3(dispatch) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch(updStatusPost(post));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.updStatusPostAC = updStatusPostAC;

var selectUserAC = function selectUserAC(users, clients) {
  return function _callee4(dispatch) {
    var item;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            item = clients.find(function (item) {
              return item.id == users;
            });
            dispatch(selectUser(item));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    });
  };
};

exports.selectUserAC = selectUserAC;

var getUser = function getUser() {
  return function _callee5(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(_api["default"].getUsers());

          case 2:
            response = _context5.sent;
            dispatch(setState(response.data)); //dispatch(setState(response));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  };
};

exports.getUser = getUser;

var getPost = function getPost() {
  return function _callee6(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(_api["default"].getPosts());

          case 2:
            response = _context6.sent;
            dispatch(setPost(response.data));

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    });
  };
};

exports.getPost = getPost;

var getComments = function getComments() {
  return function _callee7(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return regeneratorRuntime.awrap(_api["default"].getComments());

          case 2:
            response = _context7.sent;
            dispatch(setComments(response.data));

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    });
  };
};

exports.getComments = getComments;

var changeThemAC = function changeThemAC() {
  return function _callee8(dispatch) {
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            dispatch(changeThem());

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    });
  };
};

exports.changeThemAC = changeThemAC;