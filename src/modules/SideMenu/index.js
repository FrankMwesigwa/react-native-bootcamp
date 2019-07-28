/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Platform, StatusBar, View, Text, Image, TouchableOpacity } from 'react-native';
import { Content } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style';
import { Images } from '../../Themes';

const MenuItems = [
  {
    id: 1,
    name: 'Candidates'
  },
  {
    id: 2,
    name: 'Assessor'
  },
  {
    id: 3,
    name: 'Assessments'
  },
  {
    id: 4,
    name: 'Institutions'
  },
  {
    id: 5,
    name: 'Reviews'
  },
  {
    id: 6,
    name: 'Profile'
  },
  {
    id: 7,
    name: 'Setting'
  }
];

class SideMenu extends Component {
  state = {};

  menuItemClickHandle(index) {
    if (index === 0) {
      this.props.navigation.navigate('Candidates');
    } else if (index === 1) {
      this.props.navigation.navigate('CandidateDetails', {
        screenName: 'Candidates'
      });
    } else if (index === 2) {
      this.props.navigation.navigate('TripGuides');
    } else if (index === 3) {
      this.props.navigation.navigate('Discover');
    } else if (index === 4) {
      this.props.navigation.navigate('Review', { screenName: 'Candidates' });
    } else if (index === 5) {
      this.props.navigation.navigate('GuideProfile', {
        screenName: 'Candidates'
      });
    }
    this.props.navigation.closeDrawer();
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#e91e63', true);
      StatusBar.setTranslucent(true);
    }

    return (
      <View style={styles.mainView}>
        <View style={styles.headerView}>
          <TouchableOpacity>
            <Image source={Images.ic_background_ptwentyseven} style={styles.imageProfile} />
          </TouchableOpacity>
          <View style={{ paddingLeft: 10 }}>
            <Text style={[styles.nameText, { paddingBottom: 10 }]}>Frank Mwesigwa</Text>
            <Text style={styles.nameText}>frank.mwesigwa1@gmail.com</Text>
          </View>
        </View>

        <View style={styles.locationView}>
          <Entypo name="location-pin" size={25} color="#BDBDBD" />
          <Text style={styles.locationText}>
            Technical Institute:
            <Text style={{ color: '#e91e63' }}> Makerere Unveristy</Text>
          </Text>
        </View>

        <View style={styles.menuView}>
          <Content>
            {MenuItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => this.menuItemClickHandle(index)}>
                  <Text style={styles.menuName}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </Content>
        </View>
      </View>
    );
  }
}

export default SideMenu;
