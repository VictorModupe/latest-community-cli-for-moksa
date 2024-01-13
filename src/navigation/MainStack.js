import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/colors';
import WelcomeScreen from '../screens/WelcomeScreen';


const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: 'white',
      contentStyle: { backgroundColor: Colors.primary100 },
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
  </Stack.Navigator>
);



export default MainStack;
