import React, { Component } from 'react';
import NavigationService from './src/Service/Navigation';
import AppNavigation from './src/Service/mainNavigation';

export default class App extends Component {
  render() {
    return (
      <AppNavigation
        ref={r => {
          NavigationService.setTopLevelNavigator(r);
        }}
      />
    );
  }
}
