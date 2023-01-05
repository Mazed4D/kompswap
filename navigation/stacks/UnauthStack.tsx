import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../../screens/LoginScreen';
import TabBar from '../TabBar';
import TabTwoScreen from '../../screens/Sell/Sell';

const UnauthStack = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator
			initialRouteName='Settings'
			screenOptions={{
				header: TabBar,
			}}
		>
			<Stack.Screen name='Settings' component={LoginScreen} />
		</Stack.Navigator>
	);
};

export default UnauthStack;
