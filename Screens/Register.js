import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button} from 'react-native';
import { useState } from 'react';

export default function Register({navigation}) {

  const[userName, setUserName] = useState('');
  const[password, setPassword] = useState('');

  const goto_Login = () =>{
    navigation.goBack();

  }






  return (
    <View style={styles.container}>

    <View style={styles.box2}>

<Image style={styles.logo} source={require('../assets/logo_Kae.png')} />


<View style={styles.box}>

<Text style={styles.text}>Create an Account </Text>
      <Text>Already have an account? <TouchableOpacity onPress={()=>goto_Login()}><Text>Log in</Text></TouchableOpacity></Text>

<TextInput
  value={userName}
  keyboardType='default'
  placeholder='First Name'
  onChangeText={text => setUserName(text)}
  style={styles.input}
/>

<TextInput
  value={userName}
  keyboardType='default'
  placeholder='Last Name'
  onChangeText={text => setUserName(text)}
  style={styles.input}
/>

<TextInput
  value={userName}
  keyboardType='default'
  placeholder='KU ID'
  onChangeText={text => setUserName(text)}
  style={styles.input}
/>


<TextInput
  value={userName}
  keyboardType='default'
  placeholder='KU Email'
  onChangeText={text => setUserName(text)}
  style={styles.input}
/>

<TextInput
value={password}
keyboardType="default"
placeholder="Your Password"
onChangeText={text => setPassword(text)}
secureTextEntry={true}
style={styles.input}
/>



</View>

     <TouchableOpacity style={styles.button} >
          <Text>Sign-Up</Text>
        </TouchableOpacity>


        
      </View>


    </View>
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius:10,
    borderWidth: 1,
    marginVertical: 12,
    paddingHorizontal: 8,
    width: '90%',
  },
  box:{
    paddingBottom: 1,
    paddingVertical: 30,
    height: 410,
    width: 300,
    borderRadius: 15,
    borderWidth:1,
    margin: 7,
    alignItems: 'center',

  },
  box2:{
    paddingVertical: 30,
    height: 650,
    width: 350,
    borderRadius:30,
    borderWidth:1,
    backgroundColor:'white',
    alignItems: 'center',


  },
  logo: {
    height: 85,
    width: 85,
  },
  button:{
    width: 200,
    height: 28,

    backgroundColor: 'orange',
    borderRadius: 10,
    borderWidth: 0.8,
    padding: 4,
    paddingHorizontal: 30,
    marginVertical: 10,
    alignItems: 'center',

  },
  forgot:{
    fontSize: 1,
  }
  

});
