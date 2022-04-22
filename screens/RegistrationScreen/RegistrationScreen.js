import {createUserWithEmailAndPassword} from 'firebase/auth';
import {addDoc, collection} from 'firebase/firestore';
import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import {auth, db} from '../../firebase/config';
import styles from './styles';

const RegistrationScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('Pawan Kumar');
  const [email, setEmail] = useState('surpawan@gmail.com');
  const [password, setPassword] = useState('pawan123');
  const [confirmPassword, setConfirmPassword] = useState('pawan123');

  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  const onRegistrationPress = async () => {
    if (email.length === 0) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Please enter email',
      });
      return;
    }

    if (fullName.length === 0) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Please enter full name',
      });
      return;
    }

    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Password not match',
      });
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        fullName,
        authProvider: 'local',
        email,
      });

      navigation.navigate('Home');
    } catch (err) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: err.message,
      });
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.keyboardScrollView}
        keyboardShouldPersistTaps="always">
        <Image style={styles.logo} source={require('../../assets/icon.png')} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setFullName(text)}
          value={fullName}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setEmail(text)}
          value={email}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegistrationPress()}>
          <Text style={styles.buttonTitle}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Login
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RegistrationScreen;
