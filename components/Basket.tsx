import React, { useContext } from 'react';
import { View, Text, Image, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FavoritesContext } from './FavoritesContext';

const Basket = () => {
  const { favorites, setFavorites } = useContext<any>(FavoritesContext);

  const totalPrice = () => {
    let total = 0;
    if (favorites.length > 0) {
      favorites.forEach((item: any) => {
        total += item.price * item.count;
      });
    }
    return total;
  };

  const decreaseCount = (id: any) => {
    let item: any = favorites.find((pr: any) => pr.id === id);
    if(item.count>0){item.count--;}
    setFavorites([...favorites]);
  };

  const increaseCount = (id: any) => {
    let item: any = favorites.find((pr: any) => pr.id === id);

    
      item.count++;
      setFavorites([...favorites]);
   
  };

  const deleteAllFavorites = () => {
    setFavorites([]);
  };

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.itemDetails}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price * item.count}</Text>
          <View style={styles.countContainer}>
            <TouchableOpacity style={styles.button} onPress={() => decreaseCount(item.id)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{item.count}</Text>
            <TouchableOpacity style={styles.button} onPress={() => increaseCount(item.id)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cart</Text>
        <Button onPress={deleteAllFavorites} title="DELETE" />
      </View>
      <FlatList data={favorites} renderItem={renderItem} keyExtractor={item => item.id} />
      {favorites && (
        <View style={styles.totalContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>${totalPrice()}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    elevation: 3,
  },
  image: {
    height: 150,
    width: 150,
    marginRight: 20,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 16,
    color: '#333',
  },
  totalContainer: {
    marginTop: 20,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#999',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6347',
  },
});

export default Basket;

