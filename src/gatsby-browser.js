import React from 'react';

exports.onRouteUpdate = ({ location }, { pages }) => {
  if (window.CHPlugin) {
    if (Array.isArray(pages)) {
      if (pages.indexOf(location) !== -1) {
        window.CHPlugin.show();
      } else {
        window.CHPlugin.hide();
      }
    } else {
      window.CHPlugin.show();
    }
  }
};
