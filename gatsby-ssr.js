'use strict';

var _templateObject = _taggedTemplateLiteral(['\n          (function() {\n            if (window.CHPlugin) {\n              return window.console && console.error && console.error(\'Channel Plugin script included twice.\');\n            }\n            var ch = { q: [] };\n            [\'initialize\', \'checkIn\', \'checkOut\', \'show\', \'hide\', \'track\', \'timeTrack\', \'on\'].forEach(function(e) {\n              ch[e] = function() {\n                var n = Array.prototype.slice.call(arguments);\n                n.unshift(e);\n                ch.q.push(n);\n              }\n            });\n            window.CHPlugin = ch;\n            var node = document.createElement(\'div\');\n            node.id = \'ch-plugin\';\n            document.body.appendChild(node);\n            var async_load = function() {\n              var s = document.createElement(\'script\');\n              s.type = \'text/javascript\';\n              s.async = true;\n              s.src = \'//cdn.channel.io/plugin/ch-plugin-web.js\';\n              s.charset = \'UTF-8\';\n              var x = document.getElementsByTagName(\'script\')[0];\n              x.parentNode.insertBefore(s, x);\n            };\n            if (window.attachEvent) {\n              window.attachEvent(\'onload\', async_load);\n            } else {\n              window.addEventListener(\'load\', async_load, false);\n            }\n          })();\n\n          window.CHPlugin.initialize(', ');\n\n          window.CHPlugin.checkIn();\n        '], ['\n          (function() {\n            if (window.CHPlugin) {\n              return window.console && console.error && console.error(\'Channel Plugin script included twice.\');\n            }\n            var ch = { q: [] };\n            [\'initialize\', \'checkIn\', \'checkOut\', \'show\', \'hide\', \'track\', \'timeTrack\', \'on\'].forEach(function(e) {\n              ch[e] = function() {\n                var n = Array.prototype.slice.call(arguments);\n                n.unshift(e);\n                ch.q.push(n);\n              }\n            });\n            window.CHPlugin = ch;\n            var node = document.createElement(\'div\');\n            node.id = \'ch-plugin\';\n            document.body.appendChild(node);\n            var async_load = function() {\n              var s = document.createElement(\'script\');\n              s.type = \'text/javascript\';\n              s.async = true;\n              s.src = \'//cdn.channel.io/plugin/ch-plugin-web.js\';\n              s.charset = \'UTF-8\';\n              var x = document.getElementsByTagName(\'script\')[0];\n              x.parentNode.insertBefore(s, x);\n            };\n            if (window.attachEvent) {\n              window.attachEvent(\'onload\', async_load);\n            } else {\n              window.addEventListener(\'load\', async_load, false);\n            }\n          })();\n\n          window.CHPlugin.initialize(', ');\n\n          window.CHPlugin.checkIn();\n        ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _commonTags = require('common-tags');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.onRenderBody = function (_ref, _ref2) {
  var setPostBodyComponents = _ref.setPostBodyComponents;
  var channelPluginSettings = _ref2.channelPluginSettings;

  return setPostBodyComponents([_react2.default.createElement('script', {
    key: 'gatsby-plugin-channel',
    dangerouslySetInnerHTML: {
      __html: (0, _commonTags.stripIndent)(_templateObject, JSON.stringify(channelPluginSettings))
    }
  })]);
};