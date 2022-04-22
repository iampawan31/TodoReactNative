import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import {auth} from '../../firebase/config';
import styles from './styles';

const AddScreen = ({navigation}) => {
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
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Add New Task</Text>
      </View>
      <KeyboardAwareScrollView
        style={styles.keyboardScrollView}
        keyboardShouldPersistTaps="always">
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

export default AddScreen;
