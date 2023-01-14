import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

//constants
import * as colors from '../../../../../../constants/colors';
import * as fonts from '../../../../../../constants/fonts';

//icons
import Icon from 'react-native-vector-icons/Feather';

export default function Quantity({quantity, add, reduce}) {
    return (
        <View style={styles.quantity}>
            <Text style={styles.title}>Quantity</Text>
            <View style={styles.container}>
                <View style={styles.number}>
                    <Text style={styles.number}>{quantity}</Text>
                </View>
                
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={reduce} ><View style={styles.button}><Icon name='minus' color={colors.inputColor} size={20} /></View></TouchableOpacity>
                    <TouchableOpacity onPress={add}><View style={styles.button}><Icon name='plus' color={colors.inputColor} size={20} /></View></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    quantity: {
        flex: 1,
    },
    title:{
        fontSize: 15,
        fontFamily: fonts.bebasNunes,
        color: colors.inputColor,
        paddingLeft: 20
    },
    container: {
        height: 40,
        width: 160,
        backgroundColor: colors.inputBg,
        borderRadius: 25,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
    },
    number: {
        fontSize: 15,
        color: colors.darkText,
        fontFamily: fonts.poppins,
        flex: 0.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    button: {
        height: '100%',
        width: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})