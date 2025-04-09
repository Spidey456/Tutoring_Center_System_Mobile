import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const Sessions = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getSessions = async () => {
    try {
      const response = await axios.get('http://172.19.3.82:3000/api/sessions');  //172.19.3.82 - -  172.20.0.159  //// 172.19.3.82 //// 172.20.10.1
      setData(response.data.sessions); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSessions();
  }, []);

  function Session({ session }) {
    return (
      <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={{ flex: 1 }}>
           <Text style={styles.name}>{session.course_name}</Text> 
           <Text style={styles.role}><EvilIcons name="clock" size={18} color="black" />{session.session_duration}</Text> 
            <Text style={styles.position}> Tutor: {session.tutor_name}</Text> 
            <Text style={styles.role}>{session.student}</Text> 
          </View>
          <Text style={styles.email}>{session.total_hours}</Text> 
        </View>
      </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title2}>My Sessions</Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()} 
          renderItem={({ item }) => <Session session={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingTop: 70 },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: '#ddd',
    marginHorizontal: 25,

  },
  cardContent: { flexDirection: 'row', alignItems: 'center', padding: 3},
  name: { fontWeight: 'bold', fontSize: 16, padding: 3,  },
  position: { color: '#666', fontSize: 14,  padding: 3 },
  email: { color: '#999', fontSize: 14,  padding: 3 },
  role: { marginRight: 10, color: '#666',  padding: 3 },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '000000',
    marginBottom: 20,
    marginTop: 1,  
    textAlign: 'left',
    paddingHorizontal: 30,
  },
  cajita: {
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#ddd',  
  },
});

export default Sessions;
