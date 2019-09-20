/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <View>
        <Text> Welcome Splash Screen!!! </Text>
        <Button title="Go to Dashboard" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

export default Welcome;
