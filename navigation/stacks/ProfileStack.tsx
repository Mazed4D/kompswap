import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabBar from '../TabBar';
import TabTwoScreen from '../../screens/Sell/TabTwoScreen';

const ProfileStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Profile' screenOptions={{
            header: TabBar
        }}>
            <Stack.Screen name='Profile' component={TabTwoScreen} />
        </Stack.Navigator>
    )
}

export default ProfileStack