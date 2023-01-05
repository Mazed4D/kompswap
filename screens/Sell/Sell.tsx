import { Dimensions, Pressable, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useState } from 'react';

import { Text, View } from '../../components/Themed';

export default function Sell() {
	const [image, setImage] = useState(null);
	const size = Dimensions.get('screen').width * 0.9;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sell (BETA/CPU ONLY)</Text>
			<IconButton
				mode='outlined'
				style={{
					marginVertical: 20,
					width: size,
					height: size,
				}}
				size={50}
				icon={'camera-plus'}
				onPress={() => console.log('pr')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 40,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
