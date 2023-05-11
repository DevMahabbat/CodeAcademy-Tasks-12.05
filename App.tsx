import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { FavoritesProvider } from './components/FavoritesContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home'
import Favorites from './components/Favorites'
import Tab from './components/Tab'
import Detail from './components/Detail'

const Stack = createNativeStackNavigator()
const App = () => {

  return (<>

    <NavigationContainer>

    <FavoritesProvider>
        <Stack.Navigator>
        <Stack.Screen name="Tab" component={Tab}  options={{headerShown:false}}/>
      <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
        </FavoritesProvider>
    </NavigationContainer>

  </>
  )
}

export default App