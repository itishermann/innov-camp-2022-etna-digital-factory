import { Box, FlatList, HStack, Stack, Text, Icon } from 'native-base';
import moment from 'moment';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import data from '@assets/json/notifications.json';

const Notifications = () => {
  const [isLoading, setLoading] = useState(false);
  return (
    <Box flex={1}>
      <FlatList
        mt={2}
        contentContainerStyle={{ paddingBottom: 120 }}
        refreshing={isLoading}
        onRefresh={() => {
          setLoading(true); 
          setTimeout(() => setLoading(false), 2000);
        }}
        data={data.sort((a, b) => moment(b.createdAt).diff(moment(a.createdAt)))}
        renderItem={({ item }) => (
          <Box mx={2} my={1} rounded={'sm'} p={1} bg='white' shadow={'1'}>
            <HStack space={2} alignItems='center'>
              <Icon color={
                item.type === 'BLOG_POST' ? 
                  '#4D8D6E' : 
                  item.type === 'INCOMING_MAINTENANCE' ? 
                    'info.500' : 
                    item.type === 'MISSED_MAINTENANCE' ? 
                      'warning.500'
                      : item.type === 'PARTS_AVAILABLE' ? 
                        '#4D8D6E' : 
                        '#4D8D6E'
              } size={12} 
              name={
                item.type === 'BLOG_POST' ? 
                  'newspaper' : 
                  item.type === 'INCOMING_MAINTENANCE' ? 
                    'cached' : 
                    item.type === 'MISSED_MAINTENANCE' ? 
                      'fridge-alert' 
                      : item.type === 'PARTS_AVAILABLE' ? 
                        'settings' : 
                        'bell' 
              } 
              as={item.type === 'PARTS_AVAILABLE' ? MaterialIcons : MaterialCommunityIcons} />
              <Stack>
                <Text bold maxW={'90%'}>
                  {item.type === 'BLOG_POST' ? 
                    'Nouvel article disponible' : 
                    item.type === 'INCOMING_MAINTENANCE' ? 
                      'Maintenance avenir' : 
                      item.type === 'MISSED_MAINTENANCE' ? 
                        "Avez vous réalisé l'entretien de votre appareil ?" 
                        : item.type === 'PARTS_AVAILABLE' ? 
                          'Des pièces detachées sont disponibles pour votre appareil' : 
                          '' }</Text>
                <Text maxW={'90%'} isTruncated={item.type === 'BLOG_POST'}>{item.about}</Text>
                <Text fontSize={'xs'} color='muted.300' textAlign={'right'} mr={10}>{moment(item.createdAt).fromNow()}</Text>
              </Stack>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default Notifications;

