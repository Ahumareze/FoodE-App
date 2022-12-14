import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';

//constants
import * as fonts from '../../../constants/fonts';
import * as colors from '../../../constants/colors';

//components
import Item from './components/Item';
import { LongButton } from '../../components';

import foodData from '../../data/foodData';

export default function Cart() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Cart</Text>
        <View style={styles.mainContainer}>
          {foodData.map((i, idx) => (
            <Item
              data={i}
              key={idx}
            />
          ))}
        </View>
        <View style={styles.checkout}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmount}>₦ 45,000</Text>
            <LongButton text={'proceed to checkout'} />
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 0,
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 30,
    color: colors.darkText,
    fontFamily: fonts.bebasNunes
  },
  mainContainer: {
    marginTop: 30,
  },
  checkout: {
    marginTop: 50,
    marginBottom: 100
  },
  totalText: {
    fontFamily: fonts.bebasNunes,
    fontSize: 18,
    color: colors.darkText,
    marginBottom: 5
  },
  totalAmount: {
    fontSize: 32,
    fontFamily: fonts.bebasNunes,
    color: colors.orangeText,
    marginBottom: 30
  }
})