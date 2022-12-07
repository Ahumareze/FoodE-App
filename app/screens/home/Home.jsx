import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react';

//components
import Header from './components/Header'
import Banner from './components/Banner';
import FoodRender from './components/FoodRender';
import RestaurantsRender from './components/RestaurantsRender';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Header />
      <Banner />
      <FoodRender />
      <RestaurantsRender />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
})