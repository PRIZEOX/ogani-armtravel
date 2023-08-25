import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Favorite' component={FavoriteScreen}/>
    </Tab.Navigator>
  )
}

export default Tabs