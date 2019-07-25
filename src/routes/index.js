import { Dimensions } from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

import TravelingSideMenu from '../modules/SideMenu';
import IntroductionScreen from '../modules/IntroductionScreen';
import SignUpSignIn from '../modules/SignUpSignIn';
import Destinations from '../modules/Destinations';
import DestinationsDetails from '../modules/DestinationsDetails';
import YourDetails from '../modules/YourDetails';
import PaymentDetails from '../modules/PaymentDetails';

const DrawerStack = createDrawerNavigator(
  {
    IntroductionScreen,
    SignUpSignIn,
    Destinations,
    DestinationsDetails,
    YourDetails,
    PaymentDetails
  },
  {
    gesturesEnabled: false,
    contentComponent: TravelingSideMenu,
    drawerWidth: Dimensions.get('window').width - 50
  }
);

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack
  },
  {
    headerMode: 'none'
  }
);

export const rootNavigator = () => {
  return createAppContainer(
    createSwitchNavigator({
      Drawer: DrawerNavigation
    })
  );
};
