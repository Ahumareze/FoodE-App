import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

//fonts and colors
import * as fonts from '../../../constants/fonts';
import * as colors from '../../../constants/colors';

//icons
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';

export default function Food({initial, img}) {
    return (
        <View style={initial ? styles.initialContainer : styles.container} >
            <ImageBackground style={styles.imageContianer} source={img} >
                <View style={styles.imageBackground}>
                    <View style={styles.heartButton} >
                        <Icon name='heart' size={20} color={'#fff'} />
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.bottom} >
                <Text style={styles.title}>Itialian Pizza</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price} >₦20,500.00</Text>
                    <View style={styles.addToCartSection} >
                        <TouchableOpacity>
                            <View style={styles.addToCartButton} >
                                <Icon2 name='shopping-basket' size={15} color={'#fff'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 175,
        marginRight: 20,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20,
        // overflow: 'hidden'
    },
    initialContainer: {
        width: 175,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20,
        // overflow: 'hidden'
    },
    imageContianer: {
        height: 160,
        width: '100%',
        backgroundColor: colors.green,
        borderRadius: 10,
        overflow: 'hidden',
        
    },
    imageBackground: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 12
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