import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from './FavoritesContext'

const Favorites = ({navigation}:any) => {
//for testing purposes
  const {favorites, setFavorites} = useContext(FavoritesContext)
  return (
    <View>
      <Text>Favorites</Text>
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({})