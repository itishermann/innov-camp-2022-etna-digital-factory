import { Box, Text, Button, Icon, Heading, Stack, Input, HStack, Divider, Spacer, useDisclose, IconButton } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Google, Facebook, Apple, Twitter } from '../../../assets/svg';

const Login = () => {
  const navigation = useNavigation();
  const passwordShown = useDisclose();
  return (
    <Box flex={1} mt={5} alignItems='center'>
      <Stack space={7}>
      <Heading fontWeight={'semibold'} fontSize='20' textAlign={'center'}>Connectez-vous à votre compte</Heading>
        <Box shadow={1} maxW='80%'>
          <Input
            keyboardType="email-address"
            autoCompleteType="email"
            InputLeftElement={
              <Icon
                as={MaterialCommunityIcons}
                color="muted.400"
                name='email-outline'
                size={6}
                ml={2}
              />
            }
            variant="filled"
            placeholder="Email"
            bg={'white'}
            shadow={9}
            minW='80%'
            h={'12'}
            size="lg" />
        </Box>
        <Box shadow={1} maxW='80%'>
          <Input 
          secureTextEntry={!passwordShown.isOpen}
          InputLeftElement={
          <Icon
            as={MaterialCommunityIcons}
            color="muted.400"
            name='lock-outline'
            size={6}
            ml={2}
            h={'12'}
          />
        } 
        InputRightElement={
          <IconButton
            icon={<Icon as={MaterialCommunityIcons}
            color="muted.400"
            name={passwordShown.isOpen ? 'eye-off' : 'eye'}
            size={6}
            mr={2}
            h={'12'}/>}
            onPress={passwordShown.onToggle}
            colorScheme="muted"
            variant={'unstyled'}
          />
        } 
        variant="filled" 
        placeholder="Mot de passe" bg={'white'} minW='80%' size="lg" shadow={9} h={'12'} /></Box>
        <Text textAlign={'right'} minW='80%'>Mot de passe oublié ?</Text>
        <Button
          variant={'solid'}
          minW='80%'
          size={'lg'}
          h={'12'}
          colorScheme='emerald'
          rounded={'full'}
          shadow={1}
          _text={{ color: 'white' }}
          onPress={() => navigation.navigate('home')}>
          Se connecter
        </Button>
        </Stack>
        <Spacer />
        <Box alignItems={'center'}>
        <HStack>
          <Text textAlign={'center'}>ou continuer avec</Text>
        </HStack>
        <Stack space={2} safeAreaBottom mt={3} pb={5}>
          <HStack space={2}>
            <Button colorScheme='muted' leftIcon={<Google/>} bg={'white'} w={40} h={12} shadow={1}>Google</Button>
            <Button colorScheme='muted' leftIcon={<Apple/>} bg={'white'} w={40} h={12} shadow={1}>Apple</Button>
          </HStack>
          <HStack space={2}>
            <Button colorScheme='muted' leftIcon={<Twitter/>} bg={'white'} w={40} h={12} shadow={1}>Twitter</Button>
            <Button colorScheme='muted' leftIcon={<Facebook/>} bg={'white'} w={40} h={12} shadow={1}>Facebook</Button>
          </HStack>
        </Stack>
        </Box>
    </Box>
  );
};
export default Login;
