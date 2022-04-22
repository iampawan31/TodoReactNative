import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {decode, encode} from 'base-64';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginScreen,
  RegistrationScreen,
  HomeScreen,
  AddScreen,
} from './screens';
import Toast from 'react-native-toast-message';
import {auth} from './firebase/config';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {theme} from './colors';

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator size={100} color={theme.secondary} />
      </View>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {user ? (
            <>
              <Stack.Screen name="Home">
                {props => <HomeScreen {...props} extraData={user} />}
              </Stack.Screen>
              <Stack.Screen name="Add">
                {props => <AddScreen {...props} />}
              </Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                options={{headerShown: false}}
                component={LoginScreen}
              />
              <Stack.Screen
                name="Registration"
                options={{headerShown: false}}
                component={RegistrationScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
