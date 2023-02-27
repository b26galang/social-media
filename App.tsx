import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import PostItems from './Components/PostItems';
import React from 'react';
import AboutMe from './Components/AboutMe';
import Comment from './Components/Comment';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Brandy
        <br />
        Las Vegas, Nevada
      </Text>
      <AboutMe />
      <Text>My family</Text>
      <PostItems />
      <Text style={styles.text}>Bonus photo of me when my toy gets taken away</Text>
      <Image style={styles.image} source={{ uri: "https://i.gyazo.com/53be072405957c38b1b4c38cf256a510.png" }} />
      <Comment />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6e8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20
  },
  image: {
    width: 250,
    height: 250,
    margin: 'auto',
    marginTop: 20
  }
});
