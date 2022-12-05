import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

//fonts and colors
import * as fonts from '../../../../constants/fonts';
import * as colors from '../../../../constants/colors';

//icons import
import Icon from 'react-native-vector-icons/Feather';

export default function Header() {
    return (
        <View style={styles.container} >
            <View style={styles.left}>
                <Text style={styles.intro} >Hello, <Text style={styles.span}>Ifeanyi</Text></Text>
            </View>
            <View style={styles.right}>
                <TouchableOpacity style={styles.addressStyles} >
                    <Text style={styles.address} >Office Address</Text>
                    <Icon name='map-pin' size={22}  color={colors.orangeText} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 30,
        flexDirection: 'row',
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    left: {
        height: 30,
        flex: 0.5,
    },
    right: {
        height: 30,
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    intro: {
        fontSize: 20,
        fontFamily: fonts.poppins_medium,
        color: colors.darkText,
    },
    span: {
        color: colors.green
    },
    address: {
        fontSize: 16,
        fontFamily: fonts.bebasNunes,
        color: colors.orangeText,
        paddingRight: 10
    },
    addressStyles:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})