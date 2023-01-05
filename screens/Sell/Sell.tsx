import * as ImagePicker from 'expo-image-picker';
import FastImage from 'react-native-fast-image';
import { Button, IconButton, TouchableRipple } from 'react-native-paper';
import { Dimensions, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

import { Text, View } from '../../components/Themed';

export default function Sell() {
	const [image, setImage] = useState<null | string>(null);
	const size = Dimensions.get('screen').width * 0.9;

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		} else {
			setImage(null);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sell (BETA/CPU ONLY)</Text>
			{image ? (
				<View
					style={{
						marginVertical: 20,
						height: size,
						width: size,
						overflow: 'hidden',
						borderRadius: 45,
						borderWidth: 1,
						borderColor: 'white',
					}}
				>
					<TouchableRipple
						onPress={pickImage}
						android_ripple={{
							foreground: true,
						}}
						style={{
							height: size,
							width: size,
						}}
					>
						<FastImage
							source={{ uri: image }}
							style={{ height: size, width: size }}
						/>
					</TouchableRipple>
				</View>
			) : (
				<IconButton
					mode='outlined'
					style={{
						marginVertical: 20,
						width: size,
						height: size,
					}}
					size={50}
					icon={'camera-plus'}
					onPress={pickImage}
				/>
			)}
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
