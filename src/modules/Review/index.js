/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  BackHandler,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
  Easing,
  I18nManager
} from 'react-native';
import { Content, Header, Left, Right, Body, Title } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Rating from 'react-native-rating';
import styles from './style';
import { Metrics, Images } from '../../Themes';

let ScreenName = '';
let TitleName = '';

export default class Review extends Component {
  state = {
    reviewData: [
      {
        id: 1,
        profileImg: Images.profile_one,
        name: 'Christina',
        date: '14 June 2017',
        review:
          'Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic amiable...',
        rating: 5
      },
      {
        id: 2,
        profileImg: Images.profileMenu,
        name: 'Ludwig Beethoven',
        date: '14 June 2017',
        review:
          'Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic amiable...',
        rating: 5
      },
      {
        id: 3,
        profileImg: Images.profileBgImg,
        name: 'Remi Boucher',
        date: '14 June 2017',
        review:
          'Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic amiable...',
        rating: 5
      }
    ],
    name: '',
    review: ''
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);

    const { navigation } = this.props;
    ScreenName = navigation.getParam('screenName');

    if (ScreenName === 'Destinations') {
      TitleName = 'Review';
    } else {
      TitleName = '3 Reviews';
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate(ScreenName);

    return true;
  };

  render() {
    return (
      <View style={styles.mainview}>
        <Header style={styles.HeaderBg} transparent>
          <Left style={styles.left}>
            {ScreenName == 'MexicoDetails' ? (
              <TouchableOpacity onPress={() => this.backPressed()}>
                <MaterialIcons name="keyboard-backspace" color="#fff" size={25} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Entypo name="menu" color="#fff" size={30} />
              </TouchableOpacity>
            )}
          </Left>
          <Body style={styles.body}>
            <Title style={styles.headertitle}>{TitleName}</Title>
          </Body>
          <Right style={styles.right} />
        </Header>

        <Content>
          {this.state.reviewData.map((item, index) => {
            return (
              <View key={index}>
                <View style={{ padding: 15 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={item.profileImg} style={styles.profileImg} />

                    <View style={{ paddingLeft: 10 }}>
                      <View style={styles.nameView}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.dateText}>{item.date}</Text>
                      </View>

                      <Rating
                        initial={item.rating}
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
                          marginTop: 5,
                          flexDirection: 'row'
                        }}
                        editable={false}
                      />
                    </View>
                  </View>

                  <Text style={styles.reviewText}>{item.review}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: '#E0E0E0' }} />
              </View>
            );
          })}

          <Text style={styles.writeReviewText}>Write Review</Text>

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

          <View style={styles.sendView}>
            <Text style={styles.sendText}>SEND</Text>
          </View>
        </Content>
      </View>
    );
  }
}
