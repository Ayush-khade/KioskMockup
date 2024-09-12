import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import GradientBackgroundWithImage from '../components/GradientBackgroundWithImage';

const Splash = ({ navigation }: any) => {

    const handlePress = () => {
        navigation.navigate('Options');
    }

    return (
        <GradientBackgroundWithImage imageSource={require('../assets/banner.png')}>
            <Pressable style={{ marginTop: 400,alignSelf:"center" }} onPress={handlePress}>
                <Image 
                    source={require('../assets/tapToStart.png')} 
                    style={{ resizeMode: 'center', height: 100 }} />
            </Pressable>
            <Text style={styles.text}>Tap To Start</Text>
        </GradientBackgroundWithImage>
    );
};

export default Splash;

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontSize: 23,
        fontWeight: 'semibold',
        color: '#ffffff',
        textAlign: 'center'
    }
})
