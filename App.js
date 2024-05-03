import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Calculador from './src/screen/calculadora';
import Todo from './src/screen/todoList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="calculadora" component={Calculador} />
        <Tab.Screen name="todoList" component={Todo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}