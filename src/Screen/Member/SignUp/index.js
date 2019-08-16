/* eslint-disable global-require */
import React from 'react';
import { View, StatusBar, TextInput, Image, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';

import Style from '../../../Theme/Style';
import Styles from './Style';
import NavigationService from '../../../Service/Navigation';

export default class extends React.Component {
  render() {
    return (
      <Container style={Style.bgMain}>
        <ImageBackground
          source={require('../../../../assets/images/bg.png')}
          imageStyle="cover"
          style={Styles.bgCover}>
          <Header style={Style.navigationTransparent}>
            <StatusBar backgroundColor="#7E8BF5" animated barStyle="light-content" />

            <View style={Style.actionBarLeft}>
              <Button
                transparent
                style={Style.actionBarBtn}
                onPress={() => {
                  NavigationService.navigate('PublicHome');
                }}>
                <Icon
                  active
                  name="arrow-left"
                  style={Style.textWhite}
                  type="MaterialCommunityIcons"
                />
              </Button>
            </View>
            <View style={Style.actionBarMiddle}>
              <Text style={Style.actionBarText}>{'Sign Up!'.toUpperCase()}</Text>
            </View>
            <View style={Style.actionBarRight} />
          </Header>

          <Content style={Style.layoutInner}>
            <View style={Styles.section}>
              <View style={Styles.logo}>
                <Image source={require('../../../../assets/images/logo.png')} />
              </View>
              <View style={Styles.signBg}>
                <View style={Styles.col}>
                  <TextInput style={Styles.textInputHalf} placeholder="First Name" />
                  <TextInput style={Styles.textInputHalf} placeholder="Last Name" />
                </View>
                <TextInput style={Styles.textInput} placeholder="Email Address" />
                <TextInput style={Styles.textInput} placeholder="Mobile Number" />
                <TextInput style={Styles.textInput} placeholder="Password" />
                <Button
                  style={Styles.btn}
                  onPress={() => {
                    NavigationService.navigate('MemberSignIn');
                  }}>
                  <Text style={Styles.loginBtnText}>{'Sign Up!'.toUpperCase()}</Text>
                  <Icon
                    active
                    name="arrow-right"
                    type="MaterialCommunityIcons"
                    style={Styles.loginBtnIcon}
                  />
                </Button>
              </View>
              <View style={Styles.login}>
                <Text style={Styles.account}>Do you have an account?</Text>
                <Button
                  transparent
                  onPress={() => {
                    NavigationService.navigate('MemberSignIn');
                  }}>
                  <Text style={Styles.btnLogin}>Login</Text>
                </Button>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
