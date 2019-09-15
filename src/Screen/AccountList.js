/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const AccountList = props => {
    return (
        <TouchableOpacity onPress={props.itemClicked}>
        <View style={styles.container}>
            <Image source={props.img} style={styles.frankImage} />
            <Text>{props.cityName}</Text>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#eee',
      padding: 10,
      margin: 5,
      flexDirection: 'row',
      alignItems: 'center'
    },
    frankImage:{
      marginRight: 8,
      height: 100,
      width: 100
    }
  });

export default AccountList;
