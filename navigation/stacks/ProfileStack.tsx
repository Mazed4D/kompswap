import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../../screens/Profile/ProfileScreen';
import TabBar from '../TabBar';

const ProfileStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='ProfileScreen' screenOptions={{
            header: TabBar
        }}>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default ProfileStack