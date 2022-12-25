import React from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabOneScreen from '../../screens/TabOneScreen';
import { RootStackParamList } from '../../types';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={TabOneScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack