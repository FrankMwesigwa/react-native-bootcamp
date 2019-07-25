import { Platform, StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../Themes';

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#f4f4f4'
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

  mainpaymentoption: {
    marginLeft: Metrics.HEIGHT * 0.02,
    marginRight: Metrics.HEIGHT * 0.02
  },

  paymentoptiontext: {
    color: '#212a2e',
    fontFamily: Fonts.type.robotoRegular,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(16),
        marginTop: Metrics.HEIGHT * 0.03
      },
      android: {
        fontSize: Fonts.moderateScale(18),
        marginTop: Metrics.HEIGHT * 0.04
      }
    })
  },

  paymentoptionbg: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.18,
        shadowOpacity: 0.5
      },
      android: {
        height: Metrics.HEIGHT * 0.2,
        shadowOpacity: 0.2
      }
    }),
    backgroundColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    marginTop: Metrics.HEIGHT * 0.01,
    borderRadius: 2
  },

  walletmainbg: {
    flexDirection: 'row',
    paddingLeft: Metrics.HEIGHT * 0.02,
    paddingRight: Metrics.HEIGHT * 0.02
  },

  wallettext: {
    color: '#212a2e',
    fontFamily: Fonts.type.robotoRegular,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(14),
        paddingTop: Metrics.HEIGHT * 0.043,
        paddingLeft: Metrics.HEIGHT * 0.01
      },
      android: {
        fontSize: Fonts.moderateScale(16),
        paddingTop: Metrics.HEIGHT * 0.043,
        paddingLeft: Metrics.HEIGHT * 0.01
      }
    }),
    width: Metrics.WIDTH * 0.51
  },

  currencytext: {
    color: '#e00051',
    fontFamily: Fonts.type.robotoMedium,
    paddingLeft: Metrics.HEIGHT * 0.002,
    fontSize: Fonts.moderateScale(16),
    paddingTop: Metrics.HEIGHT * 0.035,
    width: Metrics.WIDTH * 0.2
  },
  currencytextpay: {
    color: '#e00051',
    fontFamily: Fonts.type.robotoMedium,
    paddingLeft: Metrics.HEIGHT * 0.002,
    fontSize: Fonts.moderateScale(16),
    paddingTop: Metrics.HEIGHT * 0.02,
    textAlign: 'center'
  },

  mainbgbalance: {
    position: 'absolute',
    bottom: 10,
    paddingLeft: Metrics.HEIGHT * 0.024,
    flexDirection: 'row'
  },

  yourbalance: {
    color: '#626262',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(13),
    width: Metrics.WIDTH * 0.5
  },

  topupBalancetext: {
    color: '#e10856',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(13)
  },

  mainrenderview: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.45
      },
      android: {
        height: Metrics.HEIGHT * 0.42
      }
    }),
    marginTop: Metrics.HEIGHT * 0.01,
    flexDirection: 'row'
  },

  PayNowMainBg: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.18,
        shadowOpacity: 0.5
      },
      android: {
        height: Metrics.HEIGHT * 0.2,
        shadowOpacity: 0.2
      }
    }),
    backgroundColor: '#fff',
    width: Metrics.WIDTH * 0.92,
    alignSelf: 'center',
    marginBottom: Metrics.HEIGHT * 0.01,
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    marginTop: Metrics.HEIGHT * 0.015,
    borderRadius: 2
  },

  payNowMainView: {
    flexDirection: 'row',
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.02,
    marginRight: Metrics.HEIGHT * 0.02
  },

  RenderView: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.06,
        shadowOpacity: 0.5
      },
      android: {
        height: Metrics.HEIGHT * 0.075,
        shadowOpacity: 0.2
      }
    }),
    backgroundColor: '#fff',
    width: Metrics.WIDTH * 0.3,
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 2
  },

  mainpaynowbg: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.07
      },
      android: {
        height: Metrics.HEIGHT * 0.085
      }
    }),
    alignSelf: 'center',
    width: Metrics.WIDTH * 0.35,
    backgroundColor: '#e91e63',
    borderRadius: 2,
    position: 'absolute',
    right: 0,
    justifyContent: 'center'
  },

  mainpaynowbgTwo: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.07
      },
      android: {
        height: Metrics.HEIGHT * 0.085
      }
    }),
    alignSelf: 'center',
    width: Metrics.WIDTH * 0.35,
    backgroundColor: '#e91e63',
    borderRadius: 2,
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center'
  },

  PayNow: {
    fontFamily: Fonts.type.robotoMedium,
    color: '#fff',
    textAlign: 'center',
    fontSize: Fonts.moderateScale(16)
  },

  paywithmainbg: {
    position: 'absolute',
    bottom: 10,
    paddingLeft: Metrics.HEIGHT * 0.024,
    flexDirection: 'row'
  },

  paynowtextview: {
    color: '#626262',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(13),
    width: Metrics.WIDTH * 0.4,
    textAlign: 'right'
  },

  emailtext: {
    color: '#626262',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(13),
    width: Metrics.WIDTH * 0.45
  },

  paynowtextviewTwo: {
    color: '#626262',
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(13),
    width: Metrics.WIDTH * 0.4,
    textAlign: 'right'
  },

  paymentmethodmainbg: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.11,
        shadowOpacity: 0.5
      },
      android: {
        height: Metrics.HEIGHT * 0.12,
        shadowOpacity: 0.2
      }
    }),
    backgroundColor: '#fff',
    width: Metrics.WIDTH * 0.92,
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    alignSelf: 'center',
    position: 'absolute',
    bottom: Metrics.HEIGHT * 0.03,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 2,
    flexDirection: 'row'
  },

  addcircleicon: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: Metrics.HEIGHT * 0.04
  },

  AddAnotherpatmenttext: {
    color: '#000000',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(16),
    paddingLeft: Metrics.HEIGHT * 0.01,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

export default styles;
