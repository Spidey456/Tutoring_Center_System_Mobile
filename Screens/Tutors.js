import {StyleSheet, FlatList, StatusBar, SafeAreaView, View, Text, Image} from 'react-native';
import { useState, useEffect, createContext, useContext } from 'react';//////  Esta parte mira use  y el create !!!
import axios from 'axios';


function Tutor(props){
  const {tutor} = props
  return(
      <View style={styles.tutor}>

        <Image
            style={styles.tutorImage}
            source={{uri: 'https://reactjs.org/logo-og.png'}} 
            />

        <View style={styles.tutorInfo}>
          <Text style={styles.tutorName}>{tutor.tutor_name}</Text>
          <Text style={styles.tutorMajor}>{tutor.tutor_major}</Text>
          <Text style={styles.tutorId}>{tutor.tutor_id}</Text>
        </View>

      </View>
  )
}



export default function Tutors() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getTutors = async () => {
      try {
        const response = await axios.get('http://172.19.3.82:3000/api/tutors'); 
        setData(response.data.tutors); 
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
        getTutors();
    }, []);



  return (
      <>
        <SafeAreaView style={styles.container}>
          <FlatList data={data}
                    renderItem={({item}) => <Tutor tutor={item}/>} 
                    keyExtractor={(item, index) => index.toString()}/>
        </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  tutor:{
    borderBottomWidth:0.5,
    borderBottomColor:"black",
    padding:8,
    flexDirection:"row"
  },
  tutorImage:{
    width:80,
    height:80,
    borderRadius:50,
    borderColor: 'black',
    borderWidth:2
  },
  tutorInfo:{
    padding:8
  },
  tutorName:{
    fontSize:18,
  },
  tutorMajor:{
    fontSize:14
  },
  tutorId:{
    fontSize:12
  }
});