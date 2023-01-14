import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

//fonts and colors
import * as colors from '../../../../constants/colors';
import * as fonts from '../../../../constants/fonts';

//icons
import Feather from 'react-native-vector-icons/Feather';

export default function Options({children, name, mt}) {
    return (
        <TouchableOpacity>
            <View style={[styles.container, {marginTop: mt}]} >
                <View style={styles.icon}>{children}</View>
                <Text style={styles.text}>{name}</Text>
                <View style={styles.chevron}><Feather name={'chevron-right'} size={24} color={colors.secondaryText} /></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        width: 25,
        // backgroundColor: 'blue',
        marginRight: 10,
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        color: '#000',
        fontSize: 15,
        fontFamily: fonts.poppins_medium,
        justifyContent: 'center',
        paddingTop: 2
    }
})