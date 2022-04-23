import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

const Task = ({task, completed, completeTask}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <CheckBox
          disabled={completed}
          value={completed}
          onValueChange={newValue => completeTask(newValue)}
        />
        <Text style={completed ? styles.itemTextCompleted : styles.itemText}>
          {task}
        </Text>
      </View>
      <View style={styles.circular}>
        <Text style={styles.time}>09:00 AM</Text>
      </View>
    </View>
  );
};

export default Task;
