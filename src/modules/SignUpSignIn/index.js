/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Platform,
  ImageBackground,
  TextInput,
  I18nManager
} from 'react-native';
import { Container, Button, Right, Header, Body, Segment } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { Images } from '../../Themes';

class SignUpSignIn extends Component {
  state = {
    segment: 1
  };

  renderActiveComponent = () => {
    const { segment } = this.state;

    // Login
    if (segment === 1) {
      return (
        <View style={styles.mainrenderview}>
          <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled
            enableAutomaticScroll
            enableAutoAutomaticScrol="true"
            enableOnAndroid
            extraHeight={50}
            extraScrollHeight={50}>
            <View style={styles.infoBgView}>
              <TextInput
                value="Fullname"
                style={styles.infoText}
                maxLength={40}
                placeholder="Fullname"
                placeholderTextColor="#9b9b9b"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
                onSubmitEditing={event => {
                  this.refs.Username.focus();
                }}
                returnKeyType="next"
              />
            </View>

            <View style={styles.usernamemain}>
              <TextInput
                value="Username"
                style={styles.infoText}
                maxLength={40}
                placeholder="Username"
                placeholderTextColor="#9b9b9b"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
                onSubmitEditing={event => {
                  this.refs.Email.focus();
                }}
                returnKeyType="next"
              />
            </View>

            <View style={styles.usernamemain}>
              <TextInput
                value="Email"
                style={styles.infoText}
                maxLength={50}
                placeholder="Email"
                placeholderTextColor="#9b9b9b"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="email-address"
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
                onSubmitEditing={event => {
                  this.refs.password.focus();
                }}
                returnKeyType="next"
              />
            </View>
            <View style={styles.usernamemain}>
              <TextInput
                secureTextEntry
                value="password"
                style={styles.infoText}
                maxLength={16}
                placeholder="Password"
                placeholderTextColor="#9b9b9b"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
                returnKeyType="next"
                onSubmitEditing={event => {
                  this.refs.Confirmpassword.focus();
                }}
              />
            </View>
            <View style={styles.usernamemain}>
              <TextInput
                secureTextEntry
                value="Confirmpassword"
                style={styles.infoText}
                maxLength={16}
                placeholder="Confirm Password"
                placeholderTextColor="#9b9b9b"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
                returnKeyType="done"
              />
            </View>
            <TouchableOpacity style={styles.creatacoountmain}>
              <Text style={styles.creataccounttext}>Creat An Account</Text>
            </TouchableOpacity>

            <TouchableOpacity iconRight style={styles.creatacoountmainfacebook}>
              <FontAwesome name="facebook" size={20} color="#ffffff" />
              <Text style={styles.signupwithfacebooktext}>Sign Up with Facebook</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      );
    }

    if (segment === 2) {
      return (
        <View style={styles.mainrenderview}>
          <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled
            enableAutomaticScroll
            enableAutoAutomaticScrol="true"
            enableOnAndroid
            extraHeight={50}
            extraScrollHeight={50}>
            <View style={styles.usernamemain}>
              <TextInput
                value="Email"
                style={styles.infoText}
                maxLength={50}
                placeholder="Email"
                placeholderTextColor="#9b9b9b"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="email-address"
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
                onSubmitEditing={event => {
                  this.refs.password.focus();
                }}
                returnKeyType="next"
              />
            </View>
            <View style={styles.usernamemain}>
              <TextInput
                secureTextEntry
                value="password"
                style={styles.infoText}
                maxLength={16}
                placeholder="Password"
                placeholderTextColor="#9b9b9b"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
                returnKeyType="done"
              />
            </View>

            <TouchableOpacity
              style={styles.creatacoountmain}
              onPress={() => this.props.navigation.navigate('Candidates')}>
              <Text style={styles.creataccounttext}>Sign In</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      );
    }
  };

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.main}>
        <ImageBackground source={Images.bgimg} style={styles.imgContainer}>
          <Header androidStatusBarColor="transparent" style={styles.header}>
            <Body style={styles.body} />

            <Right style={styles.left}>
              <Button transparent />
            </Right>
          </Header>

          <View style={styles.mainbgsignupsignin}>
            <Segment style={styles.segmentTabSecOne}>
              <Button
                first
                style={
                  this.state.segment === 1 ? styles.segmentSelectedTabOne : styles.segmentTabOne
                }
                active={this.state.segment === 1}
                onPress={() => this.setState({ segment: 1 })}>
                <Text style={this.state.segment === 1 ? styles.activeTabOne : styles.normalTabOne}>
                  SIGN UP
                </Text>
              </Button>

              <Button
                last
                style={
                  this.state.segment === 2 ? styles.segmentSelectedTabOne : styles.segmentTabOne
                }
                active={this.state.segment === 2}
                onPress={() => this.setState({ segment: 2 })}>
                <Text style={this.state.segment === 2 ? styles.activeTabOne : styles.normalTabOne}>
                  SIGN IN
                </Text>
              </Button>
            </Segment>
            <View style={styles.divider} />

            <View>{this.renderActiveComponent()}</View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default SignUpSignIn;
