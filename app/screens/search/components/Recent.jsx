import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

//constants
import * as colors from '../../../../constants/colors';
import * as fonts from '../../../../constants/fonts';

//icons
import Feather from 'react-native-vector-icons/Feather';

export default function Recent() {
    const Item = ({name}) => {
        return(
            <View style={styles.item}>
                <View style={styles.itemContaier}>
                    <Feather name='clock' size={20} color={colors.inputColor} />
                    <Text style={styles.itemText}>{name}</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.cancle}>
                        <Feather name='x' size={20} color={colors.inputColor} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Title</Text>
                <View style={styles.clearAll}>
                    <Text style={styles.clearText}>Clear All</Text>
                </View>
            </View>
            <Item name={'Chicken Tikka'} />
            <Item name={'Pizza'} />
            <Item name={'Ice Cream'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'baseline',
        marginBottom: 10
    },
    title: {
        fontSize: 14,
        fontFamily: fonts.bebasNunes,
        color: colors.darkText
    },
    clearAll: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end'
    },
    clearText: {
        fontSize: 14,
        fontFamily: fonts.bebasNunes,
        color: colors.inputColor
    },
    item: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    itemContaier: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 16,
        fontFamily: fonts.poppins,
        color: colors.inputColor,
        paddingLeft: 10,
        paddingTop: 3
    },
    cancle: {
        height: 35,
        width: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})