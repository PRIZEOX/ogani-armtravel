import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator()



const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel:false,
      tabBarInactiveTintColor: '#FFFFFF99',
      tabBarActiveTintColor: '#fff',
      tabBarStyle:{
        backgroundColor: '#4C9FC1',
        width:327,
        right:24,
        left:24,
        borderRadius:20,
        height: 72,
        bottom:3,
        marginLeft:10
      }
    }}>
        <Tab.Screen name='Home' component={HomeScreen} 
          options={{
            tabBarIcon: ({color}) => (<Feather name="home" size={24} color={color} />)
          }}
        />
        <Tab.Screen name='Favorite' component={FavoriteScreen} 
          options={{
            headerShown:false,
            tabBarIcon: ({color}) => (<AntDesign name="hearto" size={24} color={color} />)
          }}
        />
        <Tab.Screen name='Settings' component={SettingsScreen} options={{
          headerShown:false,
          tabBarIcon: ({color}) => (<Feather name="settings" size={24} color={color} />)
        }}/>
    </Tab.Navigator>
  )
}

export default Tabs