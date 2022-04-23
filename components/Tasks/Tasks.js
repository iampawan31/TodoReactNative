import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {theme} from '../../colors';
import {Task} from '../../components';
import {db} from '../../firebase/config';
import styles from './styles';

const PendingTasks = ({type, refresh, onRefreshCompleted, navigation}) => {
  const [loading, setLoading] = useState(true);
  const [taskItems, setTaskItems] = useState([]);

  const tasksCollectionRef = collection(db, 'tasks');

  const processTask = async ({uid, completed}) => {
    const taskRef = doc(db, 'tasks', uid);
    await updateDoc(taskRef, {
      completed,
    });
    getTasks();
  };

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
      onRefreshCompleted();
      setLoading(false);
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: error,
      });
      onRefreshCompleted();
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      getTasks();
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (refresh) {
      getTasks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

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
                task={item.task}
                completed={item.completed}
                completeTask={value => processTask(item.uid, value)}
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
