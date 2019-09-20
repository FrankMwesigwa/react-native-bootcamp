import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Layout extends Component {
  state = {
    firstName: '',
    lastName: ''
  }

  this.setstate({firstName: 'Frank'});

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstrow} />
        <View style={styles.secondrow} />
        <View style={styles.thirdrow} />
        <View style={styles.fourthrow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#1f2041',
    justifyContent: 'flex-start'
  },

  firstrow: {
    width: 160,
    height: 160,
    backgroundColor: '#ffc857'
  },

  secondrow: {
    width: 160,
    height: 160,
    backgroundColor: '#4b3f72'
  },

  thirdrow: {
    width: 160,
    height: 160,
    backgroundColor: '#119da4'
  },

  fourthrow: {
    width: 160,
    height: 160,
    backgroundColor: '#19647e'
  }
});

export default Layout;
