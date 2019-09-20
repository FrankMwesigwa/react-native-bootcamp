import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import Dashboard from '../screens/Dashboard';
import Wealther from '../screens/Wealther';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const HomeStack = createStackNavigator({
  Dashboard,
  Wealther
});

const SettingsStack = createStackNavigator({
  Settings,
  Profile
});

const AppNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
