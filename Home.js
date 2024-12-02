import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import DropdownMenu from './drop';
import MusicPlayer from './Player';

export default function HomeScreen({ navigation }) {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const tracks = [
    {
      id: '1',
      title: 'Heavenly Sunlight',
      artist: 'Chorale',
      artwork: require('./images/art.jpg'),
      url: './music/pop.mp3',
    },
    {
      id: '2',
      title: 'Heavenly Sunlight',
      artist: 'Chorale',
      artwork: require('./images/art.jpg'),
      url: './music/pop.mp3',
    },
    {
      id: '3',
      title: 'Heavenly Sunlight',
      artist: 'Chorale',
      artwork: require('./images/art.jpg'),
      url: './music/pop.mp3',
    },
    {
      id: '4',
      title: 'Heavenly Sunlight',
      artist: 'Chorale',
      artwork: require('./images/art.jpg'),
      url: './music/pop.mp3',
    },
    {
      id: '5',
      title: 'Heavenly Sunlight',
      artist: 'Chorale',
      artwork: require('./images/art.jpg'),
      url: './music/pop.mp3',
    },
  ];

  const handleTrackPress = (track) => {
    setSelectedTrack(track);
  };

  return (
    <View style={styles.one}>
      <Image source={require('./images/logo2.png')} style={styles.two} />
      <Text style={styles.three}>Stream unlimited music</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.twentyone}>
          <View style={styles.four}>
            <Image source={require('./images/art.jpg')} style={styles.five} />
            <Text style={styles.six}>Hymnals</Text>
          </View>
          <View style={styles.eight}>
            <Image source={require('./images/art.jpg')} style={styles.five} />
            <Text style={styles.six}>Praises</Text>
          </View>
          <View style={styles.nine}>
            <Image source={require('./images/art.jpg')} style={styles.five} />
            <Text style={styles.six}>Worships</Text>
          </View>
          <View style={styles.ten}>
            <Image source={require('./images/art.jpg')} style={styles.five} />
            <Text style={styles.six}>Choruses</Text>
          </View>
        </View>
      </ScrollView>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.twenty}>
          {tracks.map((track) => (
            <TouchableOpacity key={track.id} style={styles.eleven} onPress={() => handleTrackPress(track)}>
              <Image source={track.artwork} style={styles.twelve} />
              <Text style={styles.thirteen}>{track.title}</Text>
              <Text style={styles.fourteen}>{track.artist}</Text>
              <DropdownMenu />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {selectedTrack && <MusicPlayer selectedTrack={selectedTrack} />}
    </View>
  );
};

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
seven: {
    backgroundColor: 'green',
    color: 'white',
    width: '12vw',
    height: '3vh',
    borderRadius: '5px',
    marginLeft: '2vw',
    marginTop: '1vh'
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
eleven: {
    marginLeft: '2vw',
    marginTop: '5vh'
},
twelve: {
    width: '20vw',
    height: '10vh',
    marginTop: '-50vh'
},
thirteen: {
    color: 'white',
    marginLeft: '22vw',
    marginTop: '-8vh'
},
fourteen: {
    color: 'white',
    marginLeft: '22vw'
},
fifteen: {
    marginLeft: '2vw',
    marginTop: '15vh'
},
sixteen: {
    color: 'white',
    fontSize: '25px',
    marginTop: '-15vh',
    marginLeft: '2vw'
},
seventeen: {
    marginLeft: '2vw',
    marginTop: '15vh'
},
eighteen: {
    marginLeft: '2vw',
    marginTop: '15vh'
},
nineteen: {
    marginLeft: '2vw',
    marginTop: '15vh'
},
twenty: {
    marginTop: '50vh'
},
twentyone: {
    paddingBottom: '40vh'
},
twentytwo: {
    color: 'white',
    marginLeft: '22vw',
    marginTop: '-7vh'
},
twentythree: {
    color: 'white',
    marginLeft: '22vw'
}
})