import React, {useState, useEffect} from 'react';
import {collection, getDocs, addDoc, where, query} from 'firebase/firestore';
import {db} from '../../firebase/config';
import Toast from 'react-native-toast-message';
import {View, Text, ActivityIndicator} from 'react-native';
import {Task} from '../../components';
import styles from './styles';
import {theme} from '../../colors';

const PendingTasks = ({type, navigation}) => {
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(true);
  const [taskItems, setTaskItems] = useState([]);

  const tasksCollectionRef = collection(db, 'tasks');

  const getTasks = async () => {
    try {
      setLoading(true);
      let q;
      if (type === 'pending') {
        q = query(tasksCollectionRef, where('completed', '==', false));
      } else if (type === 'completed') {
        q = query(tasksCollectionRef, where('completed', '==', true));
      } else {
        q = query(tasksCollectionRef);
      }

      const data = await getDocs(q);
      const tasksData = data.docs.map(doc => ({id: doc.id, ...doc.data()}));
      setTaskItems(tasksData);
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Data Fetched Successfully',
      });
      setLoading(false);
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: error,
      });
      setLoading(false);
    }
  };

  const processTask = completed => {};

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior

      getTasks();
      // Do something manually
      // ...
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator size={100} color={theme.secondary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        {/* This is where tasks will go. */}
        {taskItems.length > 0 ? (
          taskItems.map((item, index) => (
            <View key={index} style={styles.item}>
              <Task
                text={item.text}
                completed={item.completed}
                completeTask={() => processTask(item.completed)}
              />
            </View>
          ))
        ) : (
          <View style={styles.emptyTaskList}>
            <Text style={styles.sectionHeading}>Add Some Tasks</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default PendingTasks;
