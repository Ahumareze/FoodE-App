import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';

//fonts and colors
import * as fonts from '../../../../constants/fonts';
import * as colors from '../../../../constants/colors';

//components
import Restaurants from '../../../components/restaurants/Restaurants';

//images
import logo1 from '../../../../assets/restaurants/logo1.png';
import logo2 from '../../../../assets/restaurants/logo2.png';
import logo3 from '../../../../assets/restaurants/logo3.png';
import logo4 from '../../../../assets/restaurants/logo4.png';

export default function RestaurantsRender({onClick}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Restaurants</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <Restaurants logo={logo1} initial onClick={() => onClick(1)} />
                <Restaurants logo={logo2} onClick={() => onClick(2)} />
                <Restaurants logo={logo3} onClick={() => onClick(3)} />
                <Restaurants logo={logo4} onClick={() => onClick(4)} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },  
    title: {
        fontSize: 15,
        fontFamily: fonts.bebasNunes,
        color: colors.darkText,
        paddingLeft: 20,
        paddingRight: 20
    }
})