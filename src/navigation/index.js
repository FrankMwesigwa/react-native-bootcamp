import { Dimensions } from 'react-native';
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

import IntroScreen from '../modules/IntroductionScreen';
import LoginScreen from '../modules/SignUpSignIn';
import Destinations from '../modules/Destinations';
import SideMenu from '../modules/SideMenu';
import Review from '../modules/Review';
import PlaceDetails from '../modules/PlaceDetails';
import YourDetails from '../modules/YourDetails';
import PaymentDetails from '../modules/PaymentDetails';
import PayWithCreditCard from '../modules/PayWithCreditCard';

const MainDrawer = createDrawerNavigator(
  {
    Destinations,
    Review,
    PlaceDetails,
    YourDetails,
    PaymentDetails,
    PayWithCreditCard
  },
  {
    gesturesEnabled: false,
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 50
  }
);

const DrawerNavigation = createStackNavigator({
  MainDrawer
});

const MainNavigation = createSwitchNavigator({
  Intro: {
    screen: IntroScreen
  },
  Auth: {
    screen: LoginScreen
  },
  App: {
    screen: DrawerNavigation
  }
});

export default createAppContainer(MainNavigation);
