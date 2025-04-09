import {StyleSheet, FlatList, StatusBar, SafeAreaView, View, Text, Image} from 'react-native';
import { useState, useEffect, createContext, useContext } from 'react';//////  Esta parte mira use  y el create !!!
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons'; // Or any other icon library you're using


function Tutor(props){
  const {tutor} = props
  return(
      <View style={styles.tutor}>

        <Image
            style={styles.tutorImage}
            source={{uri: `http://172.19.3.82:3000/profile/tutor${tutor.id}.jpg`}} 
            />

        <View style={styles.tutorInfo}>
          <Text style={styles.tutorName}>{tutor.tutor_name}</Text>
          <Text style={styles.tutorMajor}>{tutor.tutor_major}</Text>
          <Text style={styles.tutorId}>{tutor.tutor_id}</Text>
          {/* Star Rating */}
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={14} color="gold" />
        <Text style={styles.ratingText}>{tutor.rating || '4.1'}</Text>
      </View>
          
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
      <Text style={styles.title}> Available Tutors</Text>

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
    padding:8,
    flexDirection:"row",


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
  tutorImage:{
    marginHorizontal: 10,
    marginTop: 10,
    width:60,
    height:60,
    borderRadius:50,
    borderColor: 'black',
    borderWidth:2
  },
  tutorInfo:{
    padding:8,
    marginVertical: 0

  },
  tutorName:{
    fontSize:16,
    fontWeight:"bold",
    color:"#000000",
  },
  tutorMajor:{
    fontSize:14
  },
  tutorId:{
    fontSize:12
  },
  title:{
    fontSize:26,
    fontWeight:"bold",
    color:"#000000",
    marginBottom:20,
    marginTop:30,
    textAlign:"left",
    paddingHorizontal:50
  },  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginVertical: 0
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
  },
});