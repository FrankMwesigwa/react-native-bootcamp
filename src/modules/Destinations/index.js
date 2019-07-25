/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity, Platform } from 'react-native';
import { Content, Container, Right, Header, Left, Body, Title } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Images } from '../../Themes';
import styles from './styles';

class Destinations extends Component {
  state = {
    destinationArray: [
      {
        id: 1,
        destinationname: 'Wonderful Mexico',
        img: Images.mexico
      },
      {
        id: 2,
        destinationname: 'Treasure of Egypt',
        img: Images.egypt
      },
      {
        id: 3,
        destinationname: 'Love in Paris',
        img: Images.love_paris
      },
      {
        id: 4,
        destinationname: 'Wonderful Mexico',
        img: Images.mexico
      }
    ]
  };

  RenderNavigation = () => {
    this.props.navigation.navigate('DestinationsDetails');
  };

  NavigationRenderScreen = () => {
    this.props.navigation.navigate('DestinationsFoundsDetail');
  };

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#c2185b', true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.mainview}>
        <Container>
          <Header style={styles.HeaderBg} transparent>
            <Left style={styles.leftheader}>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Entypo name="menu" color="#fff" size={30} />
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Title style={styles.headertitle}>Destinations</Title>
            </Body>
            <Right style={styles.right}>
              <TouchableOpacity onPress={() => this.NavigationRenderScreen()}>
                <EvilIcons name="search" color="#fff" size={25} />
              </TouchableOpacity>
            </Right>
          </Header>
          <View style={styles.mainrenderview}>
            <Content>
              {this.state.destinationArray.map((item, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      style={styles.mainimgbgimgoverlay}
                      onPress={() => this.RenderNavigation()}>
                      <Image source={item.img} style={styles.mainimgbg} />
                      <LinearGradient
                        locations={[0.1, 1]}
                        colors={['transparent', 'black']}
                        style={styles.imagoverlay}>
                        <Text style={styles.destinationname}>{item.destinationname}</Text>
                        <Text style={styles.places}>19 Places</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </Content>
          </View>
        </Container>
      </View>
    );
  }
}

export default Destinations;
