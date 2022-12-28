import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabBar from '../TabBar';
import TabTwoScreen from '../../screens/Sell/TabTwoScreen';

const SellStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Add' screenOptions={{
            header: TabBar
        }}>
            <Stack.Screen name='Add' component={TabTwoScreen} />
        </Stack.Navigator>
    )
}

export default SellStack