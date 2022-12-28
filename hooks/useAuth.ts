import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {
	const [initializing, setInitializing] = useState<boolean>(true);
	const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

	const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
		setUser(user);
		if (initializing) setInitializing(false);
	};

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	return { initializing, user };
};

export default useAuth;
