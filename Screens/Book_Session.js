import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios';

import {  StyleSheet, Text, View, TextInput, Image, TouchableOpacity, CheckBox } from 'react-native';

export default function Book_Session({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [major, setMajor] = useState('');
  const [data, setData] = useState([]);




  const getCourses = async () => {
    try {
      const response = await axios.get('http://172.19.3.82:3000/api/courses');
      const formattedCourses = response.data.courses.map(course => ({
        key: course.course_id,
        value: course.course_name, // Just the course name
      }));
      setData(formattedCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCourses();
  }, []);
















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

      <Text style={styles.title}>Book a Session</Text>

      <View style={styles.inputContainer}>



  <Text style={styles.title2}>Course</Text>
  <SelectList
  setSelected={val => setM(val)}
  data={data} // Now this will be just course names
  save="value" // Will save the course name or the combined string
  placeholder="Select one of your courses"
  search={true}
  boxStyles={styles.box}
  dropdownStyles={styles.dropdown}
/>



<Text style={styles.title2}>Tutor</Text>

      <SelectList
        setSelected={(val) => setMajor(val)}
        data={data}
        save="value"
        placeholder="Select a tutor"
        search={true}
        boxStyles={styles.box}
        dropdownStyles={styles.dropdown}
      />


<Text style={styles.title2}>Date</Text>

<TextInput
      style={styles.input}
      placeholder="MM-DD-YYYY"
      value={lastName}
      onChangeText={setLastName}
    />

<Text style={styles.title2}>Time</Text>

<TextInput
      style={styles.input}
      placeholder="Based on tutor schedule"
      value={lastName}
      onChangeText={setLastName}
    />  

<Text style={styles.title2}>Topic</Text>

<TextInput
      style={styles.input}
      placeholder="Share the topic(s) you want to discuss with the tutor"
      value={lastName}
      onChangeText={setLastName}
    />

    <View style={styles.summary}>

        <Text style={styles.title3}>Summary</Text>
        <Text style={styles.title3}>Course: {major}</Text>
        <Text style={styles.title3}>Tutor: {major}</Text>


    </View>






</View>




      <TouchableOpacity style={styles.createButton} >
        <Text style={styles.createButtonText}>Book Session</Text>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#142960',
    marginBottom: 15,

    paddingBlockStart: 7,
    paddingBlockEnd: 7,
  },
  title2: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#142960',
    marginBottom: 1,

    paddingBlockStart: 7,
    paddingBlockEnd: 7,
  },  title3: {
    fontSize: 12,
    color: '#142960',
    marginBottom: 1,

    paddingBlockStart: 7,
    paddingBlockEnd: 7,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
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
  summary:{
    backgroundColor: 'lightgrey',

    padding: 10,
    borderRadius: 5,
  },

});

