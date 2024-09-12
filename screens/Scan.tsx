import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import { useSelector } from 'react-redux';
import CancelButton from '../components/CancelButton';

const Scan = ({navigation}:any) => {
    const { totalAmount, tax } = useSelector((state: any) => state?.cart)
        let success= setTimeout(()=>{
            navigation.navigate('PaymentSuccess')
        },5000)

    const handleCancel = () =>{
        clearTimeout(success);
        navigation.navigate('PaymentFailed')
    }

  return (
    <GradientBackground>
        <Image source={require('../assets/creditCard.png')} style={{height:140,resizeMode:'contain'}}/>
        <Text style={styles.heading}>PAY WITH CARD</Text>
        <Text style={styles.instruction}>Please Tap, Swipe Or Insert {'\n'}Your Card.</Text>
        <View style={styles.priceBreakthrough}>
            <View style={styles.subTotal}>
                <Text style={styles.normalText}>Subtotal</Text>
                <Text style={styles.normalText}>{`$${totalAmount.toFixed(2)}`}</Text>
            </View>
            <View style={styles.tax}>
            <Text style={styles.normalText}>Tax</Text>
            <Text style={styles.normalText}>{`$${tax.toFixed(2)}`}</Text>
            </View>
            <View style={{height:1,backgroundColor:'#f0f0f0',marginVertical:10}}/>
            <View style={styles.total}>
            <Text style={styles.totaltext}>Total</Text>
            <Text style={styles.totaltext}>{`$${(totalAmount+tax).toFixed(2)}`}</Text>
            </View>
        </View>
        <View style={{marginTop:100}}>
        <CancelButton onPress={()=>handleCancel()}/>
        </View>
    </GradientBackground>
  );
};

export default Scan;

const styles=StyleSheet.create({
    
    heading:{
        fontSize:28,
        fontWeight:'900',
        marginVertical:24,
        color:'#00357b'
    },
    instruction:{
        textAlign:'center',
        fontSize:16,
        marginBottom:30,
        color:'#000000'
    },
    priceBreakthrough:{
        backgroundColor:'#ffffff',
        borderRadius:10,
        padding:20,
        width:'90%',
        gap:10
    },
    subTotal:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    total:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    tax:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    normalText:{
        color:'#000000',
        fontSize:14
    },
    totaltext:{
        color:'#000000',
        fontSize:15,
        fontWeight:'bold' ,
    }
})
