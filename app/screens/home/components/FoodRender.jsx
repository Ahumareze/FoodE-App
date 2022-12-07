import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';

//fonts and colors
import * as fonts from '../../../../constants/fonts';
import * as colors from '../../../../constants/colors';

//image
import foodimg from '../../../../assets/onboarding1.jpg';
import foodimg2 from '../../../../assets/onboarding3.jpeg';

//components
import { Food } from '../../../components';

export default function FoodRender() {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>Recommended for you</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <Food initial img={foodimg}/>
                <Food img={foodimg2}/>
                <Food img={foodimg}/>
                <Food img={foodimg2}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontFamily: fonts.bebasNunes,
        color: colors.darkText,
        paddingLeft: 20,
        paddingRight: 20
    }
})