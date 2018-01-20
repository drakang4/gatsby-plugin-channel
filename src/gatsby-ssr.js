import React from 'react';
import { stripIndent } from 'common-tags';

exports.onRenderBody = ({ setPostBodyComponents }, { channelPluginSettings }) => {
  return setPostBodyComponents([
    <script
      key={`gatsby-plugin-channel`}
      dangerouslySetInnerHTML={{
        __html: stripIndent`
          (function() {
            if (window.CHPlugin) {
              return window.console && console.error && console.error('Channel Plugin script included twice.');
            }
            var ch = { q: [] };
            ['initialize', 'checkIn', 'checkOut', 'show', 'hide', 'track', 'timeTrack', 'on'].forEach(function(e) {
              ch[e] = function() {
                var n = Array.prototype.slice.call(arguments);
                n.unshift(e);
                ch.q.push(n);
              }
            });
            window.CHPlugin = ch;
            var node = document.createElement('div');
            node.id = 'ch-plugin';
            document.body.appendChild(node);
            var async_load = function() {
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = '//cdn.channel.io/plugin/ch-plugin-web.js';
              s.charset = 'UTF-8';
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
            };
            if (window.attachEvent) {
              window.attachEvent('onload', async_load);
            } else {
              window.addEventListener('load', async_load, false);
            }
          })();

          window.CHPlugin.initialize(${JSON.stringify(
            channelPluginSettings
          )});
        `
      }}
    />
  ]);
};