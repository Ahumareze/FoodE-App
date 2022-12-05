import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react';

//components
import Header from './components/Header'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
        />
        <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})