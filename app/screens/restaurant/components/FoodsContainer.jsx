import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';

//constants
import * as colors from '../../../../constants/colors';
import * as fonts from '../../../../constants/fonts';

//components
import foodData from '../../../data/foodData';
import FoodItem from './FoodItem';

export default function FoodsContainer() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Foods</Text>
            <FlatList
                style={styles.list}
                data={foodData}
                keyExtractor={(item) => item.name}
                numColumns={2}
                renderItem={({item, index}) => (
                    <FoodItem
                        data={item}
                        index={index}
                    />
                )}
            />
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
    },
    title: {
        fontSize: 18,
        fontFamily: fonts.bebasNunes,
        color: colors.darkText
    },
    list: {
        marginTop: 20
    }
})