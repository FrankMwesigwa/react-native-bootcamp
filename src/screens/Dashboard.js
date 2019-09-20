/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

class Dashboard extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#03A9F4'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Dashboard Screen</Text>
        <Button
          title="Go to Wealther Activity"
          onPress={() => this.props.navigation.navigate('Wealther')}
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

export default Dashboard;
