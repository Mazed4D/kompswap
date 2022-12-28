import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStack from './stacks/HomeStack';
import LinkingConfiguration from './LinkingConfiguration';
import NotFoundScreen from '../screens/NotFoundScreen';
import ProfileStack from './stacks/ProfileStack';
import SellStack from './stacks/SellStack';
import UnauthStack from './stacks/UnauthStack';
import useAuth from '../hooks/useAuth';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList, RootTabParamList } from '../types';

export default function Navigation({ theme }: { theme: Theme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const BottomTab = createMaterialBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { user } = useAuth();

  return (
    <BottomTab.Navigator initialRouteName="Buy">
      <BottomTab.Screen
        name="Buy"
        component={HomeStack}
        options={{
          title: 'Buy',
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Sell"
        component={user ? SellStack : UnauthStack}
        options={{
          title: 'Sell',
          tabBarIcon: ({ color }) => <TabBarIcon name="dollar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={user ? ProfileStack : UnauthStack}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator >
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={24} {...props} />;
}
