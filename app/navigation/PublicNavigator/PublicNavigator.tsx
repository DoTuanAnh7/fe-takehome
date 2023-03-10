import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import RegisterScreen from '../../screens/RegisterScreen';
import LoginScreen from '../../screens/LoginScreen';
// import EnterEmailCode from '../../screens/EnterEmailCode';
// import RecoveryScreen from '../../screens/RecoveryScreen';
// import EnterRecoveryCode from '../../screens/EnterRecoveryCode';
// import ResetPassword from '../../screens/ResetPassword';
import Dashboard from '../../screens/Dashboard';


const Stack = createStackNavigator();

export const PublicNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={'LoginScreen'}
      screenOptions={{
        animationEnabled: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="RecoveryScreen"
        component={RecoveryScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="EnterRecoveryCode"
        component={EnterRecoveryCode}
      /> */}
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="ResetPassword"
        component={ResetPassword}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="EnterEmailCode"
        component={EnterEmailCode}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="EnterEmailCode"
        component={EnterEmailCode} */}
      {/* /> */}
    </Stack.Navigator>
  );
};
