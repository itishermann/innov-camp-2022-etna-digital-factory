import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Text, Box, FormControl, Input, CheckIcon, Select, Stack, Button, Spacer, Pressable, Heading, HStack, Icon } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import { useAppDispatch } from '@store';
import { addAppliance } from '@store/appliance.slice';

const ApplianceComplementaryInfos = () => {
  const navigation = useNavigation();
  let [service, setService] = React.useState("");
  const route = useRoute();
  // @ts-expect-error - could not find a type for this for now (see above)
  const appliance = route.params?.appliance as Appliance;
  const dispatch = useAppDispatch();
  return (
    <Box flex={1} >
      <Stack space={5} flex={1}>
        <Box mx={2} my={1} rounded={'sm'} bg='white' shadow={'1'} >
          <HStack space={2} >
            <Image source={{ uri: appliance.image }} style={{ width: 100, height: 100, resizeMode: 'contain' }} alt='placeholder' />
            <Stack style={{ minWidth: Dimensions.get('screen').width - 125, maxWidth: Dimensions.get('screen').width - 125 }} p={1}>
              <Text bold isTruncated style={{ maxWidth: Dimensions.get('screen').width - 135, minWidth: Dimensions.get('screen').width - 135 }} pr={2}>{appliance.name}</Text>
              <Text fontSize={'xs'}>Disponible depuis: {moment(appliance.releaseDate).format('LL')}</Text>
              <HStack space={3} justifyContent='space-evenly' alignItems={'center'} maxW={'90%'}>
                <Stack alignItems={'center'} flex={1}>
                  <Icon
                    as={MaterialCommunityIcons}
                    color={appliance.maintenance.tutorials.length > 0 ? 'success.500' : 'warning.500'}
                    name={appliance.maintenance.tutorials.length > 0 ? 'check-circle' : 'close-circle'} />
                  <Text textAlign={'center'} fontSize={"xs"}>Tutoriels</Text>
                </Stack>
                <Stack alignItems={'center'} flex={1}>
                  <Icon
                    as={MaterialCommunityIcons}
                    color={appliance.maintenance.spareParts.length > 0 ? 'success.500' : 'warning.500'}
                    name={appliance.maintenance.spareParts.length > 0 ? 'check-circle' : 'close-circle'} />
                  <Text textAlign={'center'} fontSize={"xs"}>Pièces</Text>
                </Stack>
                <Stack alignItems={'center'} flex={1}>
                  <Heading>{appliance.maxLifespan}</Heading>
                  <Text textAlign={'center'} fontSize={"xs"}>Longevité</Text>
                </Stack>
              </HStack>
            </Stack>
          </HStack>
        </Box>
        <FormControl px={5}>
          <FormControl.Label>Date d'achat</FormControl.Label>
          <Input placeholder="Entrez la date d'achat" />
        </FormControl>
        <FormControl px={5}>
          <FormControl.Label>Etat de votre appareil</FormControl.Label>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choissez l'etat de votre appareil"
            placeholder="Choissez l'etat de votre appareil"
            _selectedItem={{
              bg: '#4D8D6E',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Neuf(ve)" value="new" />
            <Select.Item label="Occasion" value="old" />
          </Select>
        </FormControl>
        <Spacer />
        <Button variant={'solid'}
          minW='80%'
          size={'lg'}
          h={'12'}
          colorScheme='emerald'
          rounded={'full'}
          mx={5}
          mb={5}
          shadow={1} 
          _text={{ bold: true }}
          onPress={() => {
            dispatch(addAppliance({...appliance, addedOn: moment().toISOString(), purchaseDate: moment().subtract( Math.floor(Math.random() * (appliance.maxLifespan - 2)) + 1, 'year').toISOString()}));
            navigation.navigate('home', { screen: 'appliances' });
          }}
          >
            Ajouter l'appareil
          </Button>
      </Stack>
    </Box>
  );
};

export default ApplianceComplementaryInfos;
