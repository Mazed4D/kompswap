import React from 'react'
import { Appbar } from 'react-native-paper'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

const TabBar = ({ navigation, back, route }: NativeStackHeaderProps) => {
    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={route.name} />
        </Appbar.Header>
    )
}

export default TabBar