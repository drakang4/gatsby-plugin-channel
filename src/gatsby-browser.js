import React from 'react';
import pathToRegexp from 'path-to-regexp';

exports.onRouteUpdate = ({ location }, { pages }) => {
  if (window.CHPlugin && Array.isArray(pages)) {
    const button = document.getElementById('ch-plugin');
    
    if (button) {
      const pathsRegex = pages.map(page => pathToRegexp(page));
      const isMatch = pathsRegex.some(regex => regex.test(location.pathname));

      if (isMatch) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }
  }
};
