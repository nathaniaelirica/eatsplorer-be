import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  // Konfigurasi Firebase Anda
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dataRef = ref(db, '/');

export default function App() {
  const [restaurantsByCuisine, setRestaurantsByCuisine] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getRestaurants = async () => {
    try {
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();

        const restaurants = Object.keys(data).map((id) => ({
          id,
          title: data[id].title,
          street: data[id].street,
          cuisine: data[id].cuisine,
        }));

        selectCategory(restaurants);
      });
    } catch (error) {
      console.error('Error fetching restaurants by cuisine:', error);
    }
  };

  const selectCategory = (restaurants) => {
    // Filter restoran berdasarkan kategori "cuisine"
    const filteredRestaurants = restaurants.filter(
      (restaurant) =>
        selectedCategory ? restaurant.cuisine === selectedCategory : true
    );

    console.log('Restaurants filtered by cuisine:', filteredRestaurants);
    setRestaurantsByCuisine(filteredRestaurants);
  };

  useEffect(() => {
    // Panggil fungsi getRestaurants ketika komponen dipasang dan ketika kategori dipilih
    getRestaurants();
  }, [selectedCategory]);

  const categories = ['Kafe', 'Barat', 'Jepang', 'Indonesia', 'Dessert', 'Toko Roti dan Kue'];

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Restaurants by Cuisine</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                {
                  backgroundColor:
                    selectedCategory === category ? 'blue' : 'lightgray',
                },
              ]}
              onPress={() =>
                setSelectedCategory((prevCategory) =>
                  prevCategory === category ? null : category
                )
              }>
              <Text style={styles.categoryButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView>
          {restaurantsByCuisine.map((restaurant) => (
            <View key={restaurant.id} style={styles.restaurantItem}>
              <Text>Nama: {restaurant.title}</Text>
              <Text>Alamat: {restaurant.street}</Text>
              <Text>Cuisine: {restaurant.cuisine}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    margin: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryButton: {
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
  },
  categoryButtonText: {
    color: 'white',
  },
  restaurantItem: {
    marginBottom: 5,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});
