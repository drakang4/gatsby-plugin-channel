'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRouteUpdate = function (_ref, _ref2) {
  var location = _ref.location;
  var pages = _ref2.pages;

  if (window.CHPlugin && Array.isArray(pages)) {
    var button = document.getElementById('ch-plugin');

    if (button) {
      var pathsRegex = pages.map(function (page) {
        return (0, _pathToRegexp2.default)(page);
      });
      var isMatch = pathsRegex.some(function (regex) {
        return regex.test(location.pathname);
      });

      if (isMatch) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }
  }
};