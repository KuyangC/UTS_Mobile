import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../src/Home';
import Profile from '../src/Profile';
import Settings from '../src/Settings';

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={StackNavigator}/>
      <Tab.Screen name='Profile' component={Profile}/>
      <Tab.Screen name='Settings' component={Settings}/>
    </Tab.Navigator>
  )
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Detail' component={Settings}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <TabNavigator/>
    </NavigationContainer>
  )
}

