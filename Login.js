import React from 'react';
import { View, Pressable, Image, ImageBackground, Text, TextInput, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        // Save token and navigate to Main
        console.log('Login successful:', data);
        navigation.navigate('Main');
      } else {
        console.log('Login failed:', data.msg);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <View>
    <ImageBackground source={require('./images/gb.jpg')} style={styles.image}>
    <Image source={require('./images/ic.png')} style={styles.mage} />
    <View style={styles.container}>
    <Text style={styles.tan}>Login</Text>
    <Text style={styles.men}>Enter your account details to login</Text>
    <Text style={styles.fan}>or</Text>
    <Text style={styles.men}>Click on sign-up to create an account</Text>
    <TextInput placeholder="Email" style={styles.input}></TextInput>
    <TextInput placeholder="Password" style={styles.input} secureTextEntry={true}></TextInput>
    <Pressable style={styles.pen} onPress={() => handleLogin()}>Login</Pressable>
    <Pressable style={styles.tin} onPress={() => navigation.navigate('Main')}>Sign-up</Pressable>
    </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5vh',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  mage: {
    width: 150, 
    height: 150,
    borderRadius: 75, 
    marginTop: '10vh',
  },
  input: {
    width: '16rem',
    backgroundColor: 'white',
    height: '1.7rem',
    marginTop: '1rem',
  },
  pen: {
backgroundColor: '#fa2fb6',
width: '5rem',
height: '1.7rem',
textAlign: 'center',
marginLeft: '-10rem',
borderRadius: '5px',
marginTop: '2rem',
  },
  tin: {
  backgroundColor: '#fa2fb6',
  marginLeft: '10rem',
  width: '5rem',
  height: '1.7rem',
  marginTop: '-1.5rem',
  textAlign: 'center',
  borderRadius: '5px',
  },
  tan: {
    color: '#fa2fb6',
    fontSize: '2rem',
  },
  men: {
fontSize:'1rem',
color: 'white',
marginTop: '1rem',
  },
  fan: {
  color: '#fa2fb6',
  fontSize: '1rem',
  },
  pit: {
height: '10px',
width: '10px',
  },
});
