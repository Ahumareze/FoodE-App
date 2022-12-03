import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function OutlineButton({onClick, text, mtSpace}) {
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={[styles.button, {marginTop: mtSpace}]}><Text style={styles.bottonText} >{text}</Text></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 24,
        color: '#fff',
        backgroundColor: '#fff',
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#2FDBBC'
    },
    bottonText:{
        fontSize: 18,
        fontFamily: 'BebasNeue-Regular',
        color: '#2FDBBC'
    }
})