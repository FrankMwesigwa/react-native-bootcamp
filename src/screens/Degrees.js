import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Degree extends Component {
  render() {
    return <View style={styles.circleicon} />;
  }
}

const styles = StyleSheet.create({
  circleicon: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginTop: -50
  }
});

export default Degree;
