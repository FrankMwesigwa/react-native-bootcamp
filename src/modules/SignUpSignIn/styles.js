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
    height: Metrics.HEIGHT
  },

  left: {
    flex: 1
  },

  body: {
    flex: 2,
    alignItems: 'center'
  },

  backArrow: {
    marginLeft: Metrics.HEIGHT * 0.02,
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
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.01
      },
      android: {
        marginTop: Metrics.HEIGHT * 0.01
      }
    }),
    elevation: 0
  },

  mainbgsignupsignin: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: Metrics.WIDTH * 0.96,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.64
      },
      android: {
        height: Metrics.HEIGHT * 0.64
      }
    }),
    borderRadius: 2,
    marginTop: Metrics.HEIGHT * 0.2
  },

  segmentTabSecOne: {
    width: Metrics.WIDTH * 0.96,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.07
      },
      android: {
        height: Metrics.HEIGHT * 0.09,
        backgroundColor: 'transparent'
      }
    }),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: Metrics.HEIGHT * 0.003
  },

  segmentSelectedTabOne: {
    width: Metrics.WIDTH * 0.47,

    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.07
      },
      android: {
        height: Metrics.HEIGHT * 0.09
      }
    }),
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'transparent',
    borderWidth: 0
  },

  segmentTabOne: {
    width: Metrics.WIDTH * 0.47,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.07
      },
      android: {
        height: Metrics.HEIGHT * 0.09
      }
    }),
    backgroundColor: '#f1f5f7',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'transparent',
    borderWidth: 0
  },

  activeTabOne: {
    color: '#191919',
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(12)
      },
      android: {
        fontSize: Fonts.moderateScale(14)
      }
    }),

    fontFamily: Fonts.type.robotoRegular,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  normalTabOne: {
    color: '#afafaf',
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(12)
      },
      android: {
        fontSize: Fonts.moderateScale(14)
      }
    }),
    fontFamily: Fonts.type.robotoRegular,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  divider: {
    backgroundColor: '#f1f5f7',
    width: Metrics.WIDTH * 0.95,
    height: 1
  },

  infoText: {
    fontSize: Fonts.moderateScale(16),
    color: '#626262',
    fontWeight: '400',
    ...Platform.select({
      ios: {
        padding: 11
      },
      android: {
        padding: 13
      }
    }),
    fontFamily: Fonts.type.robotoRegular
  },

  infoBgView: {
    backgroundColor: '#f1f5f7',
    marginTop: Metrics.HEIGHT * 0.03,
    marginLeft: Metrics.HEIGHT * 0.015,
    marginRight: Metrics.HEIGHT * 0.015
  },

  usernamemain: {
    backgroundColor: '#f1f5f7',
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.015,
    marginRight: Metrics.HEIGHT * 0.015
  },

  mainrenderview: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.55
      },
      android: {
        height: Metrics.HEIGHT * 0.52
      }
    }),
    marginBottom: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.01
  },

  creatacoountmain: {
    backgroundColor: '#e91e63',
    marginTop: Metrics.HEIGHT * 0.02,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.07
      },
      android: {
        height: Metrics.HEIGHT * 0.083
      }
    }),
    justifyContent: 'center',
    width: Metrics.WIDTH * 0.91,
    alignSelf: 'center',
    borderRadius: 2
  },

  creataccounttext: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(15)
  },

  signupwithfacebooktext: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(15),
    paddingLeft: 3
  },

  creatacoountmainfacebook: {
    backgroundColor: '#3f569a',
    flexDirection: 'row',
    marginTop: Metrics.HEIGHT * 0.02,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.07
      },
      android: {
        height: Metrics.HEIGHT * 0.083
      }
    }),
    justifyContent: 'center',
    width: Metrics.WIDTH * 0.91,
    alignSelf: 'center',
    borderRadius: 2,
    alignItems: 'center'
  }
});

export default styles;
