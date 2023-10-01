import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from 'C:/Users/GWTC/Desktop/SaludMovil/src/screens/SignIn/LogIn';
import SignUp from 'C:/Users/GWTC/Desktop/SaludMovil/src/screens/SignUp/SignUp';
import ConfirmEmail from '../screens/ConfirmEmail';
import ForgotPassword from '../screens/ForgotPassword';
import NewPassword from '../screens/NewPassword';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name= "SignIn" component= {LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




export default Navigation