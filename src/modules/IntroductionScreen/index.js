/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { View, Text, Platform, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Metrics, Images } from '../../Themes';
import Swiper from 'react-native-swiper';
import styles from './style';

const swiperData = [
  {
    id: 1,
    description: 'Making friends is easy as waving your hand back and forth in easy step.'
  },
  {
    id: 2,
    description: 'Making friends is easy as waving your hand back and forth in easy step..'
  },
  {
    id: 3,
    description: 'Making friends is easy as waving your hand back and forth in easy step...'
  },
  {
    id: 4,
    description: 'Making friends is easy as waving your hand back and forth in easy step....'
  }
];

class IntroductionScreen extends Component {
  state = {};

  render() {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#e91e63', true);
      StatusBar.setTranslucent(true);
    }

    return (
      <View style={styles.main}>
        <View
          style={{
            width: Metrics.WIDTH,
            height: Metrics.HEIGHT * 0.89
          }}>
          <Swiper
            showsButtons={false}
            autoplay
            autoplayTimeout={2.5}
            activeDot={<View style={styles.activeDot} />}
            dot={<View style={styles.dot} />}>
            {swiperData.map((item, index) => {
              return (
                <View style={styles.slide} key={index}>
                  <Image
                    style={{
                      width: Metrics.WIDTH * 0.25,
                      height: Metrics.WIDTH * 0.25
                    }}
                    source={Images.bag}
                  />
                  <Text style={styles.desctext}>{item.description}</Text>
                </View>
              );
            })}
          </Swiper>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.getStartedBtnBg}
            onPress={() => this.props.navigation.navigate('SignUpSignIn')}>
            <Text style={styles.getStartedText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default IntroductionScreen;
