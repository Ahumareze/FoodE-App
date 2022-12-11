import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';

//constants
import * as colors from '../../../constants/colors';
import * as fonts from '../../../constants/fonts';

//icons
import Feather from 'react-native-vector-icons/Feather';

export default function SearchInput() {
    return (
        <View>
            <Text style={styles.label} >Search</Text>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Cusine / Dish' autoFocus={true} />
                <TouchableOpacity>
                    <View style={styles.delete}>
                        <Feather name='delete' size={20} color={colors.inputColor} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        color: colors.secondaryText,
        fontSize: 15,
        fontFamily: fonts.bebasNunes,
        paddingLeft: 20,
    },
    container: {
        height: 40,
        width: '100%',
        backgroundColor: colors.inputBg,
        borderRadius: 22,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    input: {
        flex: 1,
        height: 40,
        color: colors.darkText,
        paddingLeft: 20,
        fontFamily: fonts.poppins,
        fontSize: 14,
        paddingTop: 0,
        paddingBottom: 0
    },
    delete: {
        height: 40,
        width: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})