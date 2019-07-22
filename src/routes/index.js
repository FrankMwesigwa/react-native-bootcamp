import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import Login from '../modules/Login';
import Landing from '../modules/Landing';

const appStack = createBottomTabNavigator({
  Landing
});

const authStack = createStackNavigator(
  {
    Login
  },
  {
    headerMode: 'none'
  }
);

export const rootNavigator = () => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: appStack,
        Auth: authStack
      },
      {
        initialRouteName: 'App'
      }
    )
  );
};
