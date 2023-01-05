import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useState } from 'react';

const usePhoneSignIn = () => {
	// If null, no SMS has been sent
	const [confirm, setConfirm] =
		useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
	const [code, setCode] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const signInWithPhoneNumber = async (phoneNumber: string) => {
		setLoading(true);
		const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
		setLoading(false);
		setConfirm(confirmation);
	};

	const confirmCode = async () => {
		setLoading(true);
		try {
			await confirm?.confirm(code);
			setError('');
		} catch (error) {
			setError('Invalid code.');
		}
		setLoading(false);
	};

	const clearConfirm = () => setConfirm(null);

	return {
		signInWithPhoneNumber,
		confirmCode,
		confirm,
		setCode,
		code,
		error,
		loading,
		clearConfirm,
	};
};

export default usePhoneSignIn;
