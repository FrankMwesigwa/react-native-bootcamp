import { Platform, StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../Themes';

const styles = StyleSheet.create({
  mainview: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.93
      },
      android: {
        height: Metrics.HEIGHT * 0.91
      }
    }),
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

  mainprofilenamebg: {
    width: Metrics.WIDTH,
    flexDirection: 'row'
  },

  profileBgImg: {
    height: Metrics.HEIGHT * 0.2,
    width: Metrics.WIDTH * 0.35,
    marginLeft: Metrics.HEIGHT * 0.015,
    marginTop: Metrics.HEIGHT * 0.029,
    borderRadius: 3
  },

  locationIcon: {
    alignSelf: 'center',
    paddingLeft: Metrics.HEIGHT * 0.02,
    paddingTop: Metrics.HEIGHT * 0.03
  },

  mexicotext: {
    alignSelf: 'center',
    paddingTop: Metrics.HEIGHT * 0.03,
    color: '#e00051',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(13)
  },

  nameofdestination: {
    color: '#000000',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(18),
    paddingLeft: Metrics.HEIGHT * 0.023,
    width: Metrics.WIDTH * 0.6
  },

  clockIcon: {
    alignSelf: 'center',
    paddingLeft: Metrics.HEIGHT * 0.02,
    paddingTop: Metrics.HEIGHT * 0.01
  },

  clockdaystext: {
    alignSelf: 'center',
    paddingTop: Metrics.HEIGHT * 0.01,
    color: '#757575',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(13),
    paddingLeft: Metrics.HEIGHT * 0.002
  },

  dividerhorizontal: {
    backgroundColor: '#dcdcdc',
    height: 1,
    width: Metrics.WIDTH,
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.02
      },
      android: {
        marginTop: Metrics.HEIGHT * 0.03
      }
    })
  },

  mainrenderdetailbg: {
    marginTop: Metrics.HEIGHT * 0.02,

    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.55
      },
      android: {
        height: Metrics.HEIGHT * 0.5
      }
    }),
    marginBottom: Metrics.HEIGHT * 0.02
  },

  YourDetails: {
    color: '#1d262a',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(18),
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(16)
      },
      android: {
        fontSize: Fonts.moderateScale(18)
      }
    }),
    fontWeight: 'bold'
  },

  infoBgView: {
    backgroundColor: '#f5f5f5',
    marginTop: Metrics.HEIGHT * 0.002
  },

  infoBgViewaddress: {
    backgroundColor: '#f5f5f5',
    marginTop: Metrics.HEIGHT * 0.01,
    flexDirection: 'row'
  },

  infoText: {
    fontSize: Fonts.moderateScale(14),
    color: '#767676',
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

  infoTextaddress: {
    fontSize: Fonts.moderateScale(14),
    color: '#767676',
    fontWeight: '400',
    ...Platform.select({
      ios: {
        padding: 11
      },
      android: {
        padding: 13
      }
    }),
    fontFamily: Fonts.type.robotoRegular,
    width: Metrics.WIDTH * 0.87
  },

  infoBgViewMrSec: {
    backgroundColor: '#f5f5f5',
    marginTop: Metrics.HEIGHT * 0.014,
    width: Metrics.WIDTH * 0.45,
    flexDirection: 'row'
  },

  infoBgViewAgeSec: {
    backgroundColor: '#f5f5f5',
    marginTop: Metrics.HEIGHT * 0.014,
    width: Metrics.WIDTH * 0.49,
    flexDirection: 'row',
    marginLeft: Metrics.HEIGHT * 0.01
  },

  dividerhorizontalYoursDetails: {
    backgroundColor: '#dcdcdc',
    height: 1,
    width: Metrics.WIDTH,
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.02
      },
      android: {
        marginTop: Metrics.HEIGHT * 0.035
      }
    })
  },

  YourDetailsMain: {
    marginLeft: Metrics.HEIGHT * 0.012,
    marginRight: Metrics.HEIGHT * 0.012
  },

  YourDetailsMainAddress: {
    marginLeft: Metrics.HEIGHT * 0.012,
    marginRight: Metrics.HEIGHT * 0.012,
    marginTop: Metrics.HEIGHT * 0.04
  },

  dropdwoncontainer: {
    width: Metrics.WIDTH * 0.42,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: Metrics.HEIGHT * 0.01,
    paddingLeft: Metrics.HEIGHT * 0.02,
    color: '#767676'
  },

  smalldownicon: {
    alignSelf: 'center'
  },

  infoBgViewdropdownmain: {
    backgroundColor: '#f5f5f5',
    marginTop: Metrics.HEIGHT * 0.01,
    flexDirection: 'row'
  },

  dropdwoncontainerstyle: {
    width: Metrics.WIDTH * 0.95,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: Metrics.HEIGHT * 0.01,
    paddingLeft: Metrics.HEIGHT * 0.02,
    color: '#767676'
  },

  creatacoountmain: {
    backgroundColor: '#e91e63',

    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.07
      },
      android: {
        height: Metrics.HEIGHT * 0.1
      }
    }),

    justifyContent: 'center',
    width: Metrics.WIDTH,
    alignSelf: 'center'
  },

  creataccounttext: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(15)
  }
});

export default styles;
