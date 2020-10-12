"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API = {
  getUsers: function getUsers() {
    return _axios["default"].get('https://jsonplaceholder.typicode.com/users').then(function (response) {
      return response;
    });
  },
  getPosts: function getPosts() {
    return _axios["default"].get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
      return response;
    });
  },
  getComments: function getComments() {
    return _axios["default"].get('http://jsonplaceholder.typicode.com/posts/1/comments').then(function (response) {
      // console.log(response)
      return response;
    });
  }
};
var _default = API;
exports["default"] = _default;