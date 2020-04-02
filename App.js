import React from 'react';

import Search from './Component/Search';
import Map from './Component/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Recherche" component={Search}/>
        <Tab.Screen name="Map" component={Map}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
