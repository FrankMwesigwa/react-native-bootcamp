import React from 'react';
import { StyleSheet, View } from 'react-native';
import { rootNavigator } from './src/routes';

const App = () => {
  const AppNavigator = rootNavigator();
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
