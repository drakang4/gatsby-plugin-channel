import React from 'react';

exports.onRouteUpdate = ({ location }, { pages }) => {
  if (window.CHPlugin && Array.isArray(pages)) {
    const button = document.getElementById('ch-plugin');
    if (pages.indexOf(location.pathname) === -1) {
      button.style.display = 'none';
    } else {
      button.style.display = 'block';
    }
  }
};
