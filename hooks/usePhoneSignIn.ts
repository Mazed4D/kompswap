import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useState } from 'react';

const usePhoneSignIn = () => {
	// If null, no SMS has been sent
	const [confirm, setConfirm] =
		useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
	const [code, setCode] = useState('');

	const signInWithPhoneNumber = async (phoneNumber: string) => {
		const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
		setConfirm(confirmation);
	};

	const confirmCode = async () => {
		try {
			await confirm?.confirm(code);
		} catch (error) {
			console.log('Invalid code.');
		}
	};

	return {
		signInWithPhoneNumber,
		confirmCode,
		setCode,
		code,
	};
};

export default usePhoneSignIn;
