import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function LongButton({onClick, text, mtSpace}) {

  console.log(mtSpace)

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
        backgroundColor: '#2FDBBC',
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottonText:{
        fontSize: 18,
        fontFamily: 'BebasNeue-Regular',
        color: '#fff'
    }
})