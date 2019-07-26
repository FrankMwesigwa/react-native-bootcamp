import { Platform, StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '../../Themes';

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: Colors.white
  },

  HeaderBg: {
    backgroundColor: '#e91e63'
  },

  left: {
    flex: 1
  },

  body: {
    flex: 3,
    alignItems: 'flex-start'
  },

  right: {
    flex: 1
  },

  headertitle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#ffffff',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(20)
  },

  profileImg: {
    width: Metrics.WIDTH * 0.15,
    height: Metrics.WIDTH * 0.15,
    borderRadius: Metrics.WIDTH * 0.075
  },

  nameView: {
    flexDirection: 'row',
    width: Metrics.WIDTH * 0.72
  },

  nameText: {
    width: Metrics.WIDTH * 0.4,
    color: '#616161',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(15)
  },

  dateText: {
    width: Metrics.WIDTH * 0.32,
    color: '#757575',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(15),
    textAlign: 'right'
  },

  ratingStar: {
    height: 17,
    width: 17,
    marginRight: 10
  },

  reviewText: {
    color: '#616161',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14),
    marginTop: 10
  },

  writeReviewText: {
    paddingHorizontal: 15,
    paddingTop: 15,
    color: '#263238',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(18)
  },

  infoBgView: {
    marginTop: Metrics.HEIGHT * 0.02,
    backgroundColor: '#f5f5f5',
    marginHorizontal: 15
  },

  infoText: {
    alignItems: 'center',
    fontSize: Fonts.moderateScale(16),
    color: '#757575',
    fontFamily: Fonts.type.nunitoRegular,
    ...Platform.select({
      ios: {
        padding: 12
      },
      android: {
        paddingTop: 5,
        paddingBottom: 9,
        paddingHorizontal: 12
      }
    })
  },

  sendView: {
    marginLeft: 15,
    borderRadius: 5,
    backgroundColor: '#E91E63',
    width: Metrics.WIDTH * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },

  sendText: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.robotoRegular,
    paddingVertical: 15
  }
});

export default styles;
