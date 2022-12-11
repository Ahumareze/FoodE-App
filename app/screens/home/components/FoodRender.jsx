import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';

//fonts and colors
import * as fonts from '../../../../constants/fonts';
import * as colors from '../../../../constants/colors';

//components
import { Food } from '../../../components';
import foodData from '../../../data/foodData';

export default function FoodRender() {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>Recommended for you</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {foodData.map((i, idx) => (
                    <Food 
                        initial={idx === 0}
                        data={i}
                        key={idx}
                    />
                ))}
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