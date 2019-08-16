/* eslint-disable global-require */
import React from 'react';
import { StatusBar, TextInput, Image, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Icon, Text, View } from 'native-base';

import NavigationService from '../../../Service/Navigation';

import Style from '../../../Theme/Style';
import Styles from './Style';

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
              <Text style={Style.actionBarText}>{'Sign In'.toUpperCase()}</Text>
            </View>
            <View style={Style.actionBarRight} />
          </Header>

          <Content style={Style.layoutInner}>
            <View style={Styles.section}>
              <View style={Styles.logo}>
                <Image source={require('../../../../assets/images/logo.png')} />
              </View>
              <View style={Styles.signBg}>
                <TextInput style={Styles.textInput} placeholder="Email Address or Mobile No." />
                <TextInput style={Styles.textInput} placeholder="Password" />
                <Button
                  style={Styles.btn}
                  onPress={() => {
                    NavigationService.navigate('MemberHome');
                  }}>
                  <Text style={Styles.loginBtnText}>{'Login'.toUpperCase()}</Text>
                  <Icon
                    active
                    name="arrow-right"
                    type="MaterialCommunityIcons"
                    style={Styles.loginBtnIcon}
                  />
                </Button>
              </View>
              <View style={Styles.forgot}>
                <Text style={Styles.btnForgot}>Forgot Password?</Text>
              </View>
              <View style={Styles.login}>
                <Text style={Styles.account}>Don't have an account yet?</Text>
                <Button
                  transparent
                  onPress={() => {
                    NavigationService.navigate('MemberSignUp');
                  }}>
                  <Text style={Styles.btnLogin}>Sign Up Now!</Text>
                </Button>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
