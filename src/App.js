import 'react-native-gesture-handler';
import React from 'react';
import Home from './components/home/home.component';
import Browser from './components/browser/browser.component';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
          <Stack.Screen options={{headerShown: false}} name="Browser" component={Browser}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
