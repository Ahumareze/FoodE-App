import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react';

export default function Signup() {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.main}>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    main: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20
    },
})