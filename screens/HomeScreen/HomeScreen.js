import React from 'react';

import {View, Text} from 'react-native';
import {Tasks, AddTask} from '../../components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './styles';
import {theme} from '../../colors';
import ActionButton from '@logvinme/react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
          children={props => <Tasks {...props} type="all" />}
        />
        <Tab.Screen
          name="Pending"
          children={props => <Tasks {...props} type="pending" />}
        />
        <Tab.Screen
          name="Done"
          children={props => <Tasks {...props} type="completed" />}
        />
      </Tab.Navigator>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
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
            onPress={() => console.log('notes tapped!')}>
            <Icon name="refresh" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={theme.fabColorThree}
            title="Logout"
            onPress={() => {}}>
            <Icon name="logout" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    </>
  );
};

export default HomeScreen;
