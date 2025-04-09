import React, {useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext'; // Adjust the import path as necessary  
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const { login } = useContext(AuthContext); // Access the login function from AuthContext
  const { control, handleSubmit, formState: { errors } } = useForm();

  const loginUser = async (data) => {
    try {
      console.log("Datos enviados:", data);
      const response = await axios.post('http://172.19.3.82:3000/login', data);
      const { token } = response.data; // Assuming the token is in the response data
      if (token) {
        login(token); // Call the login function from AuthContext
        console.log("Login Successful");
      } else {
        throw new Error("No token received");
      }
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });
    } catch (e) {
      console.error(e.message);
      console.log("Login failed:", e.response ? e.response.data : e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo_Kae.png')} /> 

      <Text style={styles.title}>Welcome Back!</Text>

      <View style={styles.inputContainer}>
        {/* KU Email Input */}
        <Text style={styles.label}>KU Email</Text>
        <Controller
          control={control}
          name="email"
          rules={{ 
            required: "Email is required", 
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" } 
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder=""
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          name="password_hash"
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(loginUser)}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.createAccountText}>
          Don't have an account? <Text style={styles.createAccountLink}>Create Account</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 100,
    
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#142960',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
    paddingBlockStart: 7,
    paddingBlockEnd: 7,
  },
  inputContainer: {
    width: '85%',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#142960',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F8F8F8',
    marginBottom: 20,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    backgroundColor: 'orange', // Gold color for login button
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 35,
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  createAccountText: {
    fontSize: 14,
    color: '#000',
  },
  createAccountLink: {
    color: '#142960',
    fontWeight: 'bold',
  },
});

