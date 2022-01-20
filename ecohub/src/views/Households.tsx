import { Loader } from '@components';
import { useIsFocused } from '@react-navigation/native';
import { useAppSelector } from '@store';
import { Box, Text } from 'native-base';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { households } = useAppSelector(state => state.household);
  return (
    <Box flex={1}>
      <Text>Home</Text>
    </Box>
  );
};

export default Home;
