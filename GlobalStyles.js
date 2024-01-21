import { Platform, StyleSheet } from 'react-native';
import Colors from './src/constants/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

/* fonts */
// export const FontFamily = {
//   trendHMSans: "Trend HM Sans",
//   tradeGothicLTLight: "TradeGothic LT Light",
//   lucidaGrande: "Lucida Grande",
//   gilroyRegular: "Gilroy-Regular",
//   gilroyBold: "Gilroy-Bold",
// };



/* font sizes */
export const FontSize = {
  size_base: 13,
};



/* Colors */
export const Color = {
  colorWhite: "#fff",
  colorGray_100: "#fffdfd",
  colorGray_200: "rgba(26, 25, 25, 0)",
  colorSteelblue: "#1e62a9",
};



const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  bottomButton: {
    backgroundColor: Colors.primary100,
    paddingVertical: 16,
    borderRadius: 8,
  },
  bottomButtonText: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  onboardingImage: {
    width: 200,
    height: 200,
  },

  // skip1: {
  //   fontFamily: FontFamily.tradeGothicLTLight,
  // },
  // text: {
  //   fontFamily: FontFamily.lucidaGrande,
  // },
  skip: {
    top: 48,
    left: 278,
    fontSize: 14,
    textAlign: "left",
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "absolute",
  },
  nextContainer: {
    alignItems: 'center',
    paddingRight: wp('10%'), 
    bottom: 35,
    left: 0,
    right: 0,
  },
  nextButton: {
    backgroundColor: Colors.accent100,
    borderRadius: 5,
    paddingVertical: hp('1%'), 
    width: wp('80%'), 
    justifyContent:'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: Color.colorWhite,
    fontSize: wp('5%'), 
    fontWeight: "bold",
    // fontFamily: FontFamily.gilroyRegular,
    textAlign:'center',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 200,
  },
  doneContainer: {
    alignItems: 'center',
    paddingRight: wp('10%'), 
    bottom: 35,
    left: 0,
    right: 0,
  },
  doneButton: {
    backgroundColor: Colors.accent100,
    borderRadius: 5,
    paddingVertical: hp('1%'), 
    width: wp('80%'), 
    justifyContent:'center',
    alignItems: 'center',
  },
  doneButtonText: {
    color: Color.colorWhite,
    fontSize: wp('5%'), 
    fontWeight: "bold",
    // fontFamily: FontFamily.gilroyRegular,
    textAlign:'center',
  },

  onboardingPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  onboardingImage: {
    width: 200, 
    height: 200, 
  },
  textContainer: {
    position: "absolute",
    top: -200, 
    alignItems: "center",
  },
  onboardingTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },

  header:{
    marginLeft: "80%",
  },
  knowWhenBeers: {
    top: 15,
    fontStyle: "italic",
    opacity: 0.5,
    // fontFamily: FontFamily.tradeGothicLTLight,
    fontSize: FontSize.size_base,
  },
  knowWhenBeersPosition: {
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "relative",
    left: -60,
  },
  knowWhenBeersw: {
    top: 15,
    fontStyle: "italic",
    opacity: 0.5,
    // fontFamily: FontFamily.tradeGothicLTLight,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "relative",
    left: -110,
  },
  knowWhenBeersWhenReleased: {
    top: 15,
    fontStyle: "italic",
    opacity: 0.5,
    // fontFamily: FontFamily.tradeGothicLTLight,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "relative",
    left: -130,
  },
  AddSomePersonality: {
    top: 15,
    fontStyle: "italic",
    opacity: 0.5,
    // fontFamily: FontFamily.tradeGothicLTLight,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "relative",
    left: -115,
  },

  customizedPushNoti: {
    top: 20,
    fontSize: 20,
    lineHeight: 32,
    // fontFamily: FontFamily.trendHMSans,
    width: 343,
    height: 70,
    fontWeight:"bold",
  },

  TakePhoto: {
    top: 20,
    fontSize: 20,
    lineHeight: 32,
    // fontFamily: FontFamily.trendHMSans,
    width: 343,
    height: 100,
    fontWeight:"bold",
  },
  CheckIn: {
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "relative",
    left: -60,
  },
  CheckInAno: {
    top: 20,
    fontSize: 20,
    lineHeight: 32,
    // fontFamily: FontFamily.trendHMSans,
    width: 343,
    height: 35,
    fontWeight:"bold",
  },
  TellYour: {
    top: 15,
    fontStyle: "italic",
    opacity: 0.5,
    // fontFamily: FontFamily.tradeGothicLTLight,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "relative",
    left: -105,
  },

});

export default styles;
