import ActionButton from '@logvinme/react-native-action-button';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {signOut} from 'firebase/auth';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../colors';
import {Tasks} from '../../components';
import {auth} from '../../firebase/config';
import styles from './styles';

const Tab = createMaterialTopTabNavigator();

const dayOfWeekArray = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const monthOfYearArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const HomeScreen = ({navigation}) => {
  const date = new Date();
  const fullYear = date.getFullYear();
  const currentDate = date.getDate();
  const dayOfWeek = dayOfWeekArray[date.getDay()];
  const currentMonth = monthOfYearArray[date.getMonth()];

  const [refresh, setRefresh] = useState(false);

  const onRefreshCompleted = () => {
    setRefresh(false);
  };

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <View style={styles.homeHeader}>
        <View style={styles.homeLeftSection}>
          <Text style={styles.currentDate}>{currentDate}</Text>
          <View>
            <Text style={styles.currentMonth}>{currentMonth}</Text>
            <Text style={styles.fullYear}>{fullYear}</Text>
          </View>
        </View>
        <View style={styles.homeRightSection}>
          <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
        </View>
      </View>
      <Tab.Navigator
        initialRouteName="All"
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="All"
          children={props => (
            <Tasks
              {...props}
              onRefreshCompleted={onRefreshCompleted}
              refresh={refresh}
              type="all"
            />
          )}
        />
        <Tab.Screen
          name="Pending"
          children={props => (
            <Tasks
              {...props}
              onRefreshCompleted={onRefreshCompleted}
              refresh={refresh}
              type="pending"
            />
          )}
        />
        <Tab.Screen
          name="Done"
          children={props => (
            <Tasks
              {...props}
              onRefreshCompleted={onRefreshCompleted}
              refresh={refresh}
              type="completed"
            />
          )}
        />
      </Tab.Navigator>
      <View style={styles.fabButton}>
        {/*Rest of App come ABOVE the action button component!*/}
        <ActionButton buttonColor={theme.secondary}>
          <ActionButton.Item
            buttonColor={theme.fabColorOne}
            title="New Task"
            onPress={() => navigation.navigate('Add')}>
            <Icon name="playlist-plus" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={theme.fabColorTwo}
            title="Refresh"
            onPress={() => setRefresh(true)}>
            <Icon name="refresh" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={theme.fabColorThree}
            title="Logout"
            onPress={logout}>
            <Icon name="logout" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    </>
  );
};

export default HomeScreen;
