import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import Decoder from './Decoder';
import Encoder from './Encoder';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Decoder" component={Decoder} />
        <Tab.Screen name="Encoder" component={Encoder} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}