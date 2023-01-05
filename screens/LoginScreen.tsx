import React from 'react';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { StyleSheet, } from 'react-native';
import { useState } from 'react';

import usePhoneSignIn from '../hooks/usePhoneSignIn';
import { Text, View } from '../components/Themed';

const LoginScreen = () => {
    const {
        signInWithPhoneNumber,
        confirmCode,
        confirm,
        setCode,
        code,
        error,
        loading,
        clearConfirm
    } = usePhoneSignIn();
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSignIn = () => signInWithPhoneNumber(phoneNumber);
    const handleChangePhone = (num: string) => setPhoneNumber(num);
    const handleChangeCode = (code: string) => setCode(code);
    const handleReset = () => {
        clearConfirm();
        setPhoneNumber('');
    }


    return (
        <View style={styles.container}>
            {confirm ? (
                <>
                    <TextInput value={code} onChangeText={handleChangeCode} style={styles.textInput} disabled={loading} keyboardType={'numeric'} maxLength={6} textContentType={'oneTimeCode'} error={error ? true : false} />
                    {error && <HelperText type='error'>{error}</HelperText>}
                    <Button
                        mode={'contained-tonal'}
                        onPress={confirmCode}
                        loading={loading}>
                        Confirm Code
                    </Button>
                    <Button
                        mode={'text'}
                        onPress={handleReset}
                        loading={loading}>
                        Wrong phone number?
                    </Button>
                </>
            ) : (
                <>
                    <TextInput value={phoneNumber} onChangeText={handleChangePhone} placeholder={'+381xxxxxxx'} style={styles.textInput} disabled={loading} keyboardType={'phone-pad'} textContentType={'telephoneNumber'} />
                    <Button
                        mode={'contained-tonal'} onPress={handleSignIn}
                        loading={loading}>
                        Phone Number Sign In
                    </Button>
                </>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        width: '80%',
        marginBottom: 10
    }
});

export default LoginScreen;