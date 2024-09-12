import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackgroundWithImage = ({ children, imageSource }:any) => {
  return (
    <ImageBackground
      source={imageSource}  // Background image source
      style={styles.imageBackground}
      resizeMode="cover"   // Ensures the image covers the entire view
    >
      <LinearGradient
        colors={['rgba(0, 23, 55, 0.79)','rgba(0, 23, 55, 0.89)', '#001737']}
        start={{ x: 0.5, y: 0 }} // Starts the gradient at the top
        end={{ x: 0.5, y: 1 }}   // Ends the gradient at the bottom
        style={styles.gradient}
      >
        <View style={styles.container}>
          {children}
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    opacity: 1, // Adjust opacity if needed to blend the gradient with the background image
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default GradientBackgroundWithImage;
