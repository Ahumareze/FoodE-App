import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import React, { useEffect, useRef  } from 'react';
import {useDispatch} from 'react-redux';

//image
import foodimg from '../../../../../assets/onboarding3.jpeg';

//icons
import Icon from 'react-native-vector-icons/Feather';

//constants
import * as colors from '../../../../../constants/colors';
import * as fonts from '../../../../../constants/fonts';
import * as dimensions from '../../../../../constants/dimensions';

//components
import Quantity from './components/Quantity';
import { LongButton } from '../../../../components';

//slices
import { updateproduceState } from '../../../../redux/reducers/productSlice';

export default function ProductDetails({data}) {
    //initialize
    const dispatch = useDispatch();

    const back = () => {
        dispatch(updateproduceState(null))
    };

    //naimated styles
    const progress = useRef(new Animated.Value(dimensions.height)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progress, {toValue: 1, useNativeDriver: false, duration: 400}).start();
        Animated.timing(opacity, {toValue: 1, duration: 400, useNativeDriver: false}).start()
    }, [])
    
    return (
        <Animated.ScrollView style={[styles.box, {top: progress, opacity: opacity}]}>
            
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent={true}
                />
                <ImageBackground style={styles.top} source={{uri: data.image}}  >
                    <View style={styles.topContainer}>
                        <TouchableOpacity onPress={back} ><View style={styles.backButton}><Icon name={'chevron-left'} size={20} color={'#fff'} /></View></TouchableOpacity>
                        <View style={styles.navigations}></View>
                    </View>
                </ImageBackground>
                <View style={styles.contianer} >
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.restaurant}>{data.restuarant}</Text>
                    <View style={styles.description}>
                        <Text style={styles.description_title}>Description</Text>
                        <Text style={styles.description_text}>Non odit iusto delectus maxime sit placeat voluptatum dolorem. Dolores quos rerum iusto. Beatae totam ab veritatis aliquid tenetur qui ut. Quia ut dolorum enim et. Exercitationem occaecati eum est ex qui harum aliquam.</Text>
                    </View>

                    <View style={styles.bottomContainer}>
                        <Quantity />
                        <View style={styles.priceContainer}>
                            <Text style={styles.total_title}>SUB TOTAL</Text>
                            <Text style={styles.total_amount}>₦{data.price}</Text>
                        </View>
                    </View>

                    <LongButton text={'ADD TO CART'} />
                </View>
        </Animated.ScrollView>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        position: 'absolute',
        width: '100%'
    },
    top: {
        height: 350,
        width: '100%',
        backgroundColor: '#fafafa'
    },
    topContainer: {
        flex: 1,
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
    },
    contianer: {
        padding: 20
    },
    title: {
        fontSize: 26,
        color: colors.darkText,
        fontFamily: fonts.bebasNunes
    },
    restaurant: {
        fontSize: 15,
        fontFamily: fonts.poppins_medium,
        color: colors.orangeText,
        marginTop: 5
    },
    description: {
        marginTop: 30
    },
    description_title: {
        fontSize: 15,
        color: colors.darkText,
        fontFamily: fonts.bebasNunes
    },
    description_text: {
        fontSize: 14,
        color: colors.inputColor,
        fontFamily: fonts.poppins,
        marginTop: 10
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    priceContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    total_title: {
        fontFamily: fonts.bebasNunes,
        color: colors.darkText,
        fontSize: 15
    },
    total_amount: {
        fontSize: 27,
        marginTop: 10,
        color: colors.green,
        fontFamily: fonts.bebasNunes
    }
})