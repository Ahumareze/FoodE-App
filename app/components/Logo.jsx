import { StyleSheet, Text } from 'react-native'
import React from 'react';

export default function Logo({dark = false}) {
    return (
        <Text style={dark ? styles.darkLogo : styles.logo}>FOOD-<Text style={styles.span} >E</Text></Text>
    )
}

const styles = StyleSheet.create({
    logo: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 20,
        color: '#fff'
    },
    darkLogo: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 20,
        color: '#000'
    },
    span: {
        color: '#2FDBBC'
    }
})