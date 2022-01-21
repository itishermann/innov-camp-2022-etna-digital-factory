import { Dimensions } from 'react-native';
import React from 'react';
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HStack, Stack, Text, Icon, Heading, Pressable, Image } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const ApplianceSearchResult: React.FC<Appliance> = (item) => {
  const navigation = useNavigation();
  return (
    <Pressable mx={2} my={1} rounded={'sm'} bg='white' shadow={'1'} onPress={() => navigation.navigate('addApplianceComplementaryInfo', {appliance: item})}>
      <HStack space={2} >
        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, resizeMode: 'contain' }} alt='placeholder' />
        <Stack style={{ minWidth: Dimensions.get('screen').width - 125, maxWidth: Dimensions.get('screen').width - 125 }} p={1}>
          <Text bold isTruncated style={{ maxWidth: Dimensions.get('screen').width - 135, minWidth: Dimensions.get('screen').width - 135 }} pr={2}>{item.name}</Text>
          <Text fontSize={'xs'}>Disponible depuis: {moment(item.releaseDate).format('LL')}</Text>
          <HStack space={3} justifyContent='space-evenly' alignItems={'center'} maxW={'90%'}>
            <Stack alignItems={'center'} flex={1}>
              <Icon
                as={MaterialCommunityIcons}
                color={item.maintenance.tutorials.length > 0 ? 'success.500' : 'warning.500'}
                name={item.maintenance.tutorials.length > 0 ? 'check-circle' : 'close-circle'} />
              <Text textAlign={'center'} fontSize={"xs"}>Tutoriels</Text>
            </Stack>
            <Stack alignItems={'center'} flex={1}>
              <Icon
                as={MaterialCommunityIcons}
                color={item.maintenance.spareParts.length > 0 ? 'success.500' : 'warning.500'}
                name={item.maintenance.spareParts.length > 0 ? 'check-circle' : 'close-circle'} />
              <Text textAlign={'center'} fontSize={"xs"}>Pièces</Text>
            </Stack>
            <Stack alignItems={'center'} flex={1}>
              <Heading>{item.maxLifespan}</Heading>
              <Text textAlign={'center'} fontSize={"xs"}>Longevité</Text>
            </Stack>
          </HStack>
        </Stack>
      </HStack>
    </Pressable>
  );
};

export default ApplianceSearchResult;
