import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppDispatch } from '@store';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import { Box, Text, ScrollView, Progress, Stack, Image, Pressable, HStack, IconButton, Button, Icon } from 'native-base';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { removeAppliance } from '@store/appliance.slice';

enum ApplianceType {
  fridge = 'FRIDGE',
  oven = 'OVEN',
  dishwasher = 'DISHWASHER',
  washingMachine = 'WASHING_MACHINE',
  dryer = 'DRYER',
  unknown = 'UNKNOWN',
}

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // @ts-expect-error - could not find a type for this for now (see above)
  const appliance = route.params?.appliance as Appliance;
  const dispatch = useAppDispatch();
  return (
    <Box flex={1}>
      <ScrollView px={1} pt={5}>
        <Stack space={3}>
          <Box mx={3} alignItems={'center'} rounded="full">
            <Image source={{ uri: appliance.image }} rounded='full' style={{ width: 100, height: 100, resizeMode: 'contain' }} alt='placeholder' />
          </Box>
          <Box mx={3}>
            <Text fontSize={"xs"}>
              {appliance.type === ApplianceType.dishwasher ? 'Lave-vaisselle' : appliance.type === ApplianceType.dryer ? 'sèche-linge' : appliance.type === ApplianceType.fridge ? 'Refrigerateur' : appliance.type === ApplianceType.oven ? 'Four' : appliance.type === ApplianceType.washingMachine ? 'Lave-linge' : ''}
            </Text>
            <Text bold isTruncated fontSize={"xs"} style={{ marginTop: -5 }}>{appliance.name}</Text>
          </Box>
          <Box mx={3}>
            <Text fontSize={"xs"}>Durée de vie moyenne</Text>
            <Progress colorScheme="emerald" value={((appliance.maxLifespan - moment().diff(moment(appliance.purchaseDate), 'years')) / appliance.maxLifespan) * 100} />
          </Box>
          <Box mx={3}>
            <Text fontSize={"xs"}>Prochaine maintenance recommandée</Text>
            <Text style={{ marginTop: -5 }} fontSize={"xs"} bold>{moment().day(3 + 7 + 7).format('LL')}</Text>
          </Box>
          <Box rounded={'md'} bg='white' shadow={3} pt={1} mx={3} mb={3}>
            <Text fontSize={"xs"} textAlign='center' bold>Pièces détachées</Text>
            {appliance.maintenance.spareParts.slice(0, 3).map((sparePart, index) => (
              <Pressable borderBottomWidth={1} borderBottomColor='muted.300' mb={1}>
                <HStack pr={5}>
                  <Image source={{ uri: sparePart.image }} style={{ width: 100, height: 100, resizeMode: 'contain' }} alt='placeholder' />
                  <Stack ml={2} maxW={'90%'} space={1} pt={1}>
                    <Text bold maxW={'90%'} fontSize={"2xs"}>{sparePart.name}</Text>
                    <Text fontSize={"2xs"} maxW={'90%'} numberOfLines={2}>{sparePart.description}</Text>
                    <HStack justifyContent={'space-between'} alignItems={'center'} >
                      <Text fontSize={"2xs"} ml={2}>{sparePart.price} €</Text>
                      <IconButton
                        _icon={{ as: MaterialCommunityIcons, name: 'cart-plus', size: 5, color: '#4D8D6E' }}
                        onPress={() => WebBrowser.openBrowserAsync(sparePart.url)}
                      />
                    </HStack>
                  </Stack>
                </HStack>
              </Pressable>
            ))}
            <Button variant={'unstyled'}>Voir plus</Button>
          </Box>
          <Box rounded={'md'} bg='white' shadow={3} pt={1} mx={3} mb={3}>
            <Text fontSize={"xs"} textAlign='center' bold>Tutoriels de maintenance</Text>
            {appliance.maintenance.tutorials.slice(0, 3).map((tutorial, index) => (
              <Pressable borderBottomWidth={1} borderBottomColor='muted.300' mb={1}>
                <HStack pr={5}>
                  <Image source={{ uri: tutorial.image }} style={{ width: 100, height: 100, resizeMode: 'contain' }} alt='placeholder' />
                  <Stack ml={2} maxW={'90%'} space={1} pt={1}>
                    <Text bold maxW={'90%'} fontSize={"2xs"}>{tutorial.image}</Text>
                    <Text fontSize={"2xs"} maxW={'90%'} numberOfLines={2}>{tutorial.description}</Text>
                    <Button
                      rightIcon={<Icon as={MaterialCommunityIcons} name='web' size={5} color='#4D8D6E' />}
                      onPress={() => WebBrowser.openBrowserAsync(tutorial.videoUrl)}
                      variant={'unstyled'}
                      _text={{ fontSize: 'xs', color: '#4D8D6E', textAlign: 'left' }}
                    >
                      Voir sur youtube
                    </Button>
                  </Stack>
                </HStack>
              </Pressable>
            ))}
            <Button variant={'unstyled'}>Voir plus</Button>
          </Box>
          <Button mb={6} variant={'ghost'} colorScheme='red' onPress={()=>{dispatch(removeAppliance(appliance.id)); navigation.navigate('home', { screen: 'appliances' });}}>Supprimer</Button>
        </Stack>
      </ScrollView>
    </Box>
  );
};

export default Details;
