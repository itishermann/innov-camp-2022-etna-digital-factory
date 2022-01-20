import { Box, Text, Spinner, Center, Heading, Spacer } from 'native-base';
import React from 'react';

const Loader:React.FC<LoaderProps> = ({ withLogo, withText }) => {
  return (
    <Box flex={1} safeAreaTop safeAreaBottom>
      <Center safeAreaTop minH={40} p={1}>
        {withLogo && <Heading color="#4D8D6E" fontSize='52' fontWeight={'semibold'}>ECOHUB</Heading>}
        {withText && <Text color="#4D8D6E" fontSize={'15'} fontWeight='medium'>Consomer Durablement</Text>}
      </Center>
      <Spacer/>
      <Spinner size={'lg'} color="#4D8D6E" mb={20}/>
    </Box>
  );
};

export default Loader;
