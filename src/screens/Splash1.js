
import React, { useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Image, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash1 = () => {
  const navigation = useNavigation();
  const translateYAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Bounce animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateYAnim, {
          toValue: 10,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(translateYAnim, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    ).start();

    // Navigate to 'splash2' after a delay
    const timeout = setTimeout(() => {
      navigation.navigate('splash2');
    }, 7000);

    // Clear the timeout to avoid navigation if the component unmounts
    return () => clearTimeout(timeout);
  }, [translateYAnim, navigation]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FEDB71' }}>
      <Animated.Image
        source={require('../../assets/logo2.png')}
        style={{
          width: 200,
          height: 200,
          transform: [{ translateY: translateYAnim }],
        }}
      />
      <Text style={{ marginTop: 20, fontSize: 24, fontWeight: 'bold', fontStyle: 'italic', color: '#C66200' }}>Eatsplorer!</Text>
      <Text style={{ marginTop: 10, fontSize: 16, color: 'white' }}>Where Every Bite Tells a Story</Text>
    </SafeAreaView>
  );
};

export default Splash1;

