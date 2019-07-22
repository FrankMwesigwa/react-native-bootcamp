/* eslint-disable react/prop-types */
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

import Login from '../modules/Login';

import News from '../modules/News';
import NewsDetails from '../modules/News/newsDetail';

import Users from '../modules/Users';
import AddUser from '../modules/Users/addUser';

const headerConfig = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#001338'
    },
    headerTintColor: '#fff',
    headerTitle: 'Jupa App'
  }
};

const newsStack = createStackNavigator(
  {
    News,
    NewsDetails
  },
  headerConfig
);

const userStack = createStackNavigator(
  {
    Users,
    AddUser
  },
  headerConfig
);

const AppStack = createBottomTabNavigator(
  {
    News: newsStack,
    Users: userStack
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      showLabel: false,
      activeBackgroundColor: '#00194b',
      inactiveBackgroundColor: '#001338',
      style: {
        backgroundColor: '#001338'
      }
    },
    initialRouteName: 'News',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'News') {
          iconName = 'home';
        } else if (routeName === 'Users') {
          iconName = 'user';
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

const AuthStack = createStackNavigator(
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
        App: AppStack,
        Auth: AuthStack
      },
      {
        initialRouteName: 'App'
      }
    )
  );
};
