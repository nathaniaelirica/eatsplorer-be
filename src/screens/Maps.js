import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Maps({ navigation }) {
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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
  
      // Mendapatkan nama lokasi menggunakan Nominatim dari OpenStreetMap
      await getLocationName(currentLocation.coords.latitude, currentLocation.coords.longitude);
    } catch (error) {
      console.error('Error getting location:', error);
      setErrorMsg('Error getting location');
    }
  };
  
  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
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
    {location && (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title={locationName}
        />
      </MapView>
    )}
    {locationName && <Text>{locationName}</Text>}
    {errorMsg && <Text>{errorMsg}</Text>}
    <Button  title="OK"  onPress={() => navigation.navigate("main")} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});