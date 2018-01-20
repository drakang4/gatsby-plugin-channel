import React from 'react';

exports.onRouteUpdate = ({ location }, { pages }) => {
  if (window.CHPlugin && Array.isArray(pages)) {
    if (pages.indexOf(location.pathname) === -1) {
      window.CHPlugin.checkOut();
    } else {
      window.CHPlugin.checkIn();
    }
  }
};
