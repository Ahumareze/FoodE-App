import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Restaurants({logo, initial, onClick}) {
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={initial ? styles.initialContainer : styles.contianer}>
                <Image style={styles.image} source={logo} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    initialContainer: {
        height: 90,
        width: 90,
        borderRadius: 20,
        backgroundColor: '#fff',
        margin: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#D9D9D9'
    },
    contianer: {
        height: 90,
        width: 90,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 0.5,
        margin: 20,
        marginLeft: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#D9D9D9'
    },
    image: {
        height: 50,
        width: 50
    }
})