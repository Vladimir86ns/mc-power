import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import SendCvPage from '../screens/SendCvPage';
import ContactScreen from '../screens/ContactScreen';

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

const SendCVStack = createStackNavigator({
  SendCv: SendCvPage,
});

SendCVStack.navigationOptions = {
  tabBarLabel: 'Posalji CV',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-document'
    />
  ),
};

const ContactStack = createStackNavigator({
  Contact: ContactScreen,
});

ContactStack.navigationOptions = {
  tabBarLabel: 'Kontakt',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-contacts'
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SendCVStack,
  ContactStack
});
