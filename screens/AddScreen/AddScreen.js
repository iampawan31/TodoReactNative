import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-toast-message';
import styles from './styles';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from '../../firebase/config';

const AddScreen = ({navigation, user}) => {
  const [task, setTask] = useState('');
  const [completed, setCompleted] = useState(false);

  const onAddTask = async () => {
    if (task.length === 0) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Please enter email',
      });
      return;
    }

    try {
      await addDoc(collection(db, 'tasks'), {
        task: task,
        completed: completed,
        createdAt: serverTimestamp(),
        uid: user.uid,
      });

      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Task Added Successfully',
      });

      navigation.navigate('Home');
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: error,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add New Task</Text>
      </View>
      <KeyboardAwareScrollView
        style={styles.keyboardScrollView}
        keyboardShouldPersistTaps="always">
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setTask(text)}
          value={task}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
        />
        <View style={styles.checkboxWrapper}>
          <Text style={styles.checkboxLabel}>Completed</Text>
          <CheckBox
            value={completed}
            onValueChange={newValue => setCompleted(newValue)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onAddTask}>
          <Text style={styles.buttonTitle}>Save</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddScreen;
