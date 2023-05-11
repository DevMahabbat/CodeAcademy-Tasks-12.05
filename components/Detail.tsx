import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { FavoritesContext } from './FavoritesContext';

const Detail = ({ route }: any) => {
  const { id } = route.params;
  const [data, setdata] = useState<any>({});
  const { favorites, setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setdata(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const addToBasket = () => {
    const newData = {
      id: id,
      title: data.title,
      count: 1,
      price: data.price,
      image: data.image,
    };

    setFavorites([...favorites, newData]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.price}>${data.price}</Text>
      </View>
      <TouchableOpacity onPress={addToBasket} style={styles.button}>
        <Text style={styles.buttonText}>ADD TO BASKET</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: '#FF6347',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 50,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  price: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF69B4',
    height: 80,
    marginHorizontal: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Detail;
