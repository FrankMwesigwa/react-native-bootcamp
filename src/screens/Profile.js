/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#E91E63'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Profile Activity</Text>
        <Button
          title="Go to Settings Screen"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  }
});

export default Profile;
