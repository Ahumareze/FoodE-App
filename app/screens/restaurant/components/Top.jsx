import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

//icons and images
import Feather from 'react-native-vector-icons/Feather';
import burger from '../../../../assets/burger.png';

export default function Top({back}) {
    return (
        <View style={styles.imageBg}>
            <View style={styles.canvaLoader}>
                <Image source={burger} style={styles.burger_icon} />
            </View>
            <ImageBackground style={styles.canva} >
                <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.0)']}>
                    <View style={styles.top}>
                        <TouchableOpacity onPress={back} >
                            <View style={styles.backButton}><Feather name={'chevron-left'} size={20} color={'#fff'} /></View>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    imageBg: {
        height: 200,
        overflow: 'hidden'
    },
    canvaLoader: {
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'cyan'
    },
    burger_icon: {
        height: 60,
        width: 60
    },
    canva: {
        height: 200,
        position: 'relative',
        top: -200
    },
    top: {
        padding: 20,
        paddingTop: 50
    },
    backButton: {
        height: 30,
        width: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})