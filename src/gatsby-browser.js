import React from 'react';

exports.onRouteUpdate = ({ location }, { pages }) => {
  if (Array.isArray(pages)) {
    if (pages.includes(location)) {
      window.CHPlugin.show();
    } else {
      window.CHPlugin.hide();
    }
  } else {
    window.CHPlugin.show();
  }
};
