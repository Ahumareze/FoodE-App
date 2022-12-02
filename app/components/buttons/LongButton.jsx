import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function LongButton({onClick}) {
  return (
    <TouchableOpacity onPress={onClick} >
        <View style={styles.button}><Text style={styles.bottonText} >NEXT</Text></View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 24,
        color: '#fff',
        backgroundColor: '#2FDBBC',
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    bottonText:{
        fontSize: 18,
        fontFamily: 'BebasNeue-Regular',
    }
})