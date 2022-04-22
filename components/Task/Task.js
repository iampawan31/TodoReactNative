import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

const Task = ({text, completed, completeTask}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <CheckBox
          disabled={completed}
          value={completed}
          onValueChange={completeTask}
        />
        <Text style={completed ? styles.itemTextCompleted : styles.itemText}>
          {text}
        </Text>
      </View>
      <View style={styles.circular}>
        <Text style={styles.time}>09:00 AM</Text>
      </View>
    </View>
  );
};

export default Task;
