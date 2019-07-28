import { Platform, StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../Themes';

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },

  HeaderBg: {
    backgroundColor: '#e91e63'
  },

  leftheader: {
    flex: 1
  },

  body: {
    flex: 3
  },

  right: {
    flex: 1
  },

  headertitle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#ffffff',
    fontWeight: 'normal',
    fontFamily: Fonts.type.robotoRegular,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(20)
      },
      android: {
        fontSize: Fonts.moderateScale(20)
      }
    })
  },

  mainrenderview: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.87
      },
      android: {
        height: Metrics.HEIGHT * 0.85
      }
    })
  },

  mainimgbg: {
    marginTop: Metrics.HEIGHT * 0.02,
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.27
      },
      android: {
        height: Metrics.HEIGHT * 0.32
      }
    }),
    borderRadius: 2,
    width: Metrics.WIDTH * 0.94,
    justifyContent: 'center'
  },

  mainimgbgimgoverlay: {
    marginTop: Metrics.HEIGHT * 0.02,
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.27
      },
      android: {
        height: Metrics.HEIGHT * 0.32
      }
    }),
    borderRadius: 2,
    width: Metrics.WIDTH * 0.94,
    justifyContent: 'center'
  },

  imagoverlay: {
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.27
      },
      android: {
        height: Metrics.HEIGHT * 0.32
      }
    }),
    borderRadius: 2,
    width: Metrics.WIDTH * 0.94,
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    top: Metrics.HEIGHT * 0.01
  },

  destinationname: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(15)
  },

  places: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(12)
  }
});

export default styles;
