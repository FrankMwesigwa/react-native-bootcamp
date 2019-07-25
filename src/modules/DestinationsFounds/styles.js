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

  mainlistview: {
    width: Metrics.WIDTH,
    marginTop: Metrics.HEIGHT * 0.02
  },

  maindestinationNamebg: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.06
      },
      android: {
        height: Metrics.HEIGHT * 0.08
      }
    }),
    paddingLeft: Metrics.HEIGHT * 0.04,
    paddingRight: Metrics.HEIGHT * 0.04,
    borderRadius: 25,
    backgroundColor: '#e91e63',
    alignSelf: 'center',
    marginLeft: Metrics.HEIGHT * 0.01,
    marginRight: Metrics.HEIGHT * 0.01,
    justifyContent: 'center'
  },

  textdestinationName: {
    color: '#fff',
    fontFamily: Fonts.type.robotoRegular,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(15),
        paddingTop: Metrics.HEIGHT * 0.002
      },
      android: {
        fontSize: Fonts.moderateScale(16)
      }
    }),
    textAlign: 'center'
  },

  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
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
  },

  MainRenderTwoMain: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.8
      },
      android: {
        height: Metrics.HEIGHT * 0.75
      }
    }),
    marginTop: Metrics.HEIGHT * 0.02
  },

  MainRenderTwoMainHide: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.87
      },
      android: {
        height: Metrics.HEIGHT * 0.86
      }
    })
  }
});

export default styles;
