/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Platform,
  BackHandler,
  ListView
} from 'react-native';
import { Container, Right, Header, Left, Title, Body } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CachedImage } from 'react-native-cached-image';
import { Images, Metrics } from '../../Themes';
import styles from './styles';

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });
let DestinationFound = [
  {
    id: 1,
    destinationname: 'Mexico'
  },
  {
    id: 2,

    destinationname: 'History & Culture'
  },
  {
    id: 3,

    destinationname: 'Bicycle'
  },
  {
    id: 4,
    destinationname: 'Guadalajara Nightlife'
  }
];

class DestinationsFounds extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(DestinationFound),

      dataSourcetwo: ds.cloneWithRows([
        {
          id: 1,
          destinationimg: Images.playa_img,
          destinationname: 'Playal del carmen'
        },
        {
          id: 2,
          destinationimg: Images.guadalajara_img,
          destinationname: 'Guadalajara Nightlife'
        },
        {
          id: 3,
          destinationimg: Images.puerto,
          destinationname: 'Puerto Vallarta View'
        },
        {
          id: 4,
          destinationimg: Images.cancun_img,
          destinationname: 'Cancum Break'
        },
        {
          id: 1,
          destinationimg: Images.playa_img,
          destinationname: 'Playal del carmen'
        },
        {
          id: 2,
          destinationimg: Images.guadalajara_img,
          destinationname: 'Guadalajara Nightlife'
        }
      ])
    };
  }

  NavigationRenderScreen = () => {
    this.props.navigation.navigate('DestinationsFoundsDetail');
  };

  renderDeleteItem(index) {
    const newData = DestinationFound.slice();
    newData.splice(index, 1);
    for (let i = 0; i < newData.length; i++) {
      newData[i].index = i;
    }

    DestinationFound = newData;
    this.setState({ dataSource: ds.cloneWithRows(DestinationFound) });
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('DestinationsFoundsDetail');
    return true;
  };

  renderRow(rowData) {
    let that = this;

    return (
      <View style={styles.maindestinationNamebg}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textdestinationName}>{rowData.destinationname}</Text>
          <TouchableOpacity onPress={() => this.renderDeleteItem(rowData.index)}>
            <Ionicons
              name="md-close"
              size={25}
              color="#fff"
              style={{ paddingLeft: Metrics.HEIGHT * 0.02 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderRowtwo(rowData) {
    var that = this;

    return (
      <TouchableOpacity style={styles.listMainview}>
        <CachedImage source={rowData.destinationimg} style={styles.destinationimg}>
          <TouchableOpacity />
        </CachedImage>
        <Text style={styles.destinationnamelist}>{rowData.destinationname}</Text>
        <Text style={styles.mexicotext}>Mexico</Text>
      </TouchableOpacity>
    );
  }

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
              <TouchableOpacity onPress={() => this.NavigationRenderScreen()}>
                <View>
                  <MaterialIcons name="keyboard-backspace" size={25} color="white" />
                </View>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Title style={styles.headertitle}>Destinations Found</Title>
            </Body>
            <Right style={styles.right}>
              <TouchableOpacity>
                <EvilIcons name="search" color="#fff" size={25} />
              </TouchableOpacity>
            </Right>
          </Header>
          <View>
            <View style={styles.mainlistview}>
              {DestinationFound.length > 0 ? (
                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow()}
                  enableEmptySections
                  pageSize={4}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </View>
            <View
              style={
                DestinationFound.length > 0
                  ? styles.MainRenderTwoMain
                  : styles.MainRenderTwoMainHide
              }>
              <ListView
                contentContainerStyle={styles.listContent}
                dataSource={this.state.dataSourcetwo}
                renderRow={this.renderRowtwo()}
                enableEmptySections
                pageSize={4}
              />
            </View>
          </View>
        </Container>
      </View>
    );
  }
}

export default DestinationsFounds;
