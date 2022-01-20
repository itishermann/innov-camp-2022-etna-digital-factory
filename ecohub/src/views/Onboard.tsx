import { View, Text, Box, Center, Heading, Button, Stack, Spacer } from 'native-base';
import { Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Onboard = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      <Stack bg='tertiary.700' minH={96} justifyContent={'center'} pl={9}>
        <Text color='white' fontWeight={"semibold"} fontSize="2xl">Bienvenue à votre</Text>
        <Heading color='white' fontWeight={"semibold"} fontSize='52'>ECOHUB</Heading>
      </Stack>
      <Stack justifyContent={"center"} alignItems="center" flex="1" space={5}>
        <Button
          variant={'solid'}
          minW='70%'
          colorScheme='emerald'
          rounded={'full'}
          _text={{ bold: true }}
          onPress={() => navigation.navigate('auth', { screen: 'auth.register' })}>Démarrer</Button>
        <Button 
        variant={'outline'} 
        minW='70%' 
        colorScheme='emerald' 
        rounded={'full'} 
        _text={{ bold: true }} onPress={() => navigation.navigate('auth', { screen: 'auth.login' })}>Se connecter</Button>
      </Stack>
    </Box>
  );
};

export default Onboard;
