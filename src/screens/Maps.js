import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import { getLocationAsync } from '../../functions/functions';

export default function Maps({ navigation }) {
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getLocationAsync(setLocation, setErrorMsg, setNearbyRestaurants, setLocationName, () => {});
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