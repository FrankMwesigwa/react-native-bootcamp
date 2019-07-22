/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Button,
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  ListItem,
  FlatList
} from 'react-native';
import db  from '../../../configs/firebase';

class Board extends Component {
  state = {
    isLoading: true,
    boards: []
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Board List',
      headerRight: (
        <Button
          buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
          onPress={() => {
            navigation.push('AddBoard');
          }}
        />
      )
    };
  };

  componentDidMount() {
    db.collection('boards')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ boards: data, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <FlatList>
          {this.state.boards.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: 'book', type: 'font-awesome' }}
              onPress={() => {
                this.props.navigation.navigate('BoardDetails', {
                  boardkey: `${JSON.stringify(item.key)}`
                });
              }}
            />
          ))}
        </FlatList>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Board;
