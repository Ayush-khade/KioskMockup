import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProductCard from '../components/ProductCard';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ApiService from '../controller/apiService';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions';

const BuyTickets = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const { cartItems, totalAmount, loading,products,tax } = useSelector((state: any) => state?.cart)
    const { getProducts } = ApiService();
    const fetchData = async () => {
        let response = await getProducts();
        dispatch(fetchProducts(response))
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handlePress = () => {
        console.log('ok')
    }

    const EmptyComponent = () => {
        return (
            <>
                {
                    loading ?
                        <ActivityIndicator size={35}/> :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={[styles.heading, { fontSize: 16, }]}>
                                No rides available at this moment.
                            </Text>
                        </View>
                }
            </>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.productList}>
                    <Text style={styles.heading}>Choose Your Rides To Buy {'\n'}Tickets</Text>
                    <FlatList
                        data={products}
                        renderItem={({ item }: any) => <ProductCard data={item}/>}
                        ListEmptyComponent={EmptyComponent}
                    />
                </View>
                <View style={styles.totalPriceContainer}>
                    <Text style={styles.ridesCount}>{cartItems.length} Rides Added</Text>
                    <Text style={styles.totalPrice}>Total: {`$${(totalAmount).toFixed(2)}`}</Text>
                    <View style={styles.checkoutContainer}>
                        <View style={{ flex: 3 }}>
                            <CustomButton
                                title="Back"
                                type='secondary'
                                iconLeft={
                                    <Icon name={"arrow-left"} size={16} />
                                }
                                onPress={()=>{navigation.goBack()}}
                            />
                        </View>
                        <View style={{ flex: 4 }}>
                            <CustomButton
                                title="Checkout"
                                type='primary'
                                iconRight={
                                    <Icon name={"arrow-right"} size={16} />
                                }
                                onPress={()=>{navigation.navigate('Scan')}}
                                disabled={cartItems.length>0 ?false:true}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default BuyTickets;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#f0f5fc"
    },
    container: {
        justifyContent: "space-between",
        flex: 1,
    },
    productList: {
        flex: 6,
        marginHorizontal: 20
    },
    totalPriceContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20
    },
    heading: {
        color: "#001737",
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 28
    },
    ridesCount: {
        marginTop: 10,
        color: '#000000',
        fontSize: 18,
        fontWeight: '600'
    },
    totalPrice: {
        color: '#000000',
        fontSize: 15,
    },
    checkoutContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8
    }
})
