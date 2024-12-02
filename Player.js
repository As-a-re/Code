import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TrackPlayer, { usePlaybackState, useProgress } from 'react-native-track-player';

const MusicPlayer = ({ selectedTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playbackState = usePlaybackState();
  const { position, duration } = useProgress();
  const trackPlayerRef = useRef(null);

  useEffect(() => {
    setupTrackPlayer();
  }, []);

  const setupTrackPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add([selectedTrack]);
  };

  const togglePlayback = async () => {
    if (playbackState === TrackPlayer.STATE_PAUSED) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={32} color="#8B5E3C" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="musical-notes" size={32} color="#8B5E3C" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedTrack.artwork }} style={styles.songImage} />
      </View>
      <Text style={styles.songTitle}>{selectedTrack.title}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${(position / duration) * 100}%` }]}></View>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{new Date(position * 1000).toISOString().substr(14, 5)}</Text>
        <Text style={styles.timeText}>{new Date((duration - position) * 1000).toISOString().substr(14, 5)}</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="shuffle" size={32} color="#8B5E3C" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-back" size={32} color="#8B5E3C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlayback}>
          <Ionicons name={playbackState === TrackPlayer.STATE_PLAYING ? 'pause' : 'play'} size={48} color="#8B5E3C" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-forward" size={32} color="#8B5E3C" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="repeat" size={32} color="#8B5E3C" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
},
header: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
},
imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
},
songImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
},
songTitle: {
    fontSize: 20,
    color: '#8B5E3C',
    marginVertical: 10,
    fontWeight: 'bold',
},
progressBar: {
    width: '80%',
    height: 4,
    backgroundColor: '#D3D3D3',
    borderRadius: 2,
    marginVertical: 20,
},
progress: {
    width: '50%',
    height: 4,
    backgroundColor: '#8B5E3C',
    borderRadius: 2,
},
timeContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
},
timeText: {
    color: '#8B5E3C',
},
controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
},
});

export default MusicPlayer;
