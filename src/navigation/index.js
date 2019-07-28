import { Dimensions } from 'react-native';
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

import IntroScreen from '../modules/WelcomeScreen';
import LoginScreen from '../modules/SignUpSignIn';
import Candidates from '../modules/Candidates';
import SideMenu from '../modules/SideMenu';
import Review from '../modules/Review';
import PlaceDetails from '../modules/PlaceDetails';
import CandidateDetails from '../modules/CandidateDetails';
import PaymentDetails from '../modules/PaymentDetails';
import PayWithCreditCard from '../modules/PayWithCreditCard';

const MainDrawer = createDrawerNavigator(
  {
    Candidates,
    Review,
    PlaceDetails,
    CandidateDetails,
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
