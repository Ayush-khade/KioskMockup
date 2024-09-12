import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import { useSelector } from 'react-redux';

const PaymentSuccess = ({ navigation }: any) => {
    const { totalAmount, tax } = useSelector((state: any) => state?.cart)
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('PrintInvoice')
        }, 3000)
    }, [])
    return (
        <GradientBackground>
            <Text style={styles.heading}>THANK YOU</Text>
            <Text style={styles.instruction}>Your Payment Is Successful.</Text>
            <View style={styles.priceBreakthrough}>
                <View style={styles.subTotal}>
                    <Text style={styles.normalText}>Subtotal</Text>
                    <Text style={styles.amountText}>{`$${totalAmount.toFixed(2)}`}</Text>
                </View>
                <View style={styles.tax}>
                    <Text style={styles.normalText}>Tax</Text>
                    <Text style={styles.amountText}>{`$${tax.toFixed(2)}`}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: '#f0f0f0', marginVertical: 10 }} />
                <View style={styles.total}>
                    <Text style={styles.totaltext}>Total</Text>
                    <Text style={[styles.amountText, styles.totaltext]}>{`$${(totalAmount + tax).toFixed(2)}`}</Text>
                </View>
            </View>
        </GradientBackground>
    );
};

export default PaymentSuccess;

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
    },
    amountText: {
        color: '#00357b'
    }
})
