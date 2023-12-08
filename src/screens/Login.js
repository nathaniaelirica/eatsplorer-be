import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { createUser, signIn } from '../functions//function.js';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // New state for success message

  const handleLogin = async () => {
    try {
      const loginResult = await signIn(email, password);

      if (loginResult.user) {
        // Handle login berhasil
        setSuccessMessage('Login successful!');
        // Navigasi atau logika setelah login berhasil
      } else {
        setError(`Error: ${loginResult.errorCode} - ${loginResult.errorMessage}`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  const handleRegister = async () => {
    try {
      const registerResult = await functions.createUser(email, password);

      if (registerResult.user) {
        // Handle register berhasil
        setSuccessMessage('Registration successful!');
        // Navigasi atau logika setelah register berhasil
      } else {
        setError(`Error: ${registerResult.errorCode} - ${registerResult.errorMessage}`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {successMessage && <Text style={{ color: 'green' }}>{successMessage}</Text>}
    </View>
  );
};
