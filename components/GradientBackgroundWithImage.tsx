import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackgroundWithImage = ({ children, imageSource }:any) => {
  return (
    <ImageBackground
      source={imageSource}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(0, 23, 55, 0.79)','rgba(0, 23, 55, 0.89)', '#001737']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
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
    opacity: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default GradientBackgroundWithImage;
