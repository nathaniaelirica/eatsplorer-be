import React, { useState, useEffect } from 'react';
import { initializeApp, firebase } from "firebase/app";
import { getDatabase, ref, onValue, orderByChild, equalTo, once, query, startAt, endAt } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import * as Location from 'expo-location';

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
const auth = getAuth(app);


export const getRestaurantsByRate = async (setRestaurantsByRate) => {
  try {
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();

      const restaurants = Object.keys(data).map((id) => ({
        id,
        title: data[id].title,
        street: data[id].street,
        rating: data[id].rate,
        distance: data[id].distance,
        imageUrl: data[id].imageUrl,
        cuisine: data[id].cuisine
      }));

      const sortedRestaurants = restaurants.sort((a, b) => b.rating - a.rating);
      console.log('Restaurants sorted by rate:', sortedRestaurants);
      setRestaurantsByRate(sortedRestaurants);
    });
  } catch (error) {
    console.error('Error fetching restaurants by rate:', error);
  }
};

export const getNearbyRestaurants = async (setNearbyRestaurants) => {
    try {
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
  
        // Extract restaurant data and include distance
        const restaurantsWithDistance = Object.keys(data).map((id) => ({
          id,
          title: data[id].title,
          street: data[id].street,
          rating: data[id].rate,
          distance: data[id].distance // Assuming 'distance' is the distance column
        }));
  
        // Sort the array based on distance
        const sortedRestaurants = restaurantsWithDistance.sort((a, b) => a.distance - b.distance);
  
        console.log('Nearby Restaurants:', sortedRestaurants);
        setNearbyRestaurants(sortedRestaurants);
      });
    } catch (error) {
      console.error('Error fetching nearby restaurants:', error);
    }
};

export const getLocationName = async (latitude, longitude, setLocationName) => {
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

export const getLocationAsync = async (setLocation, setErrorMsg, setNearbyRestaurants, setLocationName) => {
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
      currentLocation.coords.longitude,
      setLocationName
    );

    await getNearbyRestaurants(
      setNearbyRestaurants 
    );
  } catch (error) {
    console.error('Error getting location:', error);
    setErrorMsg('Error getting location');
  }
};

export const truncateLocationName = (name) => {
    const indexComma = name.indexOf(',');  
    const truncatedName = indexComma !== -1 ? name.substring(0, indexComma) : name;
    return truncatedName;
};

export const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Signed up 
      const user = userCredential.user;
      console.log("User registered:", user);
      return { user, errorCode: null, errorMessage: null };
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Register failed:", errorCode, errorMessage);
      return { user: null, errorCode, errorMessage };
    }
};  
  
export const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed in 
      const user = userCredential.user;
      console.log("User logged in:", user);
      return { user, errorCode: null, errorMessage: null };
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login failed:", errorCode, errorMessage);
      return { user: null, errorCode, errorMessage };
    }
};


export const handleSearch = (searchQuery, setSearchResults) => {
  try {
    // Convert the search query to lowercase (for case-insensitive search)
    const lowerSearchQuery = searchQuery.toLowerCase();

    const searchRef = query(dataRef, orderByChild('title'));

    // Use startAt and endAt to perform a partial text search
    onValue(searchRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        // Filter the data based on the search query
        const searchResults = Object.keys(data).filter(id => {
          const title = data[id].title.toLowerCase();
          return title.includes(lowerSearchQuery);
        }).map(id => ({
          title: data[id].title,
        }));

        setSearchResults(searchResults);
        console.log("Search Results:", searchResults);
      } else {
        setSearchResults([]);
        console.log("No results found for:", searchQuery);
      }
    });
  } catch (error) {
    console.error("Error in search:", error);
    setSearchResults([]);
  }
};

export const selectCategory = (restaurants, setRestaurantsByCuisine, selectedCategoryValue) => {
  
  console.log('Selected Category in selectCategory:', selectedCategoryValue);

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      selectedCategoryValue ? restaurant.cuisine === selectedCategoryValue : true
  );

  console.log('Restaurants filtered by cuisine:', filteredRestaurants);
  setRestaurantsByCuisine(filteredRestaurants);
};

export const getRestaurantsByCuisine = async (setRestaurantsByCuisine, selectedCategory) => {
  try {
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();

      const restaurants = Object.keys(data).map((id) => ({
        id,
        title: data[id].title,
        street: data[id].street,
        cuisine: data[id].cuisine,
      }));

      console.log('Before calling selectCategory. Selected Category:', selectedCategory);

      // Pastikan selectedCategory tidak undefined sebelum memanggil selectCategory
      if (selectedCategory !== undefined) {
        // Memanggil fungsi selectCategory dengan menyediakan setRestaurantsByCuisine dan selectedCategory
        selectCategory(restaurants, setRestaurantsByCuisine, selectedCategory);
      } else {
        console.log('Selected Category is undefined. Cannot filter restaurants.');
      }

      console.log('After calling selectCategory. Selected Category:', selectedCategory);
    });
  } catch (error) {
    console.error('Error fetching restaurants by cuisine:', error);
  }
};

// export const fetchDataFromFirebase = (setRestaurants) => {
//   try {
//     onValue(dataRef, (snapshot) => {
//       const data = snapshot.val();

//       const restaurantsData = Object.keys(data).map((id) => ({
//         id,
//         title: data[id].title,
//         street: data[id].street,
//         cuisine: data[id].cuisine,
//       }));

//       setRestaurants(restaurantsData);
//     });
//   } catch (error) {
//     console.error('Error fetching data from Firebase:', error);
//   }
// };

export const toggleBookmark = (restaurant, bookmarkedRestaurants, setBookmarkedRestaurants) => {
  try {
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();

      const restaurantsData = Object.keys(data).map((id) => ({
        id,
        title: data[id].title,
        street: data[id].street,
        cuisine: data[id].cuisine,
      }));

      const isBookmarked = bookmarkedRestaurants.some((r) => r.id === restaurant.id);
      if (isBookmarked) {
        // Unbookmark the restaurant
        const updatedBookmarks = bookmarkedRestaurants.filter((r) => r.id !== restaurant.id);
        setBookmarkedRestaurants(updatedBookmarks);
      } else {
        // Bookmark the restaurant
        const updatedBookmarks = [...bookmarkedRestaurants, restaurant];
        setBookmarkedRestaurants(updatedBookmarks);
      }
    });
  } catch (error) {
    console.error('Error :', error);
  }
};