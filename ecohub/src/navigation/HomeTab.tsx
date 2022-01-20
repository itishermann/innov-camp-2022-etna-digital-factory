import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, TabBar } from '@components';
import { Appliances, Blog, Households, Notifications } from '@views';
import { getHeaderTitle } from '@react-navigation/elements';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />} screenOptions={{
      header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return (
          <Header
            title={title}
            navigation={navigation}
            style={options.headerStyle}
          />
        );
      },
    }}>
      <Tab.Screen name="appliances" component={Appliances} options={{ title: 'Mes appareils' }} />
      <Tab.Screen name="households" component={Households} options={{ title: 'Mes residences' }} />
      <Tab.Screen name="add" component={Appliances} />
      <Tab.Screen name="blog" component={Blog} options={{ title: 'Blog' }}  />
      <Tab.Screen name="notifications" component={Notifications} options={{ title: 'Notifications' }}  />
    </Tab.Navigator>
  );
};

export default HomeTab;