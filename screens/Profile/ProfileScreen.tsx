import React from 'react'
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native-paper'
import { StyleSheet, } from 'react-native'

import { Text, View } from '../../components/Themed'

const ProfileScreen = () => {
    const logOut = () => auth().signOut()
    return (
        <View style={styles.container}>
            <Button onPress={logOut} mode={'contained-tonal'}>Logout</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default ProfileScreen