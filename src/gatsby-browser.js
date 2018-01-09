import React from 'react';

exports.onRouteUpdate = ({ location }, { pages }) => {
  if (typeof pages === 'array') {
    if (pages.includes(location)) {
      window.CHPlugin.show();
    } else {
      window.CHPlugin.hide();
    }
  } else {
    window.CHPlugin.show();
  }
};
