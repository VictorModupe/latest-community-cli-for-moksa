import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import "expo-system-ui";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import Onboarding from "react-native-onboarding-swiper";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Colors from "./src/constants/colors";
import LoginScreen from "./src/screens/LoginScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignupScreen from "./src/screens/SignupScreen";

// import AuthenticatedStack from "./src/navigation/AuthenticatedStack";
// import AuthStack from "./src/navigation/AuthStack";
// import MainStack from "./src/navigation/MainStack";
import styles from "./src/styles/styles";
import DoneButton from "./src/components/UI/Buttons/DoneButton";
import NextButton from "./src/components/UI/Buttons/NextButton";
// import Dots from "./src/components/Dots";



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
  const [fontsLoaded] = useFonts({
    gilroy: require("./src/assets/fonts/Gilroy-Regular.ttf"),
    "gilroy-bold": require("./src/assets/fonts/Gilroy-Bold.ttf"),
    tradeGothic: require("./src/assets/fonts/TradeGothic LT Regular.ttf"),
  });

  const [showOnboarding, setShowOnboarding] = useState(true);

  const loadFontsAndHideSplash = async () => {
    if (!fontsLoaded) {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.error("Error during font loading:", error);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
  };

  useEffect(() => {
    loadFontsAndHideSplash();
  }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  if (showOnboarding) {
    return (
      <LinearGradient
        colors={[Colors.primary300, Colors.primary300]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./src/assets/images/_7D_2535.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <Onboarding
            onSkip={() => setShowOnboarding(false)}
            pages={[
              {
                backgroundColor: "transparent",
                image: (
                  <Image
                    source={require("./src/assets/images/notifications.png")}
                    style={styles.onboardingImage}
                  />
                ),
                title: "CUSTOMIZED PUSH NOTIFICATIONS FOR EVERY ACCOUNT",
                subtitle: "Know when beers are released",

              },
              {
                backgroundColor: "transparent",
                image: (
                  <Image
                    source={require("./src/assets/images/notifications2.png")}
                    style={styles.onboardingImage}
                  />
                ),
                title: "TAKE PHOTOS AND ADD EXCLUSIVE PHOTO FRAMES",
                subtitle: "Add some personality to your shots",
              },
              {
                backgroundColor: "transparent",
                image: (
                  <Image
                    source={require("./src/assets/images/notifications3.png")}
                    style={styles.onboardingImage}
                  />
                ),
                title: "CHECK-IN ON SOCIAL MEDIA. YUP, INCLUDING UNTAPPD",
                subtitle: "Tell your people when you're at Moksa",
              },
              // Add more pages as needed
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

