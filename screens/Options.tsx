import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GradientBackgroundWithImage from '../components/GradientBackgroundWithImage';

const Options = ({navigation}:any) => {

    const handlePress=()=>{
        navigation.navigate('BuyTickets')
    }

  return (
    <GradientBackgroundWithImage imageSource={require('../assets/banner.png')}>
        <View style={styles.container}>
            <Text style={styles.heading}>READY TO GET STARTED?</Text>
            <Text style={styles.subHeading}>Choose an option to Begin.</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Buy Tickets</Text>
            </TouchableOpacity>
        </View>
    </GradientBackgroundWithImage>
  );
};

export default Options;

const styles=StyleSheet.create({
    container:{
        margin:"8%",
    },
    heading:{
        fontSize:23,
        fontWeight:'900',
        marginBottom:10,
        color:'#ffffff'
    },
    subHeading:{
        fontSize:16,
        marginBottom:10,
        color:'#ffffff'
    },
    button:{
        marginTop:30,
        width:'100%',
        height:100,
        backgroundColor:'#E9F3F9',
        borderRadius:24,
        justifyContent:'center'
    },
    buttonText:{
        color:'#001737',
        marginHorizontal:30,
        fontSize:22
    }
})
