import React from 'react';

exports.onRouteUpdate = ({ location }, { pages }) => {
  if (window.CHPlugin) {
    if (Array.isArray(pages) && pages.indexOf(location) === -1) {
      window.CHPlugin.checkOut();
    }
  }
};
