import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MylibraryScreen({ navigation }) {
    return (
    <View style={styles.container}>
    <Image source={require('./images/logo2.png')} style={styles.logo} />
    <Text style={styles.title}>My Library</Text>
    <View style={styles.menu}>
    <View style={styles.menuItem}>
    <Icon name="download-outline" size={30} color="white" />
    <Text style={styles.menuText}>Downloads</Text>
    </View>
    <View style={styles.menuItem}>
    <Icon name="heart-outline" size={30} color="white" />
    <Text style={styles.menuText}>Favorites</Text>
    </View>
    <View style={styles.menuItem}>
    <Icon name="musical-notes-outline" size={30} color="white" />
    <Text style={styles.menuText}>Playlists</Text>
    </View>
    <View style={styles.menuItem}>
    <Icon name="time-outline" size={30} color="white" />
    <Text style={styles.menuText}>Recently Played</Text>
    </View>
    <View style={styles.menuItem}>
    <Icon name="person-outline" size={30} color="white" />
    <Text style={styles.menuText} onPress={() => navigation.navigate('./Profile.js')}>My Profile</Text>
    </View>
    <View style={styles.menuItem}>
    <Icon name="settings-outline" size={30} color="white" />
    <Text style={styles.menuText}>Settings</Text>
    </View>
    </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#000715',
    width: '100%',
    height: '100%'
    },
    logo: {
    width: '12vw',
    height: '8vh'
    },
    title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25px',
    fontStyle: 'italic',
    marginLeft: '15vw',
    marginTop: '-6.5vh'
    },
    menu: {
    marginTop: '10vh',
    },
    menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingLeft: 10,
    },
    menuText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
    },
});
