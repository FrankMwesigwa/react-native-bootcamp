import { Platform, StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../Themes';

const styles = StyleSheet.create({
  mainview: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.91
      },
      android: {
        height: Metrics.HEIGHT * 0.9
      }
    }),
    backgroundColor: '#ffffff'
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

  PayNowMainBg: {
    ...Platform.select({
      ios: {
        shadowOpacity: 0.5
      },
      android: {
        shadowOpacity: 0.1
      }
    }),
    backgroundColor: '#fff',
    width: Metrics.WIDTH * 0.93,
    alignSelf: 'center',
    marginBottom: Metrics.HEIGHT * 0.01,
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    marginTop: Metrics.HEIGHT * 0.04,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#d9d9d9'
  },

  visacardtext: {
    color: '#636363',
    fontFamily: Fonts.type.robotoRegular,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(14),
        width: Metrics.WIDTH * 0.4
      },
      android: {
        fontSize: Fonts.moderateScale(16),
        width: Metrics.WIDTH * 0.43
      }
    })
  },

  visacardnumbertext: {
    color: '#191919',
    fontFamily: Fonts.type.robotoRegular,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(14)
      },
      android: {
        fontSize: Fonts.moderateScale(16)
      }
    }),
    fontWeight: 'bold'
  },

  horizontalDivider: {
    backgroundColor: '#f1f1f1',
    width: Metrics.WIDTH * 0.9,
    height: 1
  },

  cardInfoMainbg: {
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.02,
    marginRight: Metrics.HEIGHT * 0.02,

    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.5
      },
      android: {
        height: Metrics.HEIGHT * 0.4
      }
    })
  },

  cardInfotext: {
    color: '#191919',
    fontFamily: Fonts.type.robotoRegular,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(16)
      },
      android: {
        fontSize: Fonts.moderateScale(18)
      }
    })
  },

  infoBgView: {
    backgroundColor: '#f5f5f5',
    marginTop: Metrics.HEIGHT * 0.002
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

  infoTextnumber: {
    fontSize: Fonts.moderateScale(14),
    width: Metrics.WIDTH * 0.22,
    color: '#767676',
    fontWeight: '400',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: Metrics.HEIGHT * 0.033,
    fontFamily: Fonts.type.robotoRegular,
    ...Platform.select({
      ios: {
        padding: 11
      },
      android: {}
    })
  },

  caednumbertext: {
    color: '#191919',
    fontFamily: Fonts.type.robotoRegular,
    paddingTop: Metrics.HEIGHT * 0.02,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(14)
      },
      android: {
        fontSize: Fonts.moderateScale(16)
      }
    })
  },

  infoBgViewdate: {
    backgroundColor: '#f5f5f5',
    marginTop: Metrics.HEIGHT * 0.02,
    flexDirection: 'row'
  },

  infoTextdate: {
    fontSize: Fonts.moderateScale(14),
    width: Metrics.WIDTH * 0.4,
    color: '#767676',
    fontWeight: '400',
    ...Platform.select({
      ios: {
        padding: 11
      },
      android: {}
    }),

    fontFamily: Fonts.type.robotoRegular
  },

  infoTextCvv: {
    fontSize: Fonts.moderateScale(14),
    width: Metrics.WIDTH * 0.45,
    color: '#767676',
    fontWeight: '400',
    ...Platform.select({
      ios: {
        padding: 11
      },
      android: {}
    }),

    fontFamily: Fonts.type.robotoRegular
  },

  creatacoountmain: {
    backgroundColor: '#e91e63',

    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.07
      },
      android: {
        height: Metrics.HEIGHT * 0.083
      }
    }),
    justifyContent: 'center',
    width: Metrics.WIDTH * 0.93,
    alignSelf: 'center',
    borderRadius: 2
  },

  creataccounttext: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(15)
  }
});

export default styles;
