/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
  BackHandler,
  ListView
} from 'react-native';
import { Right, Header, Left, Body } from 'native-base';

import LinearGradient from 'react-native-linear-gradient';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CachedImage } from 'react-native-cached-image';
import { Images } from '../../Themes';
import styles from './styles';

class DestinationsDetails extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          id: 1,
          destinationimg: Images.playa_img,
          destinationname: 'Playal del carmen'
        },
        {
          id: 2,
          destinationimg: Images.guadalajara_img,
          destinationname: 'Guadalajara Nightlife'
        },
        {
          id: 3,
          destinationimg: Images.playa_img,
          destinationname: 'Playal del carmen'
        },
        {
          id: 4,
          destinationimg: Images.guadalajara_img,
          destinationname: 'Guadalajara Nightlife'
        }
      ])
    };
  }

  RenderNavigation = () => {
    this.props.navigation.navigate('Destinations');
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('Destinations');
    return true;
  };

  renderRow(rowData) {
    let that = this;

    return (
      <TouchableOpacity
        style={styles.listMainview}
        onPress={() =>
          this.props.navigation.navigate('PlaceDetails', {
            screenName: 'DestinationsDetails'
          })
        }>
        <CachedImage source={rowData.destinationimg} style={styles.destinationimg}>
          <TouchableOpacity />
        </CachedImage>
        <Text style={styles.destinationnamelist}>{rowData.destinationname}</Text>
        <Text style={styles.mexicotext}>Mexico</Text>
      </TouchableOpacity>
    );
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View>
        <View style={styles.main}>
          <View style={styles.imgContainer}>
            <Image source={Images.mexico} style={styles.imgContainer} />
            <LinearGradient
              locations={[0.1, 1]}
              colors={['transparent', 'black']}
              style={styles.imagoverlay}>
              <Header androidStatusBarColor="transparent" style={styles.header}>
                <Left style={styles.left}>
                  <TouchableOpacity onPress={() => this.RenderNavigation()}>
                    <MaterialIcons name="keyboard-backspace" size={25} color="white" />
                  </TouchableOpacity>
                </Left>

                <Body style={styles.body} />

                <Right style={styles.right}>
                  <Ionicons name="md-search" color="#fff" size={22} />
                </Right>
              </Header>
              <View style={styles.destinationNamemain}>
                <Text style={styles.destinationname}>Wonderful Mexico</Text>
                <Text style={styles.places}>19 Places</Text>
              </View>
            </LinearGradient>
          </View>

          <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow()}
            enableEmptySections
            pageSize={4}
          />
        </View>
      </View>
    );
  }
}

export default DestinationsDetails;
