import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/colors';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AuthenticatedStack from './AuthenticatedStack';

const Stack = createNativeStackNavigator();

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

export default AuthStack;
