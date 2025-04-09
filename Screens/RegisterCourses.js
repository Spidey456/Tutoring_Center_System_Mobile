import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

function CourseCard({ course, selected, onPress  }) {
  return (
    <TouchableOpacity onPress={() => onPress(course)}>
      <View style={[styles.card, selected && styles.cardSelected]}>
        <View style={styles.cardContent}>
          <View style={{ flex: 1 }}>
            <Text style={styles.code}>{course.course_code}</Text>
            <Text style={styles.name}>{course.course_name}</Text>
          </View>
          {selected && (
            <Ionicons name="checkmark-circle" size={24} color="#fff" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const RegisterCourses = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);

  const getCourses = async () => {
    try {
      const response = await axios.get('http://172.19.3.82:3000/api/courses');
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

  const toggleSelect = (course) => {
    const exists = selectedCourses.find(c => c.course_code === course.course_code);
    if (exists) {
      setSelectedCourses(selectedCourses.filter(c => c.course_code !== course.course_code));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const filteredCourses = data.filter(course =>
    course.course_code.toLowerCase().includes(search.toLowerCase()) ||
    course.course_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>

<TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, marginHorizontal: 30 }}>
  <Ionicons name="arrow-back" size={29} color="white" />
</TouchableOpacity>



      <Text style={styles.title}>Your Courses</Text>
      <Text style={styles.subtitle}>
        Select the courses you're currently enrolled in to personalize your tutoring experience.
      </Text>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search Courses"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Selected Tags */}
      <View style={styles.selectedContainer}>
        {selectedCourses.map(course => (
          <View key={course.course_code} style={styles.tag}>
            <Text style={styles.tagText}>{course.course_code}</Text>
            <TouchableOpacity onPress={() => toggleSelect(course)}>
              <Ionicons name="close" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Text style={styles.availableTitle}>Available Courses</Text>

      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <FlatList
          data={filteredCourses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CourseCard
              course={item}
              selected={selectedCourses.some(c => c.course_code === item.course_code)}
              onPress={toggleSelect}
            />
          )}
        />
      )}

            <TouchableOpacity style={styles.createButton} >
              <Text style={styles.createButtonText}>Create Account</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#142960',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
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
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  selectedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    marginHorizontal: 30,

  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7B500',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    color: '#fff',
    marginRight: 5,
  },
  availableTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 30,

    
  },
  card: {
    backgroundColor: '#F7B500',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    marginHorizontal: 30,
  },
  cardSelected: {
    backgroundColor: '#d28c00',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  code: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  name: {
    color: '#222',
    fontSize: 13,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  createButton: {
    width: '85%',
    backgroundColor: '#0e4ea2',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 35,
    marginTop: 20,
    marginHorizontal: 30,


  },
  createButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RegisterCourses;
