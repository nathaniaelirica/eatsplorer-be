import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import * as Location from 'expo-location';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCNicYBjLGdDwhqKbhWLgJQbZ1v5c0KfmE",
  authDomain: "storage-4d35e.firebaseapp.com",
  databaseURL: "https://storage-4d35e-default-rtdb.firebaseio.com",
  projectId: "storage-4d35e",
  storageBucket: "storage-4d35e.appspot.com",
  messagingSenderId: "162934766906",
  appId: "1:162934766906:web:211d547dbd6d404ffba403"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dataRef = ref(db, '/');

export default function App() {
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getNearbyRestaurants = async (latitude, longitude) => {
    try {
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        console.log('All Data from Firebase:', data);

        const restaurants = Object.keys(data).map((id) => ({
          id,
          title: data[id].title,
          street: data[id].street,
          distance: data[id].distance,
          imageUrl: data[id].imageUrl,
        }));

        const sortedRestaurants = restaurants.sort((a, b) => a.distance - b.distance);

        console.log('Nearby Restaurants:', sortedRestaurants);
        setNearbyRestaurants(sortedRestaurants);
      });
    } catch (error) {
      console.error('Error fetching nearby restaurants:', error);
    }
  };

  const handleSearch = () => {

    const filteredRestaurants = nearbyRestaurants.filter((restaurant) => {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const lowerCaseTitle = restaurant.title.toLowerCase();
      const lowerCaseStreet = restaurant.street.toLowerCase();
  
      return (
        lowerCaseTitle.includes(lowerCaseQuery) ||
        lowerCaseStreet.includes(lowerCaseQuery)
      );
    });
  
    const sortedRestaurants = filteredRestaurants.sort((a, b) => a.distance - b.distance);
  
    setNearbyRestaurants(sortedRestaurants);
  };

  const getLocationAsync = async () => {
    try {
      console.log('Getting location...');
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        console.log('Location permission denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      console.log('Location:', currentLocation);

      setLocation(currentLocation);

      await getLocationName(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude
      );

      await getNearbyRestaurants(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude
      );
    } catch (error) {
      console.error('Error getting location:', error);
      setErrorMsg('Error getting location');
    }
  };

  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=0`
      );
      const data = await response.json();

      if (data.display_name) {
        setLocationName(data.display_name);
      }
    } catch (error) {
      console.error('Error fetching location name:', error);
    }
  };

  useEffect(() => {
    getLocationAsync();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Check Location" onPress={getLocationAsync} />
      </View>
      <View style={styles.locationContainer}>
        {locationName && <Text style={styles.locationText}>{locationName}</Text>}
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for address or restaurant name"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Nearby Restaurants</Text>
        <ScrollView>
          {nearbyRestaurants.map((restaurant) => (
            <View key={restaurant.id} style={styles.restaurantItem}>
               <Image
        source={{ uri: restaurant.imageUrl }}
        style={{ width: 200, height: 200, marginVertical: 10 }}
      />
              <Text>Nama: {restaurant.title}</Text>
              <Text>Alamat: {restaurant.street}</Text>
              <Text>Jarak: {restaurant.distance} meters</Text>
      {console.log('Image URL:', restaurant.imageUrl)}
    </View>
          ))}
        </ScrollView>
      </View>
      {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    margin: 30,
    top: 20,
  },
  locationContainer: {
    margin: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    margin: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  restaurantItem: {
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    margin: 10,
  },
});
