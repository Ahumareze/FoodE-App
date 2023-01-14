import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react';

//components
import Details from './components/Details'
import Options from './components/Options';

//fonts and colors
import * as colors from '../../../constants/colors';

//icons
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
                translucent={true}
            />
            <Details />

            <View style={styles.optionsContainer}>
                <Options name={'Payment Options'}>
                    <Ionicons name={'wallet-outline'} size={20} color={colors.green} />
                </Options>
                <Options name={'Manage Delivery Address'} mt={20} >
                    <Feather name={'map-pin'} size={20} color={colors.green} />
                </Options>
                <Options name={'Order History'} mt={20} >
                    <Feather name={'clock'} size={20} color={colors.green} />
                </Options>
                <Options name={'Rate Us'} mt={20} >
                    <Feather name={'star'} size={20} color={colors.green}/>
                </Options>
            </View>

            <View style={styles.optionsContainer}>
                <Options name={'Terms and Conditions'}>
                    <Ionicons name={'ios-document-text-outline'} size={20} color={colors.green} />
                </Options>
                <Options name={'Logout'} mt={20} >
                    <Ionicons name={'ios-exit-outline'} size={20} color={colors.green} />
                </Options>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 70
    },
    optionsContainer: {
        width: '100%',
        backgroundColor: 'red',
        marginTop: 40,
        borderRadius: 15,
        backgroundColor: '#fff',
        borderColor: '#D9D9D9',
        borderWidth: 0.5,
        padding: 20
    }
})