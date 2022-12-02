import { StyleSheet, Text } from 'react-native'
import React from 'react';

export default function Logo() {
    return (
        <Text style={styles.logo}>FOOD-<Text style={styles.span} >E</Text></Text>
    )
}

const styles = StyleSheet.create({
    logo: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 20,
        color: '#fff'
    },
    span: {
        color: '#2FDBBC'
    }
})