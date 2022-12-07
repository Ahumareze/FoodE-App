import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

export default function Restaurants({logo, initial}) {
    return (
        <View style={initial ? styles.initialContainer : styles.contianer}>
            <Image style={styles.image} source={logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    initialContainer: {
        height: 90,
        width: 90,
        borderRadius: 20,
        backgroundColor: '#fff',
        elevation: 4,
        margin: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contianer: {
        height: 90,
        width: 90,
        borderRadius: 20,
        backgroundColor: '#fff',
        elevation: 4,
        margin: 20,
        marginLeft: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 50,
        width: 50
    }
})