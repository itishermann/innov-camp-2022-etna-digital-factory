import { createStackNavigator } from '@react-navigation/stack';
import { Onboard, Auth,  Maintenances, Article } from '@views';
import { getHeaderTitle } from '@react-navigation/elements';
import HomeTab from './HomeTab';
import React from 'react';
import { Header } from '@components';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName="onboard" 
    screenOptions={{
      header: ({ navigation, route, options, back }) => {
        const title = getHeaderTitle(options, route.name);
        return (
          <Header
            title={title}
            navigation={navigation}
            back={back}
            style={options.headerStyle}
          />
        );
      },
    }}
    >
      <Stack.Screen name="home" options={{ headerShown: false }} component={HomeTab} />
      <Stack.Screen name="onboard" options={{ headerShown: false }} component={Onboard} />
      <Stack.Screen name="auth" options={{ headerShown: false }} component={Auth} />
      <Stack.Screen name="article" options={{ 
        title: 'Article',
        header: ({ navigation, route, options, back }) => {
          const title = getHeaderTitle(options, route.name);
          return (
          <Header
            title={title}
            navigation={navigation}
            back={back}
            style={options.headerStyle}
          />
          );
        } }} component={Article} />
      <Stack.Screen name="maintenance" component={Maintenances} />
    </Stack.Navigator>
  );
};

export default MainNavigator;