'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRouteUpdate = function (_ref, _ref2) {
  var location = _ref.location;
  var pages = _ref2.pages;

  if (window.CHPlugin) {
    if (Array.isArray(pages) && pages.indexOf(location) === -1) {
      window.CHPlugin.checkOut();
    }
  }
};