/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  View,
  Text,
  BackHandler,
  ImageBackground,
  Image,
  Easing,
  TextInput,
  I18nManager,
  TouchableOpacity
} from 'react-native';
import { Content, Header, Left, Right, Body } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Rating from 'react-native-rating';
import { Metrics, Images } from '../../Themes';
import styles from './style';

let ScreenName = '';

const reviewData = [
  {
    id: 1,
    name: 'Christina',
    date: '14 June 2018',
    ratingStar: 2,
    review:
      'Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic amiable...'
  },
  {
    id: 2,
    name: 'Ludwig Beethoven',
    date: '14 June 2018',
    ratingStar: 4,
    review:
      'Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic amiable...'
  },
  {
    id: 3,
    name: 'Remi Boucher',
    date: '14 June 2018',
    ratingStar: 5,
    review:
      'Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic amiable...'
  }
];

export default class PlaceDetails extends Component {
  state = {
    name: '',
    review: ''
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);

    const { navigation } = this.props;
    ScreenName = navigation.getParam('screenName');
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate(ScreenName);

    return true;
  };

  renderRow(item) {
    let that = this;

    return (
      <View style={styles.listMainview}>
        <Image style={styles.placeImg} source={item.placeImg} />
        <Text style={styles.placeName}>{item.placeName}</Text>
        <Text style={styles.placeCity}>{item.city}</Text>
      </View>
    );
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }

    return (
      <View style={styles.mainview}>
        <View style={{ height: Metrics.HEIGHT * 0.9, width: Metrics.WIDTH }}>
          <Content style={{ height: Metrics.HEIGHT * 0.9, width: Metrics.WIDTH }}>
            <ImageBackground style={styles.imageBgView} source={Images.cancun_img}>
              <Header style={styles.header}>
                <Left style={styles.left}>
                  {ScreenName == 'DestinationsDetails' ? (
                    <MaterialIcons
                      name="keyboard-backspace"
                      size={25}
                      color="white"
                      onPress={() => this.backPressed()}
                    />
                  ) : (
                    <Entypo
                      name="menu"
                      color="#fff"
                      size={30}
                      onPress={() => this.props.navigation.openDrawer()}
                    />
                  )}
                </Left>

                <Body style={styles.body} />

                <Right style={styles.right}>
                  <Ionicons name="md-more" size={25} color="white" style={{ marginRight: 10 }} />
                </Right>
              </Header>
            </ImageBackground>

            <View style={styles.likeBg}>
              <Ionicons name="md-heart" size={30} color="white" />
            </View>

            <View style={styles.contentView}>
              <View style={styles.locationView}>
                <Entypo name="location-pin" size={20} color="#757575" />
                <Text style={styles.locationText}>Mexico</Text>
              </View>
              <Text style={styles.locationTitleText}>Cancun Vacation Break</Text>
              <View style={[styles.locationView, { marginTop: 3 }]}>
                <Ionicons name="md-time" size={20} color="#757575" />
                <Text style={[styles.locationText, { color: '#757575', marginLeft: 5 }]}>
                  3 days
                </Text>
                <Entypo
                  name="users"
                  size={18}
                  color="#757575"
                  style={{ marginLeft: Metrics.WIDTH * 0.1 }}
                />
                <Text style={[styles.locationText, { color: '#757575', marginLeft: 5 }]}>
                  10 people
                </Text>
              </View>

              <Text style={styles.descriptionText}>
                A wonderful serenity has taken possession of my entire soul, like these sweet
                mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm
                of existence in this spot, which was created for bliss od souls like mine.I am so
                happy, my dear friend, so absorbed in the exquisite sense of mere tranquil
                existence, that I neglect my talents. I should be incapable of drawing a single
                stroke at the present moment and yet I feel that I never was a greater artist than
                now. When, while the lovely valley teems with vapour around me, and the meridian sun
                strikes the upper surface of the impenetrable foliage of my trees and but a few
                stray gleamse to the earth.
              </Text>
            </View>

            <View style={{ height: 1, backgroundColor: '#BDBDBD' }} />

            <Text style={styles.reviewTitleText}>3 Reviews</Text>

            <View>
              {reviewData.map((item, index) => {
                return (
                  <View key={index}>
                    <View style={styles.reviewMainRow}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image
                          source={Images.ic_background_ptwentyseven}
                          style={styles.profileImage}
                        />
                        <View style={{ paddingLeft: 10 }}>
                          <View style={styles.reviewNameView}>
                            <Text style={styles.reviewName}>{item.name}</Text>
                            <Text style={styles.reviewDate}>{item.date}</Text>
                          </View>
                          <Rating
                            initial={item.ratingStar}
                            onChange={rating => {
                              this.setState({
                                rating
                              });
                            }}
                            selectedStar={Images.starFilled1}
                            unselectedStar={Images.starEmpty1}
                            config={{
                              easing: Easing.inOut(Easing.ease),
                              duration: 350
                            }}
                            starStyle={styles.ratingStar}
                            containerStyle={{
                              marginTop: 10,
                              flexDirection: 'row'
                            }}
                            editable={false}
                          />
                        </View>
                      </View>
                      <Text style={styles.ratingText}>{item.review}</Text>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
                  </View>
                );
              })}
            </View>

            <Text style={styles.reviewTitleText}>Write Review</Text>
            <View style={styles.infoBgView}>
              <TextInput
                ref="name"
                style={styles.infoText}
                maxLength={40}
                placeholder="Name"
                placeholderTextColor="#757575"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
                onSubmitEditing={event => {
                  this.refs.review.focus();
                }}
                returnKeyType="next"
              />
            </View>

            <View
              style={[
                styles.infoBgView,
                {
                  height: Metrics.HEIGHT * 0.2,
                  marginBottom: Metrics.HEIGHT * 0.05
                }
              ]}>
              <TextInput
                ref="review"
                maxLength={200}
                style={styles.infoText}
                placeholder="Write your review"
                placeholderTextColor="#757575"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? 'right' : 'left'}
                value={this.state.review}
                onChangeText={review => this.setState({ review })}
                returnKeyType="done"
                multiline
              />
            </View>

            <TouchableOpacity style={styles.sendBg}>
              <Text style={styles.sendText}>SEND</Text>
            </TouchableOpacity>

            <View style={styles.nearbyTitleView}>
              <Text style={[styles.reviewTitleText, { paddingTop: 0, paddingLeft: 0 }]}>
                Nearby
              </Text>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DestinationsDetails')}>
                <Text style={styles.viewAllText}>VIEW ALL</Text>
              </TouchableOpacity>
            </View>
          </Content>
        </View>
        <TouchableOpacity
          style={styles.bookTripBg}
          onPress={() => this.props.navigation.navigate('YourDetails')}>
          <Text style={[styles.sendText, { paddingVertical: Metrics.HEIGHT * 0.025 }]}>
            BOOK THIS TRIP NOW
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
