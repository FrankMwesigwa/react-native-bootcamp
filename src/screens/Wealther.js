/* eslint-disable global-require */
import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';
import Degrees from './Degrees';

class Wealther extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.upperregion} source={require('../assets/Frank.jpg')}>
          <View style={styles.innerupperregion}>
            <Text style={styles.today}> TODAY </Text>
            <Text style={styles.degrees}>
              {' '}
              23
              <Degrees />C
            </Text>

            <Image style={styles.weathericon} source={require('../assets/Frank.jpg')} />
            <Text style={styles.weathercondition}>Partly Sunny</Text>
          </View>

          <View style={styles.lowerinnerregion}>
            <Text style={[styles.addwhite, { fontSize: 18 }]}>MALMO, SWEDEN </Text>
            <Text style={[styles.addwhite, { fontSize: 14 }]}>8:40 pm</Text>
          </View>
        </ImageBackground>

        <View style={styles.lowerregion}>
          <View style={styles.fivecolumns}>
            <Text style={styles.columntitle}>MON</Text>
            <Image style={styles.iconsmall} source={require('../assets/Frank.jpg')} />
            <Text style={styles.temp}>6/1</Text>
          </View>

          <View style={styles.fivecolumns}>
            <Text style={styles.columntitle}>TUE</Text>
            <Image style={styles.iconsmall} source={require('../assets/Frank.jpg')} />
            <Text style={styles.temp}>6/4</Text>
          </View>

          <View style={styles.fivecolumns}>
            <Text style={styles.columntitle}>WED</Text>
            <Image style={styles.iconsmall} source={require('../assets/Frank.jpg')} />
            <Text style={styles.temp}>6/20</Text>
          </View>

          <View style={styles.fivecolumns}>
            <Text style={styles.columntitle}>THU</Text>
            <Image style={styles.iconsmall} source={require('../assets/Frank.jpg')} />
            <Text style={styles.temp}>5/15</Text>
          </View>

          <View style={styles.fivecolumns}>
            <Text style={styles.columntitle}>FRI</Text>
            <Image style={styles.iconsmall} source={require('../assets/Frank.jpg')} />
            <Text style={styles.temp}>7/18</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  upperregion: {
    flex: 2,
    alignItems: 'center'
  },

  lowerregion: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f4f4f4'
  },

  innerupperregion: {
    marginTop: 120,
    backgroundColor: 'transparent',
    alignItems: 'center',
    flex: 2
  },

  lowerinnerregion: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingBottom: 20
  },

  today: {
    fontSize: 21,
    color: 'white'
  },

  degrees: {
    fontSize: 72,
    color: 'white'
  },

  weathericon: {
    width: 120,
    height: 60,
    marginTop: 40
  },

  weathercondition: {
    fontSize: 18,
    color: 'white',
    marginTop: 20
  },

  addwhite: {
    color: 'white'
  },

  fivecolumns: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center'
  },

  columntitle: {
    fontSize: 13,
    color: '#2188db',
    fontWeight: 'bold'
  },

  iconsmall: {
    width: 56,
    height: 32,
    marginTop: 30
  },

  temp: {
    fontSize: 16,
    color: '#666666',
    marginTop: 20
  }
});

export default Wealther;
