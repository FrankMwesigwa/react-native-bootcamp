/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  BackHandler,
  TextInput,
  I18nManager
} from 'react-native';
import { Container, Right, Header, Left, Title, Body } from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-datepicker';
import { Metrics } from '../../Themes';
import styles from './styles';

class PayWithCreditCard extends Component {
  state = {
    paymentTypeIndex: 0,
    paymentType: 'Cash',
    Exdate: ''
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('PaymentDetails');
    return true;
  };

  NavigationRenderScreen = () => {
    this.props.navigation.navigate('PaymentDetails');
  };

  RenderScreen = () => {
    this.props.navigation.navigate('BookingSuccess');
  };

  onSelectpaymenttype = (index, value) => {
    console.log('radio index==');
    console.log(index);
    this.setState({
      paymentTypeIndex: index,
      paymentType: value
    });
  };

  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <View style={styles.mainview}>
          <Container>
            <Header style={styles.HeaderBg} transparent>
              <Left style={styles.leftheader}>
                <TouchableOpacity onPress={() => this.NavigationRenderScreen()}>
                  <View>
                    <MaterialIcons name="keyboard-backspace" size={25} color="white" />
                  </View>
                </TouchableOpacity>
              </Left>
              <Body style={styles.body}>
                <Title style={styles.headertitle}>Pay With Credit Card</Title>
              </Body>
              <Right style={styles.right}>
                <TouchableOpacity />
              </Right>
            </Header>
            <View style={styles.PayNowMainBg}>
              <RadioGroup
                onSelect={(index, value) => this.onSelectpaymenttype(index, value)}
                selectedIndex={this.state.paymentTypeIndex}
                activeColor="#ff9800"
                color="#b0b0b0"
                style={{
                  marginTop: Metrics.HEIGHT * 0.03
                }}>
                <RadioButton
                  value="VISA Card Number"
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#f1f1f1'
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      ...Platform.select({
                        ios: {
                          marginBottom: Metrics.HEIGHT * 0.01
                        },
                        android: {
                          marginBottom: Metrics.HEIGHT * 0.02
                        }
                      })
                    }}>
                    <Text style={styles.visacardtext}>VISA Card Number</Text>
                    <Text style={styles.visacardnumbertext}>1923-6789-XXXX</Text>
                  </View>
                </RadioButton>

                <RadioButton
                  value="MasterCard Number"
                  color="#ff9800"
                  style={{
                    ...Platform.select({
                      ios: {
                        marginTop: Metrics.HEIGHT * 0.01
                      },
                      android: {
                        marginTop: Metrics.HEIGHT * 0.03
                      }
                    })
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      ...Platform.select({
                        ios: {
                          marginBottom: Metrics.HEIGHT * 0.015
                        },
                        android: {}
                      })
                    }}>
                    <Text style={styles.visacardtext}>MasterCard Number</Text>
                    <Text style={styles.visacardnumbertext}>1923-6789-XXXX</Text>
                  </View>
                </RadioButton>
              </RadioGroup>
            </View>

            <View style={styles.cardInfoMainbg}>
              <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled
                enableAutomaticScroll
                enableAutoAutomaticScrol="true"
                enableOnAndroid
                extraHeight={50}
                extraScrollHeight={50}>
                <Text style={styles.cardInfotext}>Card Information</Text>
                <View style={styles.infoBgView}>
                  <TextInput
                    ref="Name"
                    style={styles.infoText}
                    maxLength={40}
                    placeholder="Full Name"
                    placeholderTextColor="#626262"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    keyboardType="default"
                    textAlign={I18nManager.isRTL ? 'right' : 'left'}
                    onSubmitEditing={event => {
                      this.refs.Number.focus();
                    }}
                    returnKeyType="next"
                  />
                </View>
                <Text style={styles.caednumbertext}>14-Digits Card Number</Text>

                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.infoBgView}>
                    <TextInput
                      ref="Number"
                      style={styles.infoTextnumber}
                      maxLength={4}
                      placeholder="1928"
                      placeholderTextColor="#626262"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      keyboardType="number-pad"
                      textAlign={I18nManager.isRTL ? 'right' : 'left'}
                      onSubmitEditing={event => {
                        this.refs.NumberTwo.focus();
                      }}
                      onChangeText={text => {
                        if (text && text.length == 4) {
                          this.refs.NumberTwo.focus();
                        }
                      }}
                      returnKeyType="next"
                    />
                  </View>
                  <View style={[styles.infoBgView, { marginLeft: Metrics.HEIGHT * 0.015 }]}>
                    <TextInput
                      ref="NumberTwo"
                      style={styles.infoTextnumber}
                      maxLength={4}
                      placeholder="2895"
                      placeholderTextColor="#626262"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      keyboardType="number-pad"
                      textAlign={I18nManager.isRTL ? 'right' : 'left'}
                      onSubmitEditing={event => {
                        this.refs.NumberThree.focus();
                      }}
                      returnKeyType="next"
                      onChangeText={text => {
                        if (text && text.length == 4) {
                          this.refs.NumberThree.focus();
                        }
                      }}
                    />
                  </View>
                  <View style={[styles.infoBgView, { marginLeft: Metrics.HEIGHT * 0.015 }]}>
                    <TextInput
                      ref="NumberThree"
                      style={styles.infoTextnumber}
                      maxLength={4}
                      placeholder="2895"
                      placeholderTextColor="#626262"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      keyboardType="number-pad"
                      textAlign={I18nManager.isRTL ? 'right' : 'left'}
                      onSubmitEditing={event => {
                        this.refs.NumberFour.focus();
                      }}
                      onChangeText={text => {
                        if (text && text.length == 4) {
                          this.refs.NumberFour.focus();
                        }
                      }}
                      returnKeyType="next"
                    />
                  </View>
                  <View style={[styles.infoBgView, { marginLeft: Metrics.HEIGHT * 0.015 }]}>
                    <TextInput
                      ref="NumberFour"
                      style={styles.infoTextnumber}
                      maxLength={4}
                      placeholder="...."
                      placeholderTextColor="#626262"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      keyboardType="number-pad"
                      textAlign={I18nManager.isRTL ? 'right' : 'left'}
                      onSubmitEditing={event => {
                        this.refs.date.focus();
                      }}
                      returnKeyType="next"
                    />
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={styles.infoBgViewdate}
                    onPress={() => this.refs.datepicker.onPressDate()}>
                    <TextInput
                      ref="date"
                      style={styles.infoTextdate}
                      maxLength={15}
                      placeholder="Exp.Date"
                      editable={false}
                      placeholderTextColor="#626262"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      keyboardType="number-pad"
                      textAlign={I18nManager.isRTL ? 'right' : 'left'}
                      value={this.state.Exdate}
                      onSubmitEditing={event => {
                        this.refs.cvv.focus();
                      }}
                      returnKeyType="next"
                    />

                    <EvilIcons
                      name="calendar"
                      size={25}
                      color="#626262"
                      style={{ alignSelf: 'center' }}
                    />
                  </TouchableOpacity>

                  <View style={[styles.infoBgViewdate, { marginLeft: Metrics.HEIGHT * 0.02 }]}>
                    <TextInput
                      ref="cvv"
                      style={styles.infoTextCvv}
                      maxLength={3}
                      placeholder="CVV"
                      placeholderTextColor="#626262"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      keyboardType="number-pad"
                      textAlign={I18nManager.isRTL ? 'right' : 'left'}
                      returnKeyType="done"
                    />
                  </View>
                </View>

                <DatePicker
                  ref="datepicker"
                  style={{ width: 0, height: 0 }}
                  customStyles={{
                    dateIcon: {
                      width: 0,
                      height: 0
                    },
                    dateInput: {
                      borderWidth: 0
                    }
                  }}
                  date={this.state.Exdate}
                  mode="date"
                  format="YYYY-MM-DD"
                  maxDate={new Date()}
                  hideText
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={Exdate => {
                    this.setState({ Exdate: Exdate });
                  }}
                />
              </KeyboardAwareScrollView>
            </View>
          </Container>
        </View>
        <View style={{ backgroundColor: '#fff', height: Metrics.HEIGHT * 0.1 }}>
          <TouchableOpacity style={styles.creatacoountmain} onPress={() => this.RenderScreen()}>
            <Text style={styles.creataccounttext}>FINISH PAYMENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PayWithCreditCard;
