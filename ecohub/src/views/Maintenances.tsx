import { useRoute } from '@react-navigation/native';
import { Box, Heading } from 'native-base';
import React from 'react';
import Timeline from "react-native-beautiful-timeline";

const Maintenances = () => {
  const route = useRoute();
  // @ts-expect-error - could not find a type for this for now (see above)
  const logs = route.params?.logs as MaintenanceLog[];
  return (
    <Box flex={1}>
      <Timeline data={logs} />
    </Box>
  );
};

export default Maintenances;
