import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, orderByChild, equalTo, once } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import * as Location from 'expo-location';

const firebaseConfig = {
    apiKey: "AIzaSyB6SYlg6V2C3NsraWQ6oQDrJrBt7-KjST0",
    authDomain: "fp-mobile-8d7ee.firebaseapp.com",
    databaseURL: "https://fp-mobile-8d7ee-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fp-mobile-8d7ee",
    storageBucket: "fp-mobile-8d7ee.appspot.com",
    messagingSenderId: "497811191657",
    appId: "1:497811191657:web:ba48369e63936e9577eff8"
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
        distance: data[id].distance
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

export const handleSearch = (query, setSearchResults) => {
  try {
    onValue(
      orderByChild(dataRef, 'title'),
      equalTo(dataRef, query),
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();

          // Log the entire data for debugging purposes
          console.log("Data from Firebase:", data);

          const resultsArray = Object.keys(data || {}).map(id => ({
            id,
            title: data[id]?.title || "",
            // Add other properties if needed
          }));

          // Log the search query for debugging
          console.log("Search Query:", query);

          // Log the filtered results
          const filteredResults = resultsArray.filter(restaurant => {
            const isMatch = restaurant.title.toLowerCase().includes(query.toLowerCase());
            console.log(`Checking: "${restaurant.title}" - Match: ${isMatch}`);
            return isMatch;
          });

          console.log("Filtered results:", filteredResults);

          if (filteredResults.length > 0) {
            setSearchResults(filteredResults);
            console.log("Search results:", filteredResults);
          } else {
            setSearchResults([]);
            console.log("Restoran tidak ditemukan");
          }
        } else {
          setSearchResults([]);
          console.log("Restoran tidak ditemukan");
        }
      }
    );
  } catch (error) {
    console.error("Error searching:", error);
  }
};