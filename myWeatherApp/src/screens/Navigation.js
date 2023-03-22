import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './Home';
import Search from './Search';
import {useColorScheme} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  const theme = useColorScheme();
  const color = theme == 'dark' ? 'white' : 'black';
  const backColor = theme == 'dark' ? 'black' : 'white';

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: color,
        tabBarStyle: {backgroundColor: backColor},
        tabBarIndicatorStyle: {
          backgroundColor: '#FF7417',
        },
        tabBarPressColor: color
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{tabBarLabel: 'Search'}}
      />
    </Tab.Navigator>
  );
};

export default Navigation;