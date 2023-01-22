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
			setImage(image);
		}
	};

	const cancelImage = () => setImage(null);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sell (BETA/CPU ONLY)</Text>
			{image ? (
				<View style={[styles.imgContainer, { height: size, width: size }]}>
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
					<IconButton
						mode='contained-tonal'
						style={{
							zIndex: 2,
							position: 'absolute',
							top: 20,
							right: 20,
						}}
						size={30}
						icon={'delete'}
						onPress={cancelImage}
					/>
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
	imgContainer: {
		marginVertical: 20,
		overflow: 'hidden',
		borderRadius: 45,
		borderWidth: 1,
		borderColor: 'white',
	},
});
