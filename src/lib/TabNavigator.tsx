import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodosStackScreens from './TodosStackScreens';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Todos" component={TodosStackScreens} />
    </Tab.Navigator>
  );
};
export default TabNavigator;

export type TabStackParamList = {
  Todos: undefined;
  Users: undefined;
};
