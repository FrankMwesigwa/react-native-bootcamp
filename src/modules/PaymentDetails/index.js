/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, BackHandler } from 'react-native';
import { Content, Container, Right, Header, Left, Title, Body } from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Metrics } from '../../Themes';
import styles from './styles';

class PaymentDetails extends Component {
  state = {
    PaymentArray: [
      {
        id: 1,
        Email: 'jonathandavis@mail.com',
        PayNow: 'Pay with PayPal'
      },
      {
        id: 2,
        PayNow: 'Pay with your Credit Card'
      }
    ]
  };

  NavigationRenderScreen = () => {
    this.props.navigation.navigate('YourDetails');
  };

  RenderScreen = () => {
    this.props.navigation.navigate('PayWithCreditCard');
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('YourDetails');
    return true;
  };

  render() {
    return (
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
              <Title style={styles.headertitle}>Payment Details</Title>
            </Body>
            <Right style={styles.right}>
              <TouchableOpacity />
            </Right>
          </Header>
          <View style={styles.mainpaymentoption}>
            <Text style={styles.paymentoptiontext}>Payment Option</Text>
            <View style={styles.paymentoptionbg}>
              <View style={styles.walletmainbg}>
                <Entypo
                  name="wallet"
                  size={45}
                  color="#212121"
                  style={{ paddingTop: Metrics.HEIGHT * 0.02 }}
                />
                <Text style={styles.wallettext}>Wallet</Text>
                <MaterialCommunityIcons
                  name="currency-usd"
                  size={25}
                  color="#e00051"
                  style={{ paddingTop: Metrics.HEIGHT * 0.03 }}
                />
                <Text style={styles.currencytext}>173.00</Text>
              </View>
              <View style={styles.mainbgbalance}>
                <Text style={styles.yourbalance}>Your balance</Text>
                <Text style={styles.topupBalancetext}>Topup your balance</Text>
                <AntDesign
                  name="caretright"
                  size={10}
                  color="#e10856"
                  style={{ paddingTop: Metrics.HEIGHT * 0.008 }}
                />
              </View>
            </View>

            <View style={styles.mainrenderview}>
              <Content>
                {this.state.PaymentArray.map(item => {
                  return (
                    <View>
                      {item.id === 1 ? (
                        <View>
                          <View style={styles.PayNowMainBg}>
                            <View style={styles.payNowMainView}>
                              <View style={styles.RenderView}>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignSelf: 'center'
                                  }}>
                                  <MaterialCommunityIcons
                                    name="currency-usd"
                                    size={20}
                                    color="#e00051"
                                    style={{
                                      paddingTop: Metrics.HEIGHT * 0.02
                                    }}
                                  />
                                  <Text style={styles.currencytextpay}>90.00</Text>
                                </View>
                              </View>
                              <TouchableOpacity
                                style={styles.mainpaynowbg}
                                onPress={() => this.RenderScreen()}>
                                <Text style={styles.PayNow}>PAY NOW</Text>
                              </TouchableOpacity>
                            </View>
                            <View style={styles.paywithmainbg}>
                              <Text style={styles.emailtext}>{item.Email}</Text>
                              <Text style={styles.paynowtextview}>{item.PayNow}</Text>
                            </View>
                          </View>
                        </View>
                      ) : (
                        <View>
                          <View style={styles.PayNowMainBg}>
                            <View style={styles.payNowMainView}>
                              <TouchableOpacity
                                style={styles.mainpaynowbgTwo}
                                onPress={() => this.RenderScreen()}>
                                <Text style={styles.PayNow}>PAY NOW</Text>
                              </TouchableOpacity>
                            </View>

                            <View style={styles.paywithmainbg}>
                              <Text style={styles.emailtext}>{item.Email}</Text>
                              <Text style={styles.paynowtextviewTwo}>{item.PayNow}</Text>
                            </View>
                          </View>
                        </View>
                      )}
                    </View>
                  );
                })}
              </Content>
            </View>
          </View>
          <TouchableOpacity style={styles.paymentmethodmainbg}>
            <MaterialIcons
              name="add-circle-outline"
              size={25}
              color="#e91e63"
              style={styles.addcircleicon}
            />
            <Text style={styles.AddAnotherpatmenttext}>Add Another Payment Method</Text>
          </TouchableOpacity>
        </Container>
      </View>
    );
  }
}

export default PaymentDetails;
