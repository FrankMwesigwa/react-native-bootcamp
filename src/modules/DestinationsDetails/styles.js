import { Platform, StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../Themes';

const styles = StyleSheet.create({
  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: 'transparent',
    flexDirection: 'column'
  },

  imgContainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.4
  },

  imagoverlay: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.4,
    position: 'absolute',
    bottom: 0
  },

  left: {
    flex: 1
  },

  body: {
    flex: 3,
    alignItems: 'center'
  },

  right: {
    flex: 1
  },

  backArrow: {
    marginLeft: Metrics.HEIGHT * 0.01,
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  title: {
    marginTop: 2,
    color: 'white',
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.SFUIDisplaySemibold
  },

  header: {
    backgroundColor: 'transparent',
    height: 65,
    width: Metrics.WIDTH,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    marginTop: Metrics.HEIGHT * 0.01,
    elevation: 0
  },

  destinationname: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(25)
  },

  destinationNamemain: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: Metrics.HEIGHT * 0.07
  },

  places: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(13)
  },

  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: Metrics.HEIGHT * 0.014,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
    paddingBottom: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.01,
    marginRight: Metrics.HEIGHT * 0.01
  },

  listMainview: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.345,
        width: Metrics.WIDTH * 0.47
      },
      android: {
        height: Metrics.HEIGHT * 0.382,
        width: Metrics.WIDTH * 0.47
      }
    }),
    backgroundColor: '#fff',
    borderRadius: Metrics.HEIGHT * 0.005,
    marginBottom: Metrics.HEIGHT * 0.015,
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderColor: '#bec1c2'
  },

  destinationimg: {
    width: Metrics.WIDTH * 0.47,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.27,
        borderRadius: 1.8
      },
      android: {
        height: Metrics.HEIGHT * 0.3,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
      }
    })
  },

  destinationnamelist: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14),
    color: '#1d262a',
    paddingTop: Metrics.HEIGHT * 0.01,
    paddingLeft: Metrics.HEIGHT * 0.01
  },

  mexicotext: {
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(12),
    color: '#e63575',
    paddingLeft: Metrics.HEIGHT * 0.01,
    paddingTop: Metrics.HEIGHT * 0.004
  }
});

export default styles;
