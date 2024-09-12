import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CancelButton=({onPress}:any)=>{
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
    )
}

export default CancelButton;

const styles=StyleSheet.create({
    container:{
        padding:10,
        borderRadius:10,
        backgroundColor:'#00000000',
        borderWidth:1,
        borderColor:'#000000',
        paddingHorizontal:30,
        marginVertical:20
    },
    text:{
        color:'#000000',
        fontSize:15
    }
})