import React from 'react';
import { Button, TextInput } from 'react-native';

import usePhoneSignIn from '../hooks/usePhoneSignIn';

const LoginScreen = () => {
    const {
        signInWithPhoneNumber,
        confirmCode,
        setCode,
        code,
    } = usePhoneSignIn();

    if (!confirm) {
        return (
            <Button
                title="Phone Number Sign In"
                onPress={() => signInWithPhoneNumber('+381 62 8334 294')}
            />
        );
    }

    return (
        <>
            <TextInput value={code} onChangeText={text => setCode(text)} />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </>
    );
}

export default LoginScreen;