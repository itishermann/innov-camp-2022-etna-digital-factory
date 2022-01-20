import React from 'react';
import { Google, Apple, Twitter, Facebook } from '../../../assets/svg';
import { useNavigation } from '@react-navigation/native';
import { useDisclose, Box, Stack, Heading, Input, Icon, IconButton, Spacer, HStack, Text, Button  } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Register = () => {
  const navigation = useNavigation();
  const passwordShown = useDisclose();
  return (
    <Box flex={1} mt={5} alignItems='center'>
      <Stack space={7}>
      <Heading fontWeight={'semibold'} fontSize='20' textAlign={'center'}>Construisons un avenir durable</Heading>
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
        placeholder="Répeter le mot de passe" bg={'white'} minW='80%' size="lg" shadow={9} h={'12'} /></Box>
        <Text textAlign={'right'} minW='80%'>Mot de passe oublié ?</Text>
        <Box>
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
          Rejoindre la communauté
        </Button>
        <Box alignItems={'center'} mt={2}>
        <Text fontSize={'xs'}>En continuant, vous acceptez nos</Text>
        <HStack><Text fontSize={'xs'} color={'#4D8D6E'} bold>Conditions d'utilisation </Text><Text fontSize={'xs'}>et</Text><Text fontSize={'xs'} bold color={'#4D8D6E'}> Politique de confidentialité.</Text></HStack>
        </Box>
        </Box>
        </Stack>
        <Spacer />
        <Box alignItems={'center'}>
        <HStack>
          <Text textAlign={'center'}>ou continuer avec</Text>
        </HStack>
        <Stack space={2} safeAreaBottom mt={3}>
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

export default Register;
