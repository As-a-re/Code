import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import DropdownMenu from './drop';

export default function SearchScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);

    const songs = [
    'Heavenly Sunlight',
    'Blinding Lights',
    'Rockstar',
    'Someone You Loved',
    'Sunflower',
    'Old Town Road',
    // Add more song titles here
    ];

    const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
        const results = songs.filter(song =>
    song.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredSongs(results);
    } else {
        setFilteredSongs([]);
    }
    };

    return (
    <View style={styles.container}>
        <Image source={require('./images/logo2.png')} style={styles.logo} />
        <Text style={styles.title}>Search for songs</Text>
        <TextInput style={styles.searchBar}
    placeholder="Search for songs..." placeholderTextColor="#ccc"
    value={searchQuery} onChangeText={handleSearch}/>
        <FlatList data={filteredSongs} keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
        <TouchableOpacity onPress={() => alert(`Selected song: ${item}`)}>
    <Text style={styles.songItem}>{item}</Text>
        </TouchableOpacity>
    )} style={styles.resultsContainer}/>
    <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.faw}>
        <View style={styles.few}>
        <Image source={require('./images/art.jpg')} style={styles.fiw}></Image>
        <Text style={styles.fow}>Heavenly Sunlight</Text>
        <Text style={styles.fuw}>Chorale</Text>
        <DropdownMenu></DropdownMenu>
        </View>
        <View style={styles.few}>
        <Image source={require('./images/art.jpg')} style={styles.fiw}></Image>
        <Text style={styles.fow}>Heavenly Sunlight</Text>
        <Text style={styles.fuw}>Chorale</Text>
        <DropdownMenu></DropdownMenu>
        </View>
        <View style={styles.few}>
        <Image source={require('./images/art.jpg')} style={styles.fiw}></Image>
        <Text style={styles.fow}>Heavenly Sunlight</Text>
        <Text style={styles.fuw}>Chorale</Text>
        <DropdownMenu></DropdownMenu>
        </View>
        <View style={styles.few}>
        <Image source={require('./images/art.jpg')} style={styles.fiw}></Image>
        <Text style={styles.fow}>Heavenly Sunlight</Text>
        <Text style={styles.fuw}>Chorale</Text>
        <DropdownMenu></DropdownMenu>
        </View>
        <View style={styles.few}>
        <Image source={require('./images/art.jpg')} style={styles.fiw}></Image>
        <Text style={styles.fow}>Heavenly Sunlight</Text>
        <Text style={styles.fuw}>Chorale</Text>
        <DropdownMenu></DropdownMenu>
        </View>
        <View style={styles.few}>
        <Image source={require('./images/art.jpg')} style={styles.fiw}></Image>
        <Text style={styles.fow}>Heavenly Sunlight</Text>
        <Text style={styles.fuw}>Chorale</Text>
        <DropdownMenu></DropdownMenu>
        </View>
        <View style={styles.few}>
        <Image source={require('./images/art.jpg')} style={styles.fiw}></Image>
        <Text style={styles.fow}>Heavenly Sunlight</Text>
        <Text style={styles.fuw}>Chorale</Text>
        <DropdownMenu></DropdownMenu>
        </View>
        <View style={styles.few}>
        <Image source={require('./images/art.jpg')} style={styles.fiw}></Image>
        <Text style={styles.fow}>Heavenly Sunlight</Text>
        <Text style={styles.fuw}>Chorale</Text>
        <DropdownMenu></DropdownMenu>
        </View>
        <View style={styles.few}>
        <Image source={require('./images/art.jpg')} style={styles.fiw}></Image>
        <Text style={styles.fow}>Heavenly Sunlight</Text>
        <Text style={styles.fuw}>Chorale</Text>
        <DropdownMenu></DropdownMenu>
        </View>
        <View style={styles.few}>
        <Image source={require('./images/art.jpg')} style={styles.fiw}></Image>
        <Text style={styles.fow}>Heavenly Sunlight</Text>
        <Text style={styles.fuw}>Chorale</Text>
        <DropdownMenu></DropdownMenu>
        </View>
        </View>
    </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#000715',
    width: '100vw',
    height: '100vh',
    paddingHorizontal: 20,
    paddingTop: 0,
    },
    logo: {
    width: '12vw',
    height: '8vh',
    },
    title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
    marginLeft: '15vw',
    marginTop: '-6.5vh',
    },
    searchBar: {
    height: 50,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#222',
    color: 'white',
    paddingHorizontal: 10,
    marginTop: 20,
    },
    resultsContainer: {
    marginTop: 20,
    marginBottom: 20
    },
    songItem: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    },
    faw: {
    marginTop: '-10vh',
    marginBottom: '10vh'
    },
    few: {
    marginLeft: '-3vw',
    marginTop: '5vh'
    },
    fiw: {
    width: '20vw',
    height: '10vh',
    marginTop: '5vh'
    },
    fow: {
    color: 'white',
    marginLeft: '22vw',
    marginTop: '-7vh'
    },
    fuw: {
    color: 'white',
    marginLeft: '22vw'
    }
});
