import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-toast-message';
import styles from './styles';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from '../../firebase/config';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../colors';

const AddScreen = ({navigation, user}) => {
  const isFocused = navigation.isFocused();
  console.log(navigation, 20);
  const [task, setTask] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [completed, setCompleted] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
    console.log(selectedDate);
  };

  useEffect(() => {
    if (isFocused) {
      setDate(new Date());
    }
  }, [isFocused]);

  const addZero = i => {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  };

  const showDatepicker = () => {
    setShow(true);
  };

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
      setLoading(true);
      await addDoc(collection(db, 'tasks'), {
        task: task,
        completed: completed,
        reminder: `${addZero(date.getHours())}:${addZero(date.getMinutes())}`,
        createdAt: serverTimestamp(),
        userId: user.uid,
      });

      setLoading(false);
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Task Added Successfully',
      });

      navigation.navigate('Home');
    } catch (error) {
      setLoading(false);
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
          placeholder="Task"
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
        <View style={styles.timePickerSection}>
          <Text style={styles.selectTimeLabel}>
            Time: {`${addZero(date.getHours())}:${addZero(date.getMinutes())}`}
          </Text>
          <TouchableOpacity style={styles.selectTime} onPress={showDatepicker}>
            <Icon
              name="clock-time-eight-outline"
              style={styles.actionButtonIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={onAddTask}>
          <Text style={styles.buttonTitle}>
            {loading ? (
              <ActivityIndicator size={20} color={theme.white} />
            ) : (
              'Save'
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonTitle}>Cancel</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddScreen;
