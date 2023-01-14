import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//fonts and colors
import * as fonts from '../../../../constants/fonts';
import * as colors from '../../../../constants/colors';
import * as dimensions from '../../../../constants/dimensions';

//icons
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import img_loader from '../../../../assets/img_loader.png';

//slices
import { updateproduceState } from '../../../redux/reducers/productSlice';

export default function FoodItem({data, index}) {
    //initialize
    const dispatch = useDispatch();

    //UI state
    const [addMargin, setAddMargin] = useState(false);

    //function to check if is even or odd
    function oddOrEven(num){
        if(num % 2 == 0)
            return false;
        return true;
    }

    useEffect(() => {
        const isOdd = oddOrEven(index);
        if(isOdd){
            setAddMargin(true)
        }
    }, [index])

    console.log(index)

    const selectHandler = () => {
        dispatch(updateproduceState(data))
    }

    return (
        <TouchableOpacity style={addMargin ? styles.addMarginContainer : styles.container} onPress={selectHandler} >
            <View style={styles.mainBackground}>
                <View style={styles.defaultBg}>
                    <Image source={img_loader} style={styles.img_loader} />
                </View>
                <ImageBackground style={styles.imageContianer} source={{uri: data.image}} />
            </View>
            <View style={styles.bottom} >
                <Text style={styles.title}>{data.name}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price} >₦{data.price.toLocaleString()}</Text>
                    <View style={styles.addToCartSection} >
                        <TouchableOpacity>
                            <View style={styles.addToCartButton} >
                                <Ionicons name='ios-cart-outline' size={15} color={'#fff'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: (dimensions.width/2) - 25,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 20
    },
    addMarginContainer: {
        width: (dimensions.width/2) - 25,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginBottom: 20
    },
    mainBackground: {
        height: 160,
        overflow: 'hidden',
        borderRadius: 10
    },
    defaultBg: {
        height: 160,
        backgroundColor: 'rgba(241, 198, 91, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img_loader: {
        width: 50,
        height: 50
    },
    imageContianer: {
        height: 160,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
        top: -160
    },
    imageBackground: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 12,
    },
    heartButton: {
        height: 30,
        width: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        padding: 12
    },
    title: {
        fontSize: 15,
        color: colors.darkText,
        fontFamily: fonts.bebasNunes
    },
    priceContainer: {
        marginTop: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 20,
        fontFamily: fonts.bebasNunes,
        color: colors.green,
    },
    addToCartSection: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
    },
    addToCartButton: {
        height: 35,
        width: 35,
        borderRadius: 7,
        backgroundColor: colors.green,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})