import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Poslovi',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-list-box'
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: AboutUsScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'O Nama',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-home'
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-options'
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
