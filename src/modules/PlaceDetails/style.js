import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes';

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: Colors.snow
  },

  contentView: {
    height: Metrics.HEIGHT * 0.9,
    width: Metrics.WIDTH
  },

  imageBgView: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.4
  },

  header: {
    height: Metrics.HEIGHT * 0.1,
    backgroundColor: 'transparent',
    paddingTop: Metrics.HEIGHT * 0.02,
    elevation: 0,
    borderBottomColor: 'transparent'
  },

  left: {
    flex: 1
  },

  body: {
    flex: 3
  },

  right: {
    flex: 1
  },

  likeBg: {
    height: Metrics.WIDTH * 0.2,
    width: Metrics.WIDTH * 0.2,
    borderRadius: Metrics.WIDTH * 0.1,
    backgroundColor: '#E91E63',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginTop: -Metrics.WIDTH * 0.1
  },

  contentView: {
    marginTop: -10,
    paddingHorizontal: Metrics.WIDTH * 0.05,
    paddingBottom: Metrics.WIDTH * 0.05
  },

  locationView: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  locationText: {
    color: '#E91E63',
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.robotoRegular
  },

  locationTitleText: {
    color: '#000000',
    fontSize: Fonts.moderateScale(20),
    fontFamily: Fonts.type.robotoMedium
  },

  descriptionText: {
    color: '#000000',
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.robotoRegular,
    marginTop: Metrics.HEIGHT * 0.02
  },

  reviewTitleText: {
    color: '#263238',
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.robotoMedium,
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingTop: Metrics.WIDTH * 0.05
  },

  reviewMainRow: {
    paddingVertical: Metrics.HEIGHT * 0.03,
    paddingHorizontal: Metrics.WIDTH * 0.03
  },

  profileImage: {
    width: Metrics.WIDTH * 0.16,
    height: Metrics.WIDTH * 0.16,
    borderRadius: Metrics.WIDTH * 0.08
  },

  reviewNameView: {
    flexDirection: 'row',
    width: Metrics.WIDTH * 0.75
  },

  reviewName: {
    color: '#616161',
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.robotoRegular,
    width: Metrics.WIDTH * 0.45
  },

  reviewDate: {
    color: '#757575',
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.robotoRegular,
    width: Metrics.WIDTH * 0.3
  },

  ratingStar: {
    width: Metrics.WIDTH * 0.12,
    height: Metrics.HEIGHT * 0.03
  },

  ratingText: {
    color: '#616161',
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.robotoRegular,
    marginTop: Metrics.WIDTH * 0.03
  },

  infoBgView: {
    marginTop: Metrics.HEIGHT * 0.02,
    backgroundColor: '#f5f5f5',
    marginHorizontal: Metrics.HEIGHT * 0.015
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

  sendBg: {
    marginLeft: Metrics.HEIGHT * 0.015,
    borderRadius: 3,
    backgroundColor: '#E91E63',
    alignItems: 'center',
    width: Metrics.WIDTH * 0.5
  },

  sendText: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.robotoRegular,
    paddingVertical: Metrics.HEIGHT * 0.02
  },

  nearbyTitleView: {
    paddingTop: Metrics.WIDTH * 0.05,
    paddingHorizontal: Metrics.WIDTH * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  viewAllText: {
    color: '#E91E63',
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.robotoRegular
  },

  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: Metrics.HEIGHT * 0.014,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: Colors.snow,
    paddingBottom: Metrics.HEIGHT * 0.02,
    marginHorizontal: Metrics.HEIGHT * 0.01
  },

  listMainview: {
    width: Metrics.WIDTH * 0.46,
    backgroundColor: Colors.snow,
    borderRadius: Metrics.HEIGHT * 0.005,
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderColor: '#bec1c2'
  },

  placeImg: {
    width: Metrics.WIDTH * 0.46,
    height: Metrics.HEIGHT * 0.3,
    borderRadius: 2
  },

  placeName: {
    color: '#263238',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14),
    paddingHorizontal: 5,
    paddingTop: 5
  },

  placeCity: {
    color: '#E91E63',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(13),
    marginTop: 5,
    paddingHorizontal: 5,
    paddingBottom: 5
  },

  bookTripBg: {
    height: Metrics.HEIGHT * 0.1,
    width: Metrics.WIDTH,
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center'
  },

  bookTripText: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.robotoRegular
  }
});

export default styles;
