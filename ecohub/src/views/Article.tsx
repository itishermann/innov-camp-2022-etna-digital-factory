import React from 'react';
import { Box, Text, ScrollView, Spacer, Badge, HStack, Button, Icon, Image, Heading, IconButton } from 'native-base';
import { ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Article = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // @ts-expect-error - could not find a type for this for now (see above)
  const article = route.params?.article as Article;
  const insets = useSafeAreaInsets();
  const { title, views, content1, content2, createdAt, source } = article;
  return (
    <Box flex={1}>
      <ScrollView px={5} pt={5} _contentContainerStyle={{ paddingBottom: Math.max(insets.bottom, 16) + 2 }}>
        <ImageBackground source={{ uri: 'https://via.placeholder.com/250x800.png' }} style={{ width: '100%', height: 250 }} resizeMode="cover">
          <Box flex={1} safeAreaTop>
            <Spacer />
            <HStack position={'absolute'} bottom={2} maxH={8}>
              <Badge _text={{ bold: true }} colorScheme="coolGray" ml='5'>NEWS</Badge>
              <Spacer />
              <Button mr='5' variant="unstyled" leftIcon={<Icon as={MaterialCommunityIcons} name='eye' />}>{views}</Button>
            </HStack>
          </Box>
        </ImageBackground>
        <Heading>{title}</Heading>
        <Text>{content1}</Text>
        <Image source={{ uri: 'https://via.placeholder.com/250x800.png' }} style={{ width: '100%', height: 250 }} resizeMode="cover" alt='img'/>
        <Text>{content2}</Text>
      </ScrollView>
      <HStack w='100%' bg='#e4eee9' alignItems={'center'} safeAreaBottom style={{ paddingBottom: Math.max(insets.bottom, 16) }} px={3} pt={1}>
        <HStack alignItems={'center'}>
          <Icon as={MaterialCommunityIcons} name='clock' />
          <Text>{' '}{moment(createdAt).fromNow()}</Text>
        </HStack>
        <Spacer />
        <HStack>
          <Text>Source:{' '}</Text>
          <Text bold>{source}</Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Article;
