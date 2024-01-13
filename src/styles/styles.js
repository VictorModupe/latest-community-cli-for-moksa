import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

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
  // onboardingImage: {
  //   width: 200,
  //   height: 200,
  // },
  nextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 25,
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: Colors.accent100,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 180,
    // marginRight: 175,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "gilroy",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 200,
  },
  doneContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16, // Adjust the margin as needed
  },
  doneButton: {
    backgroundColor: Colors.accent100,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  doneButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "gilroy",
  },

  onboardingPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  onboardingImage: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },
  textContainer: {
    position: "absolute",
    top: 20, // Adjust the top position as needed
    alignItems: "center",
  },
  onboardingTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  onboardingSubtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});

export default styles;