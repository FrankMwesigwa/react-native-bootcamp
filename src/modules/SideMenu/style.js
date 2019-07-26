import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '../../Themes';

const styles = StyleSheet.create({
  mainView: {
    height: Metrics.HEIGHT,
    backgroundColor: 'white'
  },

  headerView: {
    height: Metrics.HEIGHT * 0.3,
    backgroundColor: 'black',
    paddingTop: Metrics.WIDTH * 0.05,
    alignItems: 'center',
    paddingLeft: 20,
    flexDirection: 'row'
  },

  imageProfile: {
    height: Metrics.WIDTH * 0.22,
    width: Metrics.WIDTH * 0.22,
    borderRadius: Metrics.WIDTH * 0.11
  },

  nameText: {
    color: Colors.snow,
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14)
  },

  locationView: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  locationText: {
    color: '#B8B8B8',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14)
  },

  menuView: {
    height: Metrics.HEIGHT * 0.55,
    marginTop: Metrics.HEIGHT * 0.03
  },

  menuName: {
    color: '#263238',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(15),
    paddingVertical: Metrics.WIDTH * 0.04,
    paddingLeft: Metrics.WIDTH * 0.1
  }
});

export default styles;
