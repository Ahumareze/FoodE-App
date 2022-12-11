import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

//components
import Header from './components/Header'
import Banner from './components/Banner';
import FoodRender from './components/FoodRender';
import RestaurantsRender from './components/RestaurantsRender';

import ProductDetails from './components/productDetails/ProductDetails';

export default function Home() {
  const productDetails = useSelector(state => state.productReducer.productDetails);

  //naimated styles
  const progress = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(progress, {toValue: 1, useNativeDriver: true}).start();
    Animated.spring(scale, {toValue: 2, useNativeDriver: true}).start()
  }, [])

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <Header />
          <Banner />
          <FoodRender/>
          <RestaurantsRender />
        </ScrollView>
      </SafeAreaView>
      {productDetails ? <ProductDetails data={productDetails} /> : null}
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    animatedContainer: {
      height: 800,
      backgroundColor: 'pink',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    animatedBox: {
      height: 100,
      width: 100,
      backgroundColor: 'blue'
    }
})