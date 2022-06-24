import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://i.pinimg.com/736x/24/5c/02/245c025c5979606b49a43a686d3ba3d6.jpg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
     <Text style={styles.text}>Tewabe</Text> 
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  }
});

export default App;
