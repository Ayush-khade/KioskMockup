import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GradientBackground from '../components/GradientBackground';

const PrintInvoice = ({ navigation }: any) => {
    return (
        <GradientBackground>
            <Image source={require('../assets/print.png')} style={{ height: 140, resizeMode: 'contain' }} />
            <View>
                <Text style={styles.heading}>ENJOY YOUR RIDE!</Text>
                <Text style={styles.instruction}>Please Pickup Your Printed Tickets.</Text>
            </View>
        </GradientBackground>
    );
};

export default PrintInvoice;

const styles = StyleSheet.create({

    heading: {
        fontSize: 28,
        fontWeight: '900',
        marginVertical: 24,
        color: '#00357b'
    },
    instruction: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 30,
        color: '#000000'
    },
    priceBreakthrough: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        gap: 10
    },
    subTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tax: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    normalText: {
        color: '#000000',
        fontSize: 14
    },
    totaltext: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
    }
})
