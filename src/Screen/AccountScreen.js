/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable spaced-comment */
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import AccountList from './AccountList';
import AccountDetails from './AccountDetails';
import frankImage from '../assets/Frank.jpg';

class AccountScreen extends Component {
  state = {
    city: '',
    cities: [],
    selectedName: null
  };

  changeHandler = val => {
    this.setState({ city: val });
  };

  submitHandler = () => {
    if(this.state.city.trim() ===''){
        return;
    }
    this.setState(preState => {
        return {
            cities: preState.cities.concat(preState.city)
        };
    });
  };

  nameSelectedHandler = key => {
    this.setState(preState => {
      return {
        cities: preState.cities.filter(city => {
          return city.key === key;
        }),
        selectedName: null
      };
    });

  }

  itemDeletedHandler = () => {
    this.setState(preState => {
      return {
        cities: preState.cities.filter(city =>{
          return city.key !== prevState.selectedName.key;
        })
      };
    });
  }

  modalCloseHandler = () => {
    this.setState({selectedName: null});
  }

  render() {
      const namesOutPut = this.state.cities.map((name, i) => (
          //<Text key={i}>{name}</Text>
          <AccountList key={i} cityName={name} 
            itemClicked={this.nameSelectedHandler} 
            img={frankImage}
            ItemDeleted={this.itemDeletedHandler}
            modalClose={this.modalCloseHandler}
            />
      ));

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View><AccountDetails selectedName={this.state.selectedName} /></View>
          <TextInput
            //style={{ width: 300, borderColor: 'black', borderWidth: 1 }}
            placeholder="Enter any city"
            value={this.state.city}
            onChangeText={this.changeHandler}
            style={styles.nameInput}
          />
          <Button title="Add City Name" style={styles.buttonInput} onPress={this.submitHandler} />
        </View>
        <View style={styles.namesContainer}>{namesOutPut}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 26
  },
  inputContainer: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  nameInput: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1
  },
  buttonInput: {
    width: '30%'
  },
  namesContainer: {
      width: '100%'
  }
});

export default AccountScreen;
