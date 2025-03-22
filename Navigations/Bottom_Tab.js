import { StyleSheet, Text, View, Button, FlatList, SafeAreaView } from 'react-native';
import { useState, useEffect, createContext, useContext } from 'react';//////  Esta parte mira use  y el create !!!
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native';

import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Foundation from '@expo/vector-icons/Foundation';
///Importing Screens
import Sessions from '../Screens/Sessions';
import Tutors from '../Screens/Tutors';
import Courses from '../Screens/Courses';

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

<Navigator  initialRouteName="Sessions"
            screenOptions={{
              tabBarActiveTintColor: '#0056b3',  // Active tab icon color
              tabBarInactiveTintColor: '#808080',  // Inactive tab icon color
              tabBarStyle: {
                //backgroundColor: '#3143a3',  // Background color of the tab bar
                borderTopColor: '#3143a3',  // Color of the top border

              },
            }}
>

<Screen name="Sessions" component={Sessions}  options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="graduation-cap" size={24} color={color} />
                  ),
      }}/>

<Screen name="Courses" component={Courses}  options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="list-alt" size={25} color={color} />

                  ),
      }}/>

<Screen name="Tutors" component={Tutors}  options={{
                  tabBarIcon: ({ color, size }) => (
                    <Feather name="users" size={25} color={color} />
                  ),
      }}/>
      
<Screen name="Report" component={Report}  options={{
                  tabBarIcon: ({ color, size }) => (
                    <Foundation name="graph-bar" size={25} color={color} />
                  ),
      }}/>

<Screen name="Settings" component={Settings}  options={{
                  tabBarIcon: ({ color, size }) => (
                    <Feather name="settings" size={25} color={color} />
                  ),
      }}/>
      
      </Navigator>
           
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#0056b3'
    },
    text: {
      fontWeight: 'bold',
      color: 'black',
      marginHorizontal: 0,
      fontSize: 30
    }
    
  
  });
  

export default Home;


