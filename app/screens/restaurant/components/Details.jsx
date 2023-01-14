import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

//constants
import * as colors from '../../../../constants/colors';
import * as fonts from '../../../../constants/fonts';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Details() {
    return (
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <View style={styles.ImageContainer}>
                    <View style={styles.imageItem}></View>
                </View>
                <View style={styles.ratings}><AntDesign name='star' color={colors.orangeText}/><Text style={styles.ratings_text}>3.4</Text></View>
            </View>
            <View style={styles.rightSide}>
                <Text style={styles.title}>Chicken Republic</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 15,
        paddingLeft: 15,
        display: 'flex',
        flexDirection: 'row'
    },
    leftSide: {
        width: 80,
        position: 'relative',
        top: -20
    },
    ImageContainer: {
        height: 80,
        width: 80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'orange',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageItem: {
        height: 70,
        width: 70,
        borderRadius: 50,
        // backgroundColor: 'rgba(241, 198, 91, 0.6)',
        backgroundColor: colors.orangeText
    },
    ratings: {
        height: 30,
        borderWidth: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 15,
        borderRadius: 20,
        borderColor: colors.orangeText,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 12,
        paddingLeft: 12
    },
    ratings_text: {
        fontSize: 14,
        paddingLeft: 5,
        color: colors.darkText
    },
    rightSide: {
        flex: 1,
        marginLeft: 15,
        paddingTop: 10
    },
    title: {
        fontFamily: fonts.bebasNunes,
        color: colors.darkText,
        fontSize: 26
    }
})