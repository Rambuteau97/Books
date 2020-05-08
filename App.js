import React from 'react';
import Search from './Component/Search';
import Map from './Component/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorite from './Component/Favorite';
import { Provider } from 'react-redux';
import Store from './Store/configureStore';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Recherche" component={Search} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Favoris" component={Favorite} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
