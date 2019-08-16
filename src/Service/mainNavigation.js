import { Dimensions } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import PublicIntro from '../Screen/Member/Intro';
import MemberSignUp from '../Screen/Member/SignUp';
import MemberSignIn from '../Screen/Member/SignIn';
import MemberHome from '../Screen/Member/Home';
import MemberProperties from '../Screen/Member/Properties';
import MemberPropertyAdd from '../Screen/Member/PropertyAdd';
import MemberPropertyAddLocation from '../Screen/Member/PropertyAdd/Location';
import MemberPropertyAddAmenities from '../Screen/Member/PropertyAdd/Amenities';
import MemberPropertyAddPhotos from '../Screen/Member/PropertyAdd/Photos';
import MemberPropertyAddPublished from '../Screen/Member/PropertyAdd/Published';
import MemberProfile from '../Screen/Member/Profile';
import MemberSettings from '../Screen/Member/Settings';
import MemberFavorites from '../Screen/Member/Favorites';
import MemberMessages from '../Screen/Member/Messages';
import DrawerContent from '../Component/Menu/Left';

const deviceWidth = Dimensions.get('window').width;

const Drawer = createDrawerNavigator(
  {
    MemberHome: {
      screen: MemberHome
    }
  },
  {
    conttetntComponent: DrawerContent,
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    headerMode: 'none',
    initialRouteName: 'MemberHome',
    drawerWidth: deviceWidth - 50
  }
);

const AppNav = createStackNavigator(
  {
    PublicIntro: {
      screen: PublicIntro
    },
    MemberSignUp: {
      screen: MemberSignUp
    },
    MemberSignIn: {
      screen: MemberSignIn
    },
    MemberMessages: {
      screen: MemberMessages
    },
    MemberProperties: {
      screen: MemberProperties
    },
    MemberPropertyAdd: {
      screen: MemberPropertyAdd
    },
    MemberPropertyAddLocation: {
      screen: MemberPropertyAddLocation
    },
    MemberPropertyAddAmenities: {
      screen: MemberPropertyAddAmenities
    },
    MemberPropertyAddPhotos: {
      screen: MemberPropertyAddPhotos
    },
    MemberPropertyAddPublished: {
      screen: MemberPropertyAddPublished
    },
    MemberProfile: {
      screen: MemberProfile
    },
    MemberSettings: {
      screen: MemberSettings
    },
    MemberFavorites: {
      screen: MemberFavorites
    },

    Drawer: {
      screen: Drawer
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'PublicIntro'
  }
);

export default createAppContainer(AppNav);
