import { Box, FlatList, HStack, Stack, Text, Image, Pressable } from 'native-base';
import moment from 'moment';
import React, { useState } from 'react';
import data from '@assets/json/articles.json';
import { useNavigation } from '@react-navigation/native';

const Article = (item: Article) => {
  const navigation = useNavigation();
  return (
    <Pressable mx={2} my={1} rounded={'sm'} p={1} bg='white' shadow={'1'} onPress={()=>navigation.navigate(
      'article' as never,
      { article: item } as never,
    )}>
      <HStack space={2} alignItems='center'>
        <Image source={{ uri: item.image }} style={{ width: 100, height: 150, resizeMode: 'contain' }} alt='placeholder' />
        <Stack>
          <Text bold maxW={'85%'}>{item.title}</Text>
          <Text maxW={'85%'} >{item.resume}</Text>
          <Text fontSize={'xs'} color='muted.300' textAlign={'right'} mr={10}>{moment(item.createdAt).fromNow()}</Text>
        </Stack>
      </HStack>
    </Pressable>
  );

};

const Blog = () => {
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
        renderItem={({ item }) => <Article {...item} />}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default Blog;

