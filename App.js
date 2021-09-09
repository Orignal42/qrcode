import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import Decoder from './Decoder';
import Encoder from './Encoder';
const Tab = createBottomTabNavigator();

export default function App() {
  const [histo, setHisto]= React.useState({});

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home"  children={()=>{
          return(
            <HomeScreen histo={histo} setHisto= {setHisto} />
          )
        }} />
        <Tab.Screen name="Decoder" children={()=>{
          return(
            <Decoder histo={histo} setHisto= {setHisto} />
          )
        }} />
        <Tab.Screen name="Encoder" component={Encoder} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}