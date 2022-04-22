import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {initializeFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getReactNativePersistence} from 'firebase/auth/react-native';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCN76Q5nSnY4XsfM0mbmLQEuMp_xa2EyIY',
  authDomain: 'todo-react-native-android.firebaseapp.com',
  projectId: 'todo-react-native-android',
  storageBucket: 'todo-react-native-android.appspot.com',
  messagingSenderId: '309567695969',
  appId: '1:309567695969:web:8490eaa318d21dfc1b4e20',
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
export const auth = getAuth(app);
export const storage = getStorage(app);
