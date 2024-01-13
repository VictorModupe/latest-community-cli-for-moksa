// navigation/AuthenticatedStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/colors';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
        headerShown: false,
        presentation: 'modal',
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
}

export default AuthenticatedStack;
