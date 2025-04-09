import {StyleSheet, FlatList, StatusBar, SafeAreaView, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { useState, useEffect, createContext, useContext,  } from 'react';//////  Esta parte mira use  y el create !!!
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons'; // Or any other icon library you're using
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';




export default function Profile() {



  return (
      <>
      <View style={styles.container}>


        <View style={styles.profileHeader}>
        <Image
                    style={styles.tutorImage}
                    source={{uri: 'http://172.19.3.82:3000/profile/tutor1.jpg'}} 
                    />

      <Text style={styles.name}>Luis Saravia</Text>
      <Text style={styles.mail}>L.SaraviaGuzman@student.keiseruniversity.edu</Text>
      <Text style={styles.major}>Software Engineering</Text>
      <Text style={styles.id}>10119096</Text>


        </View>


      <Text style={styles.title}>Settings</Text>

      <View style={styles.inputContainer}>
        
      

<View style={styles.iconInput}>
  <Entypo name="lock-open" size={18} color="lightgray" style={styles.inputIcon} />
  <TextInput
    style={styles.inputWithIcon}
    placeholder="Change Password"
    secureTextEntry
  />
</View>

<View style={styles.iconInput}>
<FontAwesome name="phone" size={18} color="lightgray" style={styles.inputIcon} />
  <TextInput
    style={styles.inputWithIcon}
    placeholder="Change Phone Number"
    secureTextEntry
  />
</View>

<View style={styles.iconInput}>
<MaterialIcons name="security" size={18} color="lightgray" style={styles.inputIcon}  />
  <TextInput
    style={styles.inputWithIcon}
    placeholder="Privacy Settings"
    secureTextEntry
  />
</View>

<View style={styles.iconInput}>
<MaterialIcons name="privacy-tip" size={18} color="lightgray" style={styles.inputIcon} />
  <TextInput
    style={styles.inputWithIcon}
    placeholder="Terms and Conditions"
    secureTextEntry
  />
</View>




      </View>

            <TouchableOpacity style={styles.createButton}>
              <Text style={styles.createButtonText}>Logout</Text>
            </TouchableOpacity>







      </View>

      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
    alignItems: 'center',
    marginTop: 100
  },
    profileHeader: {
        backgroundColor: '#1e2a5e',
        height: 200,
        width: '85%',
        borderRadius: 5,
       alignItems: 'center',
       marginTop: 40,


    },  
    tutorImage:{
        marginTop: -50,
        width:120,
        height:120,
        borderRadius:100,
        marginBottom: 15,

      },  name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 10,

      },
      mail:{
        fontSize: 13,
        color: 'white',
        paddingBottom: 10,
      },major:{
        fontWeight: 'bold',
        fontSize: 13,
        color: 'white',
        paddingBottom: 10,
      },id:{
        fontWeight: 'bold',
        fontSize: 13,
        color: 'white',
        paddingBottom: 10,
      },
      title:{
        fontSize:26,
        fontWeight:"bold",
        color:"#000000",
        marginBottom:20,
        marginTop: 10,
        alignContent: 'left',
        textAlign:"left",
        marginLeft: 20,
        marginLeft: -200, 
      },
      inputContainer: {
        width: '80%',
      },  input: {
        height: 40,
        borderColor: '#D1D1D1',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#F8F8F8',
        marginBottom: 20,
      },  
      createButton: {
        width: '80%',
        backgroundColor: 'white', // Gold color for button
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 55,
        marginTop: 1,
        borderWidth: 1,
        borderColor: 'lightgray',
    
    
      },
      createButtonText: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
      },iconInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D1D1D1',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 10,
        marginBottom: 20,
      },
      inputWithIcon: {
        flex: 1,
        height: 40,
        paddingLeft: 10,
      },
      inputIcon: {
        marginRight: 5,
      },
      

});