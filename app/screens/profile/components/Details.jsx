import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';

//constants
import * as colors from '../../../../constants/colors';
import * as fonts from '../../../../constants/fonts';

export default function Details() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.profileImage} />
            </View>
            <Text style={styles.name}>Ifeanyi Ahumareze</Text>
            <Text style={styles.email}>ifeanyiahumareze001@gmail.com</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    imageContainer: {
        height: 86,
        width: 86,
        borderRadius: 100,
        marginRight: 'auto',
        marginLeft: 'auto',
        borderWidth: 4,
        borderColor: colors.green,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImage: {
        height: 70,
        width: 70,
        backgroundColor: '#f1f1f1',
        borderRadius: 40
    },
    name: {
        color: colors.darkText,
        fontFamily: fonts.poppins_medium,
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 0
    },
    email: {
        color: '#5f5f5f',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 2
    }
})