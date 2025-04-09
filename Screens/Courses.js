import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


const courses = [
  {
    id: '1',
    code: 'KU_SAN_COP4620D1-101132025',
    name: 'Compiler Construction',
    status: 'Open',
    image: 'https://source.unsplash.com/400x200/?forest',
    favorite: true
  },
  {
    id: '2',
    code: 'KU_SAN_CEN3410D1-101132025',
    name: 'Software Testing',
    status: 'Open',
    image: 'https://source.unsplash.com/400x200/?canyon',
    favorite: false
  },
  {
    id: '3',
    code: 'KU_SAN_CEN4230D1-101132025',
    name: 'Domain Specific Languages',
    status: 'Open',
    image: 'https://source.unsplash.com/400x200/?waterfall',
    favorite: false
  }
];

function  CourseCard ({ course }) {
  return   (

    <View style={styles.card}>
      <Image source={require('../assets/image.png')} style={styles.image} />

      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.courseCode}>{course.course_code}</Text>
          <Text style={styles.courseName}>{course.course_name}</Text>
        </View>
      </View>
    </View>
  );
  

}


const CoursesScreen = () => {


  const [isLoading, setLoading] = useState(true);

  
  const [data, setData] = useState([])

  const getCourses = async () => {
    try {
      const response = await axios.get('http://172.19.3.82:3000/api/courses'); ////172.19.3.82////172.19.3.82
      setData(response.data.courses); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);


  return (
    <View style={styles.container}>

        
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput placeholder="Search your classes" style={styles.searchInput} />
      </View>

      
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CourseCard course={item} />}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 5 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom:10
  },
  searchInput: { flex: 1, padding: 10, marginTop: 0 },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
    elevation: 2
  },
  image: { width: '100%', height: 120 },
  cardContent: { flexDirection: 'row', alignItems: 'center', padding: 15 },
  courseCode: { fontSize: 12, color: 'gray' },
  courseName: { fontSize: 18, fontWeight: 'bold' },
  courseStatus: { fontSize: 14, color: 'gray' },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  navItem: { flex: 1, alignItems: 'center' },
  navText: { fontSize: 12, color: 'gray' },
  activeNav: { borderTopWidth: 3, borderTopColor: 'purple' },
  activeText: { color: 'purple' }
});

export default CoursesScreen;
