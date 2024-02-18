import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
const image = require('./img/doctor.png');

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.image}
          />
          <View style={styles.card}>
            <View style={styles.cardHeader}>
            <Text style={styles.heading}>MEDICAL APP</Text>
            <View style={styles.line} />
            </View>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
              molestie ipsum et, consequat nibh. 
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed')}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden', // To prevent card from overflowing
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'cover',
  },
  card: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 3, // For shadow on Android
    shadowColor: 'black', // For shadow on iOS
    shadowOffset: { width: 0, height: 2 }, // For shadow on iOS
    shadowOpacity: 0.2, // For shadow on iOS
    shadowRadius: 4, // For shadow on iOS
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardHeader: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  line: {
    width: 100,
    height: 3,
    backgroundColor: 'gray',
    marginBottom: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: 'gray',
    textAlign: 'center',
  },
  button: {
    width: 250,
    backgroundColor: '#339BFF',
    borderRadius: 20,
    padding: 10,
    paddingVertical: 13,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
