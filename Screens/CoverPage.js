import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Registration from '../Navigations/Registration';
import RegisterCourses from './RegisterCourses';

const {Navigator, Screen} = createStackNavigator();


const CoverScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the</Text>
            <Text style={styles.subtitle}>Tutoring System</Text>
            
            <Image source={require('../assets/logo_Kae.png')} style={styles.logo}/>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.createText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const CoverPage = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Cover" component={CoverScreen} />
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
            <Screen name="RegisterCourses" component={RegisterCourses} />

        </Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#142960', 
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 27 ,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 30,
        borderRadius : 200, 
        borderWidth: 2,
        marginTop: 70,
        marginBottom: 70,
    },
    loginButton: {
        backgroundColor: 'orange', // Gold color for login button
        paddingVertical: 12,
        paddingHorizontal: 80,
        borderRadius: 8,
        marginBottom: 40,
    },
    loginText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    createButton: {
        backgroundColor: '#fff', // White for the Create Account button
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
    },
    createText: {
        fontSize: 16,
        color: '#142960', // Dark navy blue text
        fontWeight: 'bold',
    },
});

export default CoverPage;
