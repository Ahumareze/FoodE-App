import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react';

//components
import Top from './components/Top';
import Details from './components/Details';

export default function Restaurant({navigation}) {
    return (
        <ScrollView style={styles.contianer}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <Top back={() => navigation.navigate('Home')} />
            <Details />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        backgroundColor: '#fff'
    }
})