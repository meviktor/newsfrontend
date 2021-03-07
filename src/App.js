import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/home/home.component';
import Browser from './components/browser/browser.component';
import SettingsMenu from './components/settings/settings.component';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
          <Stack.Screen options={{headerShown: false}} name="Browser" component={Browser}/>
          <Stack.Screen options={{headerTitle: "Settings"}} name="SettingsMenu" component={SettingsMenu}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
