import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
        <Image source={require('./images/user.png')} style={styles.wan}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000715',
},
wan: {
    width: '20vw',
    height: '20vh',
    marginTop: '5vh',
}
});

export default Profile;