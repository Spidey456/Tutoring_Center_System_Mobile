import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, SafeAreaView, TextInput } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';


const Main_Page = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
  

  const getCourses = async () => {
    try {
      const response = await axios.get('http://172.19.3.82:3000/api/courses');
      setData(response.data.courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.courseContainer}>
        <View style={styles.header}>
        <Text style={styles.courseCode}>{item.course_code}</Text>
        <Text style={styles.courseTitle}>{item.course_name}</Text>


        </View>

      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Credits</Text>
       
        <Text style={styles.detailValue}>{item.tutors_counter}</Text>
      </View>
      <Text style={styles.detailLabel}>Tutors Available:</Text>
    </View>
  );

  return (

    <>
    <SafeAreaView style={styles.container}>

    <Text style={styles.title}>Hello, Luis!</Text>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="white" />


        <TextInput
          placeholder="Search for courses, tutors ..." color="white"
            placeholderTextColor="white"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

    <Text style={styles.title2}>Courses Details</Text>




        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.course_id.toString()}
          contentContainerStyle={styles.listContainer}
        />

    </SafeAreaView>

    
    </>

  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 50,
      },
      title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '000000',
        marginBottom: 20,
        marginTop: 30,  
        textAlign: 'left',
        paddingHorizontal: 50,
      },
      title2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '000000',
        marginBottom: 20,
        marginTop: 1,  
        textAlign: 'left',
        paddingHorizontal: 40,
      },
      subtitle: {
        fontSize: 13,
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 5,
        paddingHorizontal: 20,
    
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1e2a5e',
        borderRadius: 6,
        marginHorizontal: 25,
        paddingHorizontal: 10,
        marginBottom: 30,
        color: 'white',
      },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  courseContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingLeft: 0,
    borderWidth: 1,
    borderColor: '#ddd',

    marginBottom: 18,
    marginHorizontal: 25,
  },
  courseCode: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1e2a5e',

  },
  courseTitle: {
    fontSize: 13,
    marginBottom: 5,
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 5,
    paddingLeft: 5,
    color: '#1e2a5e',
    width: 150,
  },
  detailValue: {
    flex: 1,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    color: 'white',
  },
    header: {
        backgroundColor: 'rgba(211, 211, 211, 0.2)',
       
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
        marginBottom: 10,
        marginTop: 0,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
});

export default Main_Page;
