import React from 'react';
import { View, Pressable, StyleSheet, Text, TextInput, ImageBackground, Image } from 'react-native';

export default function SignupScreen({ navigation }) {
  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, congregation, email, password }),
      });
      const data = await response.json();
      if (data.token) {
        // Save token and navigate to Main
        console.log('Signup successful:', data);
        navigation.navigate('Login');
      } else {
        console.log('Signup failed:', data.msg);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <View style={styles.main}>
      <ImageBackground source={require('./images/bg.jpg')} style={styles.mat}>
  <View style={styles.contain}>
  <Text style={styles.nat}>Sign-up</Text>
  <Text style={styles.nem}>Create a new account</Text>
  <Text style={styles.nem}>Click on done to create an account</Text>
  <TextInput placeholder="Name" style={styles.tip}></TextInput>
  <TextInput placeholder="Congregation" style={styles.tip}></TextInput>
  <TextInput placeholder="Email" style={styles.tip}></TextInput>
  <TextInput placeholder="Password" style={styles.tip} secureTextEntry={true}></TextInput>
  <Pressable style={styles.tint} onPress={() => handleSignup()}>
    <Text style={styles.buttonText}>Done</Text>
  </Pressable>

  <Text style={styles.orText}>or continue with</Text>
  <View style={styles.socialButtonsContainer}>
    <Pressable style={styles.socialButton}>
      <Image source={require('./images/google.jpg')} style={styles.icon} />
      <Text style={styles.socialButtonText}>Google</Text>
    </Pressable>
    <Pressable style={styles.socialButton}>
      <Image source={require('./images/facebook.jpg')} style={styles.icon} />
      <Text style={styles.socialButtonText}>Facebook</Text>
    </Pressable>
    <Pressable style={styles.socialButton}>
      <Image source={require('./images/apple.jpg')} style={styles.icon} />
      <Text style={styles.socialButtonText}>Apple</Text>
    </Pressable>
  </View>
</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  mat: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contain: {
    width: '90%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  tint: {
    backgroundColor: '#fa2fb6',
    width: 150,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  nat: {
    color: '#fa2fb6',
    fontSize: 24,
    marginBottom: 10,
  },
  nem: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
  },
  tip: {
    width: '100%',
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  orText: {
    marginTop: 20,
    fontSize: 14,
    color: 'white',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 5,
    marginLeft: '-1vw'
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 14,
    color: '#333',
  },
});
