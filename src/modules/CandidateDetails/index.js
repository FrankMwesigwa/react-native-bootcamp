/* eslint-disable react/prop-types */
/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  TextInput,
  I18nManager
} from 'react-native';
import { Container, Right, Header, Left, Title, Body } from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-material-dropdown';
import { Images, Fonts } from '../../Themes';
import styles from './styles';

export default class YourDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CATEGORY_OPTIONS_1: [
        {
          value: 'Mr.'
        },
        {
          value: 'Miss'
        },
        {
          value: 'Mrs'
        }
      ],
      CATEGORY_OPTIONS_2: [
        {
          value: 'Norwegia'
        },
        {
          value: 'Maxcio'
        }
      ]
    };
  }
  NavigationRenderScreen = () => {
    this.props.navigation.navigate('PlaceDetails');
  };

  RenderScreen = () => {
    this.props.navigation.navigate('PaymentDetails');
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('PlaceDetails');
    return true;
  };

  render() {
    return (
      <View>
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
                <Title style={styles.headertitle}>Your Details</Title>
              </Body>
              <Right style={styles.right}>
                <TouchableOpacity />
              </Right>
            </Header>
            <View style={styles.mainprofilenamebg}>
              <Image source={Images.ic_background_ptwentyseven} style={styles.profileBgImg} />
              <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Entypo
                    name="location-pin"
                    size={20}
                    color="#757575"
                    style={styles.locationIcon}
                  />
                  <Text style={styles.mexicotext}>Mexico</Text>
                </View>
                <Text style={styles.nameofdestination}>Cancun Vacation Break</Text>

                <View style={{ flexDirection: 'row' }}>
                  <EvilIcons name="clock" size={20} color="#757575" style={styles.clockIcon} />
                  <Text style={styles.clockdaystext}>3 days</Text>
                  <Entypo name="users" size={14} color="#757575" style={styles.clockIcon} />
                  <Text style={styles.clockdaystext}>10 People</Text>
                </View>
              </View>
            </View>
            <View style={styles.dividerhorizontal} />

            <View style={styles.mainrenderdetailbg}>
              <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled
                enableAutomaticScroll
                enableAutoAutomaticScrol="true"
                enableOnAndroid
                extraHeight={100}
                extraScrollHeight={100}>
                <View style={styles.YourDetailsMain}>
                  <Text style={styles.YourDetails}>Your Details</Text>
                  <View style={styles.infoBgView}>
                    <TextInput
                      value="Name"
                      style={styles.infoText}
                      maxLength={40}
                      placeholder="Name"
                      placeholderTextColor="#767676"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      keyboardType="default"
                      textAlign={I18nManager.isRTL ? 'right' : 'left'}
                      returnKeyType="next"
                    />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.infoBgViewMrSec}>
                      <Dropdown
                        ref="mr"
                        value="Mr."
                        onChangeText={this.onCategoryChange}
                        data={this.state.CATEGORY_OPTIONS_1}
                        labelHeight={0}
                        containerStyle={styles.dropdwoncontainer}
                        textColor="#767676"
                        itemTextStyle={{ fontFamily: Fonts.type.reguler }}
                        dropdownPosition={1}
                        dropdownMargins={{ min: 12, max: 15 }}
                        dropdownOffset={{ top: 90, left: 0 }}
                        onSubmitEditing={event => {
                          this.refs.age.focus();
                        }}
                      />
                    </View>

                    <View style={styles.infoBgViewAgeSec}>
                      <TextInput
                        ref="age"
                        style={styles.infoText}
                        maxLength={40}
                        placeholder="Age"
                        placeholderTextColor="#767676"
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        textAlign={I18nManager.isRTL ? 'right' : 'left'}
                        onSubmitEditing={event => {
                          this.refs.address.focus();
                        }}
                        returnKeyType="next"
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.dividerhorizontalYoursDetails} />

                <View style={styles.YourDetailsMainAddress}>
                  <Text style={styles.YourDetails}>Your Address</Text>
                  <View style={styles.infoBgViewaddress}>
                    <TextInput
                      ref="address"
                      style={styles.infoTextaddress}
                      maxLength={40}
                      placeholder="Fill in your full address"
                      placeholderTextColor="#767676"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      keyboardType="default"
                      textAlign={I18nManager.isRTL ? 'right' : 'left'}
                      returnKeyType="next"
                    />
                    <MaterialIcons
                      name="location-searching"
                      size={20}
                      color="#e91e63"
                      style={styles.smalldownicon}
                    />
                  </View>
                  <View style={styles.infoBgViewdropdownmain}>
                    <Dropdown
                      value="Norwegia"
                      onChangeText={this.onCategoryChange}
                      data={this.state.CATEGORY_OPTIONS_2}
                      labelHeight={0}
                      containerStyle={styles.dropdwoncontainerstyle}
                      textColor="#767676"
                      itemTextStyle={{ fontFamily: Fonts.type.reguler }}
                      dropdownPosition={1}
                      dropdownMargins={{ min: 12, max: 35 }}
                      dropdownOffset={{ top: 90, left: 0 }}
                    />
                  </View>
                </View>
                <View style={styles.dividerhorizontalYoursDetails} />
                <View style={styles.YourDetailsMainAddress}>
                  <Text style={styles.YourDetails}>Your Contact Details</Text>
                  <View style={styles.infoBgViewaddress}>
                    <TextInput
                      ref="phoneNumber"
                      style={styles.infoTextaddress}
                      maxLength={10}
                      placeholder="Fill in your phone number"
                      placeholderTextColor="#767676"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      keyboardType="number-pad"
                      textAlign={I18nManager.isRTL ? 'right' : 'left'}
                      onSubmitEditing={event => {
                        this.refs.email.focus();
                      }}
                      returnKeyType="next"
                    />
                  </View>

                  <View style={styles.infoBgViewaddress}>
                    <TextInput
                      ref="email"
                      style={styles.infoTextaddress}
                      maxLength={70}
                      placeholder="Fill in your email"
                      placeholderTextColor="#767676"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      keyboardType="email-address"
                      textAlign={I18nManager.isRTL ? 'right' : 'left'}
                      returnKeyType="done"
                    />
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </View>
          </Container>
        </View>
        <View>
          <TouchableOpacity style={styles.creatacoountmain} onPress={() => this.RenderScreen()}>
            <Text style={styles.creataccounttext}>Hire For Work</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
