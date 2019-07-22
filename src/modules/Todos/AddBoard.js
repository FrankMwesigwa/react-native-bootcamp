/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { db } from '../../../configs/firebase';

class AddBoardScreen extends Component {
  state = {
    title: '',
    description: '',
    author: '',
    isLoading: false
  };

  static navigationOptions = {
    title: 'Add Board'
  };

  updateTextInput = (text, field) => {
    const { state } = this;
    state[field] = text;
    this.setState(state);
  };

  addUser = () => {
    const data = {
      ...this.state.formValues,
      uid: new Date().getTime()
    };

    // adding data here
    db.collection('boards')
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        NotificationManager.success('A new user has been added', 'Success');
        window.location = '/';
      })
      .catch(error => {
        NotificationManager.error(error.message, 'Create user failed');
        this.setState({ isSubmitting: false });
      });
  };

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
        <View style={styles.subContainer}>
          <TextInput
            placeholder="Title"
            value={this.state.title}
            onChangeText={text => this.updateTextInput(text, 'title')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            multiline
            numberOfLines={4}
            placeholder="Description"
            value={this.state.description}
            onChangeText={text => this.updateTextInput(text, 'description')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            placeholder="Author"
            value={this.state.author}
            onChangeText={text => this.updateTextInput(text, 'author')}
          />
        </View>
        <View style={styles.button}>
          <Button large leftIcon={{ name: 'save' }} title="Save" onPress={() => this.saveBoard()} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC'
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

export default AddBoardScreen;
