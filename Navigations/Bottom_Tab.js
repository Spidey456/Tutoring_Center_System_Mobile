import { StyleSheet, Text, View, Button, FlatList, SafeAreaView } from 'react-native';
import { useState, useEffect, createContext, useContext } from 'react';//////  Esta parte mira use  y el create !!!
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native';

import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
///Importing Screens
import Sessions from '../Screens/Sessions';
import Tutors from '../Screens/Tutors';
import Courses from '../Screens/Courses';
import Main_Page from '../Screens/Main_Page';
import Profile from '../Screens/Profile';
import Book_Session from '../Screens/Book_Session';

const { Navigator, Screen } = createBottomTabNavigator();

const  Report = () =>{

    return (
    <>
    <View style={styles.container}>
        <Text style= {styles.text}>Hello I will be Report</Text>


    </View>
    </>
);
}

const  Settings = () =>{

    return (
    <>
    <View style={styles.container}>
        <Text style= {styles.text}>Hello I will be Settings</Text>


    </View>
    </>
);
}

const Home = () => {
    return (

<Navigator  initialRouteName="Home"
            screenOptions={{
              tabBarShowLabel: false, // This hides the text labels
              headerShown: false,
              tabBarActiveTintColor: 'lightgray',  // Active tab icon color
              tabBarInactiveTintColor: 'white',  // Inactive tab icon color
              tabBarStyle: {
                backgroundColor: '#1e2a5e',  // Background color of the tab bar
                borderTopColor: '#3143a3',  // Color of the top border
                height: 80, // Adjust height (default is ~50-60)
                paddingBottom: 5, // Add padding at the bottom (useful for iPhone notches)
                paddingTop: 7, // Add padding at the top (to center icons vertically)

              },
            }}
>

<Screen name="Home" component={Main_Page}  options={{
                  tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={25} color={color} />
                  ),
      }}/>

<Screen name="Sessions" component={Sessions}  options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="book-plus-multiple" size={24} color={color} />

                  ),
      }}/>

<Screen name="Book_Session" component={Book_Session}  options={{
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name="pluscircle" size={30} color="orange" />
                  ),
      }}/>
      
<Screen name="Tutors" component={Tutors}  options={{
                  tabBarIcon: ({ color, size }) => (
                    <Entypo name="users" size={24} color={color} />
                  ),
      }}/>

<Screen name="Profile" component={Profile}  options={{
                  tabBarIcon: ({ color, size }) => (
                    <Entypo name="user" size={24} color={color} />
                  ),
      }}/>
      
      </Navigator>
           
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'red'
    },
    text: {
      fontWeight: 'bold',
      color: 'black',
      marginHorizontal: 0,
      fontSize: 30
    }
    
  
  });
  

export default Home;


