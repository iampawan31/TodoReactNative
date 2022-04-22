import {signInWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import {auth} from '../../firebase/config';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('surpawan@gmail.com');
  const [password, setPassword] = useState('pawan123');

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  const onLoginPress = async () => {
    if (email.length === 0) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Please enter email',
      });
      return;
    }

    if (password.length === 0) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Please enter password',
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        userCredentials => {
          Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Login Successful',
          });
          const user = userCredentials.user;
          navigation.navigate('Home', {user});
        },
      );
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
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LoginScreen;
