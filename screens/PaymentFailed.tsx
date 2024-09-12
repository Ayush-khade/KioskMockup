import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import { useSelector } from 'react-redux';
import CancelButton from '../components/CancelButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PaymentFailed = ({ navigation }: any) => {
    return (
        <GradientBackground>
            <Icon name={'close-circle-outline'} size={100} color="#e2574c" />
            <View style={{ marginTop: 100 }}>
                <Text style={styles.heading}>PAYMENT FAILED</Text>
                <Text style={styles.instruction}>Please Try Again.</Text>
            </View>
            <View style={{ marginTop: 100 }}>
                <CancelButton onPress={() => navigation.navigate('BuyTickets')} />
            </View>
        </GradientBackground>
    );
};

export default PaymentFailed;

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
