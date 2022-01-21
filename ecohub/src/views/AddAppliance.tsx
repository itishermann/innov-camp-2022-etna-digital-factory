import { Text, Box, Center, Actionsheet, useDisclose, HStack, Icon, Input, IconButton, Heading, Pressable, Stack, Image, FlatList } from 'native-base';
import React, { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { ApplianceSearchResult, Loader } from '@components';
import { useAppDispatch } from '@store';
import applianceData from '@assets/json/appliances.json';
import { useNavigation } from '@react-navigation/native';

const AddAppliance = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [result, setResult] = useState<Appliance[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: {type: string, data: string}) => {
    setScanned(true);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    setResult(applianceData.filter((item)=>item.id === data));
  };

  if (hasPermission === false) {
    return <Text>Accès à la camera refusé</Text>;
  }

  return (
    <Box flex={1}>
      <Box alignItems={"center"} w={"100%"}>
        <Heading fontSize={'xl'}>Scannez votre code-barres</Heading>
        <Center mt={5} minW='100%'>
          {hasPermission === null ?
            <Loader /> :
            hasPermission === false ?
              <Text bold color='red.500' textAlign={'center'}>Accès à la camera refusé</Text> :
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{
                  height: Dimensions.get('screen').height / 2,
                  width: Dimensions.get('window').width,
                }}
              />}
        </Center>
        <Box borderWidth={3} rounded='lg' borderColor='muted.200' mt={5} p={1} minW='80%'>
          <Text bold color='emerald.400' textAlign={'center'}>Bon à savoir</Text>
          <Text textAlign={'center'}>
            Alignez le lecteur{'\n'}sur le code-barres de votre produit.{'\n'}
            Assurez-vous d'être dans un endroit assez lumineux.
          </Text>
        </Box>
      </Box>
      <FlatList
        data={result}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ApplianceSearchResult {...item} />}
        horizontal
      />
    </Box>
  );
};

export default AddAppliance;
