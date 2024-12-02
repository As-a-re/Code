import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import DropdownMenu from './drop';

export default function PlaylistScreen({ navigation }) {
    return (
        <View style={styles.one}>
        <Image source={require('./images/logo2.png')} style={styles.two}></Image>
        <Text style={styles.three}>Music Playlists</Text>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.twentyone}>
        <View style={styles.four}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Hymnals</Text>
        </View>
        <View style={styles.eight}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Praises</Text>
        </View>
        <View style={styles.nine}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Worships</Text>
        </View>
        <View style={styles.ten}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Choruses</Text>
        </View>
        </View>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.twentyone}>
        <View style={styles.four}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Hymnals</Text>
        </View>
        <View style={styles.eight}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Praises</Text>
        </View>
        <View style={styles.nine}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Worships</Text>
        </View>
        <View style={styles.ten}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Choruses</Text>
        </View>
        </View>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.twentyone}>
        <View style={styles.four}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Hymnals</Text>
        </View>
        <View style={styles.eight}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Praises</Text>
        </View>
        <View style={styles.nine}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Worships</Text>
        </View>
        <View style={styles.ten}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Choruses</Text>
        </View>
        </View>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.twentyone}>
        <View style={styles.four}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Hymnals</Text>
        </View>
        <View style={styles.eight}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Praises</Text>
        </View>
        <View style={styles.nine}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Worships</Text>
        </View>
        <View style={styles.ten}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Choruses</Text>
        </View>
        </View>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.twentyone}>
        <View style={styles.four}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Hymnals</Text>
        </View>
        <View style={styles.eight}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Praises</Text>
        </View>
        <View style={styles.nine}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Worships</Text>
        </View>
        <View style={styles.ten}>
        <Image source={require('./images/art.jpg')} style={styles.five}></Image>
        <Text style={styles.six}>Choruses</Text>
        </View>
        </View>
        </ScrollView>
        </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
one: {
    backgroundColor: '#000715',
    width: '100vw',
    height: '100vh'
},
two: {
    width: '12vw',
    height: '8vh'
},
three: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25px',
    fontStyle: 'italic',
    marginLeft: '15vw',
    marginTop: '-6.5vh'
},
four: {
    marginTop: '7vh',
    marginLeft: '2vw'
},
five: {

    width: '40vw',
    height: '20vh'
},
six: {
    color: 'white',
    fontSize: '25px'
}, 
eight: {
    marginTop: '-24vh',
    marginLeft: '45vw'
},
nine: {
    marginTop: '-24vh',
    marginLeft: '88vw'
},
ten: {
    marginTop: '-24vh',
    marginLeft: '131vw'
},
twentyone: {
    paddingBottom: '10vh'
}
})