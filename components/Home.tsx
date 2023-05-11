import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const Home = ({ navigation }: any) => {
  const [data, setdata] = useState<any>([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/')
      .then(res => {
        setdata(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })} style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.image || "" }} style={styles.image} />
        <Text style={styles.price}>${item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: 'red',
    width: 250,
    height: 400,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  price: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;
