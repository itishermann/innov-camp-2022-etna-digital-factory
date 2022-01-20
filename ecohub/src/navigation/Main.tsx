import { createStackNavigator } from '@react-navigation/stack';
import { Home, Onboard, Auth } from '../views';
import React from 'react';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="onboard" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="onboard" component={Onboard} />
      <Stack.Screen name="auth" component={Auth} />
    </Stack.Navigator>
  );
};

export default MainNavigator;