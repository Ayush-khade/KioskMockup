import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, UseDispatch } from 'react-redux';
import { addRide } from '../redux/actions';

const ProductCard = ({ data }: any) => {
    const dispatch = useDispatch();
    const getImageComponent = (uri: any) => {

        if (uri == 'Gemini.png') {
            return (
                <Image source={require('../assets/Gemini.png')} resizeMode='cover' style={{ height: '100%', width: '100%' }} />
            )
        }
        else if (uri == 'Corkscrew.png') {
            return (
                <Image source={require('../assets/Corkscrew.png')} resizeMode='cover' style={{ height: '100%', width: '100%' }} />
            )
        }
        else if (uri == 'Gate Keeper.png') {
            return (
                <Image source={require('../assets/Gate_Keeper.png')} resizeMode='cover' style={{ height: '100%', width: '100%' }} />
            )
        }
        else if (uri == 'Maveric.png') {
            return (
                <Image source={require('../assets/Maveric.png')} resizeMode='cover' style={{ height: '100%', width: '100%' }} />
            )
        }
        else {
            return null;
        }

    }

    const handleProductSelection = (item:any) =>{
        dispatch(addRide(item))
    }

    return (
        <TouchableOpacity onPress={()=>handleProductSelection(data)}>
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    {getImageComponent(data.imageURI)}
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.productName}>{data.productName}</Text>
                    <Text style={styles.productPrice}>${data.productPrice.toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 5,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        padding: 4
    },
    imageContainer: {
        flex: 1,
        height: 90,
        width: 90,
        backgroundColor: "#000000",
        borderRadius: 8
    },
    detailsContainer: {
        flex: 3,
        marginHorizontal: 14,
        justifyContent: "center",
        gap: 10
    },
    productName: {
        fontSize: 15,
        color: '#001737',
        fontWeight: '700'
    },
    productPrice: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#EC1C2D'
    }
})