import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Basket from './Basket'

const TabNav = createBottomTabNavigator()

const Tab = () => {
  return (
    
    <>
    <TabNav.Navigator initialRouteName='Home'>
        <TabNav.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <TabNav.Screen name='Basket' component={Basket} options={{headerShown:false}} />

    </TabNav.Navigator>
    </>
    
  )
}

export default Tab