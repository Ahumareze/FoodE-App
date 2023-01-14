import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

//constants
import * as fonts from '../../../../constants/fonts';
import * as colors from '../../../../constants/colors';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Item({data}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: data.image}} />
            <View style={styles.mainContianer}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.amount}>₦ {data.price?.toLocaleString()}</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.deleteButton}><Ionicons name='ios-trash-bin-outline' color={'#fff'} size={15} /></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
    },
    image: {
        height: 80,
        width: 80,
        backgroundColor: '#f1f1f1',
        borderRadius: 10
    },
    mainContianer: {
        height: '100%',
        flex: 1,
        marginLeft: 20,
        marginRight: 15,
        paddingTop: 3,
        paddingBottom: 3
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontFamily: fonts.poppins_medium,
        color: colors.darkText,
        paddingBottom: 2
    },
    amount: {
        fontFamily: fonts.bebasNunes,
        color: colors.green,
        fontSize: 24
    },
    deleteButton: {
        height: 30,
        width: 30,
        backgroundColor: colors.alert_red,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    }
})