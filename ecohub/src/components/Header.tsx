import { Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import {
  Heading,
  HStack,
  Icon,
  IconButton,
  Box,
  Center,
  Stack,
  Pressable,
} from 'native-base';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface HeaderProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  back?: { title: string } | undefined;
  navigation?: NavigationProp<any>;
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, style, back, navigation, transparent }) => {
  const backgroundColor = '#4D8D6E';
  const textColor = '#fff';
  return (
    <HStack
      style={style}
      safeAreaTop
      bg={transparent ? undefined : backgroundColor}
      justifyContent={back && back.title ? 'space-between' : 'center'}
      alignItems="center"
      height={24}>
      <Pressable
        flex={1}
        onPress={() => back && back.title && navigation?.goBack()}>
        {back && back.title && (
          <IconButton
            w="20%"
            variant="unstyled"
            icon={
              <Icon as={Ionicons} name="arrow-back" color="white" />
            }
            onPress={() => navigation?.goBack()}
          />
        )}
      </Pressable>
      <Center w="80%" flex={4}>
        <Stack w="full">
          <Heading fontSize="md" textAlign="center" color={textColor} w="full">
            {title}
          </Heading>
        </Stack>
      </Center>
      <Box flex={1} />
    </HStack>
  );
};

export default Header;

