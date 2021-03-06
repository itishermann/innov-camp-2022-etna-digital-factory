import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Box, Fab, HStack, Icon, IconButton, Modal, PresenceTransition, Pressable, Slide, useDisclose } from 'native-base';

const { width } = Dimensions.get('window');

const NavigationIcon: React.FC<NavigationIconProps> = ({ route, isFocused }) => {
  switch (route) {
    case 'appliances':
      return <Icon color={!isFocused ? '#e4eee9' : '#4D8D6E'} name="washing-machine" as={MaterialCommunityIcons} />;
    case 'households':
      return <Icon color={!isFocused ? '#e4eee9' : '#4D8D6E'} name="home" as={MaterialCommunityIcons} />;
    case 'notifications':
      return <Icon color={!isFocused ? '#e4eee9' : '#4D8D6E'} name="bell" as={MaterialCommunityIcons} />;
    case 'blog':
      return <Icon color={!isFocused ? '#e4eee9' : '#4D8D6E'} name="newspaper" as={MaterialCommunityIcons} />;
    default:
      return <Box />;
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#4D8D6E', // '#E7DFD7',
    borderRadius: 25,
    marginHorizontal: width * 0.03,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 1,
    borderColor: '#e4eee9', // '#CCC4BD',
  },
});

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { isOpen, onToggle, onClose } = useDisclose();
  const as = useDisclose();
  return (
    <>
      <Box style={{ marginHorizontal: width * 0.03, alignItems: 'center' }}>
        <HStack space={5}>
          <PresenceTransition
            visible={isOpen}
            initial={{
              opacity: 0,
              translateY: 10,
              translateX: 100,
            }}
            animate={{
              opacity: 1,
              translateY: -120,
              transition: {
                duration: 250,
              },
            }}
          >
            <IconButton
              bg='#4D8D6E'
              variant='solid'
              borderRadius="full"
              _icon={{ as: MaterialCommunityIcons, name: 'home', color: '#fff', size: 10 }}
              colorScheme='tertiary' onPress={()=>{
                navigation.navigate('addHousehold');
                onClose();
              }}
            />
          </PresenceTransition>
          <PresenceTransition
            visible={isOpen}
            initial={{
              opacity: 0,
              translateY: 10,
              translateX: -100,
            }}
            animate={{
              opacity: 1,
              translateY: -120,
              transition: {
                duration: 250,
              },
            }}
          >
            <IconButton
              bg='#4D8D6E'
              variant='solid'
              borderRadius="full"
              _icon={{ as: MaterialCommunityIcons, name: 'washing-machine', color: '#fff', size: 10 }}
              colorScheme='tertiary' onPress={()=>{
                navigation.navigate('addAppliance');
                onClose();
              }}
            />
          </PresenceTransition>
        </HStack>

      </Box>
      <View style={styles.mainContainer}>
        {state.routes.map((route, index: number) => {
          if (route.name == 'add') {
            return (
              <View key={index} style={styles.mainItemContainer}>
                <IconButton
                  variant='unstyled'
                  _icon={{ as: MaterialCommunityIcons, name: 'plus-circle-outline', color: 'white', size: 12 }}
                  colorScheme='tertiary' onPress={onToggle} />
              </View>
            );
          }

          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            onClose();
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View key={index} style={[styles.mainItemContainer, { borderRightWidth: label == 'notes' ? 3 : 0 }]}>
              <Pressable
                shadow={isFocused ? 2 : undefined}
                onPress={onPress}
                style={{ backgroundColor: isFocused ? '#fff' : '#4D8D6E', borderRadius: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15 }}>
                  <NavigationIcon route={route.name} isFocused={isFocused} />
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    </>
  );
};


export default TabBar; 