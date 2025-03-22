import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

export default function Login({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const loginUser = async (data) => {
    try {
      console.log("Datos enviados:", data);
      await axios.post('http://172.19.3.82:3000/login', data)
      console.log("Login Succesful")
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}]
      })
    }
    catch(e) {
      console.error(e.message)
      console.log("Error en el fetch")
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box2}>
        <Image style={styles.logo} source={require('../assets/logo_Kae.png')} />

        <View style={styles.box}>
          <Text style={styles.text}>Welcome to The</Text>
          <Text style={styles.text}>Writing Studio and Tutoring Center</Text>

          {/* Input de Email */}
          <Controller
            control={control}
            name="email"
            rules={{ 
              required: "El email es obligatorio", 
              pattern: { value: /\S+@\S+\.\S+/, message: "Formato de email inválido" } 
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="KU Email"    
                keyboardType="email-address"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

          {/* Input de Contraseña */}
          <Controller
            control={control}
            name="password_hash"
            rules={{ required: "La contraseña es obligatoria" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Your Password"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

          <TouchableOpacity style={styles.forgot}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Botón de Login */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit(loginUser)}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0056b3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 12,
    paddingHorizontal: 8,
    width: '90%',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
  box: {
    paddingVertical: 30,
    height: 259,
    width: 300,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
  },
  box2: {
    paddingVertical: 30,
    height: 500,
    width: 350,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
    height: 85,
    width: 85,
  },
  button: {
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
  forgot: {
    fontSize: 1,
  },
});

