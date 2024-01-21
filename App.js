import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
// import AppLoading from "expo-app-loading";
import Header from "./src/components/UI/Texts/Header";

// import "expo-system-ui";
import SplashScreen from "react-native-splash-screen";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
import { useFonts } from "expo-font";
import * as Font from "expo-font";

import Onboarding from "react-native-onboarding-swiper";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import styles from './GlobalStyles';

import Colors from "./src/constants/colors";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

import WelcomeScreen from "./src/screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        contentStyle: {
          backgroundColor: Colors.primary200,
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="AuthenticatedStack"
        component={AuthenticatedStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>

    // <Drawer.Navigator
    //   screenOptions={{
    //     headerStyle: { backgroundColor: Colors.primary200 },
    //   }}
    // >
    //   <Drawer.Screen name="Menu" component={MenuScreen} />
    //   <Drawer.Screen name="Main" component={MainStack} />
    // </Drawer.Navigator>
  );
}

function MainStack() {
  return;
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: "white",
      contentStyle: { backgroundColor: Colors.primary100 },
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
  </Stack.Navigator>;
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

const Next = ({ ...props }) => (
  <View style={styles.nextContainer}>
    <TouchableOpacity style={styles.nextButton} {...props}>
      <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  </View>

  // <PrimaryButton style={styles.nextContainer}>NExt</PrimaryButton>
);

const CustomDoneButton = ({ ...props }) => (
  <View style={styles.doneContainer}>
    <TouchableOpacity style={styles.doneButton} {...props}>
      <Text style={styles.doneButtonText}>Log In</Text>
    </TouchableOpacity>
  </View>
);

const Dots = ({ selected }) => (
  <View
    style={[
      styles.dot,
      {
        backgroundColor: selected ? Colors.primary100 : Colors.primary200,
      },
    ]}
  />
);

export default function App() {
  useEffect(() => {
    const hideSplash = async () => {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 500);
    };
  hideSplash();
}, []);


useEffect(()=>{
  setTimeout(()=>{
    SplashScreen.hide()
  }, 500)
})
const [fontsLoaded] = useFonts({
  gilroyRegular: require('./src/assets/fonts/Gilroy-Regular.ttf'),
  gilroyBold: require('./src/assets/fonts/Gilroy-Bold.ttf'),
  tradeGothicLTLight: require('./src/assets/fonts/TradeGothic LT Regular.ttf'),
});

  const [showOnboarding, setShowOnboarding] = useState(true);
  
  // useEffect(() => {
  //   loadFontsAndHideSplash();
  // }, [fontsLoaded]);


  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  if (showOnboarding) {
    return (
      <LinearGradient
        colors={[Colors.primary300, Colors.primary200]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./src/assets/images/_7D_2535.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
            <View>
              <Text style={styles.skip}>
                <Text style={styles.skip1}>{`Skip `}</Text>
                <Text style={styles.text}>→</Text>
              </Text>
            </View>
  
            <Onboarding
            onSkip={() => setShowOnboarding(true)}
            pages={[
              
              
              {
                backgroundColor: "transparent",
                  image: (
                    <View>
                     <View style={styles.textContainer}>
                        <Text style={[styles.TakePhoto, styles.knowWhenBeersPosition]}>
                          CUSTOMIZED PUSH NOTIFICATIONS FOR EVERY ACCOUNT
                        </Text>
                        <Text style={[styles.knowWhenBeersWhenReleased]}>
                          Know when beers are released
                         </Text>
                     </View>
                 
                   <Image
                      source={require("./src/assets/images/notifications.png")}
                      contentFit="cover"
                      style={styles.onboardingImage}
                    />
                    </View>
                  ),

              },

              {

              backgroundColor: "transparent",
              image: (
                <View>
                 <View style={styles.textContainer}>
                    <Text style={[styles.customizedPushNoti, styles.knowWhenBeersPosition]}>
                      TAKE PHOTOS AND ADD EXCLUSIVE PHOTO FRAMES
                    </Text>
                    <Text style={[styles.AddSomePersonality]}>
                   Add some personality to your shots
                     </Text>
                 </View>
             
               <Image
                  source={require("./src/assets/images/notifications2.png")}
                  contentFit="cover"
                  style={styles.onboardingImage}
                />
                </View>
              ),
              },
              {
                backgroundColor: "transparent",
                image: (
                  <View>
                   <View style={styles.textContainer}>
                      <Text style={[styles.CheckIn, styles.CheckInAno]}>
                      CHECK-IN ON SOCIAL                                         </Text>
                      <Text style={[styles.CheckIn, styles.CheckInAno]}>
                      MEDIA. YUP, INCLUDING
                      </Text>
                      <Text style={[styles.CheckIn, styles.CheckInAno]}>
                      UPTAPPD
                      </Text>
                      <Text style={[styles.TellYour]}>
                     Tell your people when you're at Moksa
                       </Text>
                   </View>
               
                 <Image
                    source={require("./src/assets/images/notifications3.png")}
                    contentFit="cover"
                    style={styles.onboardingImage}
                  />
                </View>
                ),
                },
              

            ]}
            onDone={() => setShowOnboarding(false)}
            skipLabel=""
            // nextLabel="" // Empty string to hide the next button
            bottomBarHighlight={false}
            bottomBarHeight={60}
            NextButtonComponent={Next}
            DotComponent={Dots}
            DoneButtonComponent={CustomDoneButton}
          />

          
          {/* <Onboarding
            onSkip={() => setShowOnboarding(false)}
            pages={onboardingPages}
            onDone={() => setShowOnboarding(false)}
            skipLabel=""
            bottomBarHighlight={false}
            bottomBarHeight={60}
            NextButtonComponent={Next}
            DotComponent={Dots}
            DoneButtonComponent={CustomDoneButton}
          /> */}

          
        </ImageBackground>
      </LinearGradient>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary300, Colors.primary200]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./src/assets/images/_7D_2535.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.safeAreaView}>
            {/* <BackgrounOverlay> */}
            <Navigation />
            {/* <AuthContent /> */}
            {/* </BackgrounOverlay> */}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}
