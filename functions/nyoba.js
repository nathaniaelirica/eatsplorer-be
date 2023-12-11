import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome'; // Impor ikon dari react-native-vector-icons

const firebaseConfig = {
  apiKey: "AIzaSyCWWRzxCc8_X_VsH5z_C297dcYB_pccYV0",
  authDomain: "nyobaeatsplorer.firebaseapp.com",
  databaseURL: "https://nyobaeatsplorer-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nyobaeatsplorer",
  storageBucket: "nyobaeatsplorer.appspot.com",
  messagingSenderId: "594654819365",
  appId: "1:594654819365:web:a21af123ea0ad347cfbbcc"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dataRef = ref(db, '/');

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [bookmarkedRestaurants, setBookmarkedRestaurants] = useState([]);

  const toggleBookmark = (restaurant) => {
    const isBookmarked = bookmarkedRestaurants.some((r) => r.title === restaurant.title);
    if (isBookmarked) {
      // Hapus restoran dari bookmark berdasarkan judul
      const updatedBookmarks = bookmarkedRestaurants.filter((r) => r.title !== restaurant.title);
      setBookmarkedRestaurants(updatedBookmarks);
      console.log(`Removed bookmark for restaurant: ${restaurant.title}`);
    } else {
      // Tambahkan restoran ke bookmark berdasarkan judul
      const updatedBookmarks = [...bookmarkedRestaurants, restaurant];
      setBookmarkedRestaurants(updatedBookmarks);
      console.log(`Bookmarked restaurant: ${restaurant.title}`);
    }
  };

  useEffect(() => {
    // Ambil data restoran dari Firebase
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();

      const restaurantsData = Object.keys(data).map((id) => ({
        id,
        title: data[id].title,
        street: data[id].street,
        cuisine: data[id].cuisine,
      }));

      setRestaurants(restaurantsData);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Restaurants</Text>
        <ScrollView>
          {restaurants.map((restaurant) => (
            <View key={restaurant.title} style={styles.restaurantItem}>
              <Text>Nama: {restaurant.title}</Text>
              <Text>Alamat: {restaurant.street}</Text>
              <Text>Cuisine: {restaurant.cuisine}</Text>
              <TouchableOpacity onPress={() => toggleBookmark(restaurant)} style={styles.bookmarkButton}>
                <Icon name={bookmarkedRestaurants.some((r) => r.title === restaurant.title) ? "star" : "star-o"} size={20} color="yellow" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Bookmarked Restaurants</Text>
        <ScrollView>
          {bookmarkedRestaurants.map((restaurant) => (
            <View key={restaurant.title} style={styles.restaurantItem}>
              <Text>Nama: {restaurant.title}</Text>
              <Text>Alamat: {restaurant.street}</Text>
              <Text>Cuisine: {restaurant.cuisine}</Text>
              <TouchableOpacity onPress={() => toggleBookmark(restaurant)} style={styles.bookmarkButton}>
                <Icon name="star" size={20} color="yellow" />
              </TouchableOpacity>
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
    flexDirection: 'row',
  },
  listContainer: {
    flex: 1,
    margin: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  restaurantItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  bookmarkButton: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
});
