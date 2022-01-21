import { useAppSelector } from '@store';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import { Box, FlatList, Text, HStack, Image, Stack, Progress, Button, Icon, VStack } from 'native-base';
import React from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

enum ApplianceType {
  fridge = 'FRIDGE',
  oven = 'OVEN',
  dishwasher = 'DISHWASHER',
  washingMachine = 'WASHING_MACHINE',
  dryer = 'DRYER',
  unknown = 'UNKNOWN',
}


const Applicances = () => {
  const navigation = useNavigation();
  const { appliances } = useAppSelector(state => state.appliance);
  return (
    <Box flex={1}>
      <FlatList
        data={appliances}
        renderItem={({ item }) => (
          <Box mx={2} my={1} rounded={'md'} bg='white' shadow={3}>
            <Stack>
              <HStack pr={5}>
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100, resizeMode: 'contain' }} alt='placeholder' />
                <Stack ml={2} maxW={'90%'} space={4}>
                  <Box>
                    <Text fontSize={"2xs"}>
                      {item.type === ApplianceType.dishwasher ? 'Lave-vaisselle' : item.type === ApplianceType.dryer ? 'sèche-linge' : item.type === ApplianceType.fridge ? 'Refrigerateur' : item.type === ApplianceType.oven ? 'Four' : item.type === ApplianceType.washingMachine ? 'Lave-linge' : ''}
                    </Text>
                    <Text bold isTruncated maxW={'90%'} fontSize={"2xs"} style={{ marginTop: -5 }}>{item.name}</Text>
                  </Box>
                  <Box>
                    <Text fontSize={"2xs"}>Durée de vie moyenne</Text>
                    <Progress colorScheme="emerald" maxW={'90%'} value={((item.maxLifespan - moment().diff(moment(item.purchaseDate), 'years')) / item.maxLifespan) * 100} />
                  </Box>
                  <Box>
                    <Text fontSize={"2xs"}>Prochaine maintenance recommandée</Text>
                    <Text style={{ marginTop: -5 }} fontSize={"2xs"} bold>{moment().day(3 + 7 + 7).format('LL')}</Text>
                  </Box>
                </Stack>
              </HStack>
              <VStack space={2} mt={1} p={3}>
                <HStack space={2}>
                  <Button
                    _text={{ color: 'white' }}
                    flex={1}
                    leftIcon={
                      <Icon
                        as={MaterialIcons}
                        name="settings"
                        color={'white'}
                      />
                    }
                    bg='#4D8D6E'>
                    Pièces
                  </Button>
                  <Button
                    _text={{ color: 'white' }}
                    leftIcon={
                      <Icon
                        as={MaterialCommunityIcons}
                        name="timeline-outline"
                        color={'white'}
                      />
                    }
                    flex={1}
                    bg='#4D8D6E'
                    onPress={() => navigation.navigate('maintenance', { maintenanceLogs: item.maintenance.logs })}>
                    Entretien
                  </Button>
                </HStack>
                <HStack space={2}>
                  <Button
                    onPress={() => navigation.navigate('details', { appliance: item })}
                    flex={1}
                    _text={{ color: 'white' }}
                    leftIcon={
                      <Icon
                        as={MaterialCommunityIcons}
                        name="information-outline"
                        color={'white'}
                      />
                    }
                    bg='#4D8D6E'>
                    Détails
                  </Button>
                  <Button 
                  _text={{ color: 'white' }}
                  leftIcon={
                      <Icon
                        as={MaterialIcons}
                        name="help-outline"
                        color={'white'}
                      />
                    } 
                    flex={1} bg='#4D8D6E'
                    >
                    Tutoriels
                  </Button>
                </HStack>
              </VStack>
            </Stack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default Applicances;
