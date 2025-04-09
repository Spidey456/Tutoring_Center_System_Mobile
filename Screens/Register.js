import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios';

import { 
  StyleSheet, Text, View, TextInput, Image, TouchableOpacity, CheckBox
} from 'react-native';

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [major, setMajor] = useState('');
  const [data, setData] = useState([]);



useEffect(() => {
  const fetchMajors = async () => {
    try {
      const response = await axios.get('http://172.19.3.82:3000/api/majors');
      const formatted = response.data.majors.map((item) => ({
        key: item.major_id,
        value: item.major_name.trim(), // removes extra spaces
      }));
      setData(formatted);
    } catch (error) {
      console.error('Error fetching majors:', error);
    }
  };

  fetchMajors();
}, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo_Kae.png')} /> 

      <Text style={styles.title}>Get Started!</Text>

      <View style={styles.inputContainer}>
  <View style={styles.nameContainer}>
    <TextInput
      style={[styles.input, styles.halfInput]}
      placeholder="First Name"
      value={firstName}
      onChangeText={setFirstName}
    />
    <TextInput
      style={[styles.input, styles.halfInput]}
      placeholder="Last Name"
      value={lastName}
      onChangeText={setLastName}
    />
  </View>

  <TextInput
    style={styles.input}
    placeholder="KU Email"
    keyboardType="email-address"
    value={email}
    onChangeText={setEmail}
  />

  <TextInput
    style={styles.input}
    placeholder="Password"
    secureTextEntry
    value={password}
    onChangeText={setPassword}
  />

  <TextInput
    style={styles.input}
    placeholder="Confirm Password"
    secureTextEntry
    value={confirmPassword}
    onChangeText={setConfirmPassword}
  />


      <SelectList
        setSelected={(val) => setMajor(val)}
        data={data}
        save="value"
        placeholder="Select your major"
        search={true}
        boxStyles={styles.box}
        dropdownStyles={styles.dropdown}
      />




</View>




      <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('RegisterCourses')}>
        <Text style={styles.createButtonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Log In</Text>
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
    paddingHorizontal: 20,
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 30,
    borderRadius: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#142960',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
    paddingBlockStart: 7,
    paddingBlockEnd: 7,
  },
  inputContainer: {
    width: '80%',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  input: {
    height: 40,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F8F8F8',
    marginBottom: 30,
  },

  linkText: {
    color: '#142960',
    fontWeight: 'bold',
  },
  createButton: {
    width: '85%',
    backgroundColor: 'orange', 
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 35,
    marginTop: 20,


  },
  createButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#000',
  },
  loginLink: {
    color: '#142960',
    fontWeight: 'bold',
  },
});

