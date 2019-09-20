/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Button } from 'react-native';

const Settings = props => {
  return (
    <View>
      <Text>Settings!!!</Text>
      <Button title="Go to Profile Activity" onPress={() => props.navigation.navigate('Profile')} />
    </View>
  );
};

export default Settings;
