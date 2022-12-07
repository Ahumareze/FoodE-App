import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

//images
import banner from '../../../../assets/banner.jpg';

//fonts and colors
import * as fonts from '../../../../constants/fonts';
import * as colors from '../../../../constants/colors';

export default function Banner() {
    return (
        <View style={styles.container} >
            <ImageBackground style={styles.banner} source={banner} >
                <View style={styles.topBanner}>
                    <Text style={styles.title} >New Restaurant Alert</Text>
                    <Text style={styles.intro} >Introducing our newest restaurant partners; The Sushi palace</Text>
                </View>
                <View style={styles.bottomBanner}>
                    <TouchableOpacity>
                        <View style={styles.bannerbutton}><Text style={styles.buttonText} >Order Now</Text></View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 25,
        paddingBottom: 25
    },
    banner: {
        width: '100%',
        backgroundColor: colors.green,
        borderRadius: 10,
        overflow: 'hidden',
    },
    topBanner: {
        // backgroundColor: 'red',
        padding: 20
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.bebasNunes,
        color: '#fff'
    },
    intro: {
        color: '#fff',
        width: '80%',
        fontFamily: fonts.poppins_medium,
        marginTop: 10,
        fontSize: 14
    },
    bottomBanner: {
        padding: 20,
        paddingTop: 0
    },
    bannerbutton: {
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        paddingLeft: 30,
        paddingRight: 30
    },
    buttonText: {
        fontSize: 14,
        color: colors.darkText,
        fontFamily: fonts.poppins
    }
})