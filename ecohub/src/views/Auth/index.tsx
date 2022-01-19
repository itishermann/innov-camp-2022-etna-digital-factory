import React from 'react';
import { Box, Center, Heading, Text, useToken } from "native-base";
import Login from "./Login";
import Register from "./Register";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Auth = () => {
  return (
    <Box flex={1}>
      <LinearGradient
        colors={['#4D8D6E', '#5FB288']}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
      >
      <Center safeAreaTop minH={40} p={1}>
        <Heading color='white' fontSize='52' fontWeight={'semibold'}>ECOHUB</Heading>
        <Text color='white' fontSize={'15'} fontWeight='medium'>Consomer Durablement</Text>
      </Center>
      </LinearGradient>
      <Tab.Navigator
        initialRouteName="auth.login"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: useToken('colors', 'white'),
          },
          tabBarIndicatorStyle: {
            backgroundColor: useToken('colors', 'tertiary.700'), // mintGreen.600 not really convenient to use on a white background
          },
          tabBarActiveTintColor: useToken('colors', 'tertiary.700'),
        }}
        initialLayout={{
          width: Dimensions.get('window').width,
        }}>
        <Tab.Screen
          name="auth.login"
          options={{
            title: 'Se connecter',
            tabBarLabel: ({ focused, color }) => (
              <Text fontSize="xs" mt={1} textAlign="center" color={color}>
                Se connecter
              </Text>
            ),
          }}
          component={Login}
        />
        <Tab.Screen
          name="auth.register"
          options={{
            title: 'Démarrer',
            tabBarLabel: ({ focused, color }) => (
              <Text fontSize="xs" mt={1} textAlign="center" color={color}>
                Démarrer
              </Text>
            ),
          }}
          component={Register}
        />
      </Tab.Navigator>
    </Box>
  );
}

export default Auth;