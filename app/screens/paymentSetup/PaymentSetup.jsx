import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react';

//icons
import Icon from 'react-native-vector-icons/AntDesign';

//constants
import * as colors from '../../../constants/colors';
import * as fonts from '../../../constants/fonts';

//components
import { AuthInput, LongButton, Select } from '../../components';

import * as routes from '../../../constants/routes';


export default function PaymentSetup({navigation}) {

    const back = () => {

    };
    
    const skip = () => {
        navigation.navigate(routes.home)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <KeyboardAvoidingView style={{flex: 1}} behavior={'height'} >
                <ScrollView style={{flex: 1}}>
                    <View style={styles.main}>
                        <TouchableOpacity onPress={back} >
                            <View style={styles.closeButton}>
                                <Icon name='close' size={24} color="#900" />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.header}>PAYMENT SETUP</Text>
                        <View style={styles.flexBottom}>
                            <AuthInput label={'CARD NUMBER'} placeholder='XXXX-XXXX-XXXX-XXXX' type={'numeric'} autoComplete={'cc-number'} />
                            <View style={styles.cityContainer}>
                                <View style={styles.zipcode}>
                                    <AuthInput label={'EXPIRY DATE'} placeholder='MM / YY' type={'numeric'} autoComplete={'cc-exp'} />
                                </View>
                                <View style={styles.city}>
                                    <AuthInput label={'CVV'} placeholder='XXX' type={'numeric'} autoComplete={'cc-csc'} />
                                </View>
                            </View>
                            <LongButton text={'ADD CARD NOW'} mtSpace={50} />
                            <TouchableOpacity onPress={skip}>
                                <Text style={styles.skip} >Skip for now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
        paddingTop: 30,
        paddingBottom: 0,
    },
    closeButton: {
        height: 30,
        width: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    header: {
        fontSize: 36,
        color: colors.darkText,
        fontFamily: fonts.bebasNunes,
        marginTop: 50,
        marginBottom: 60
    },
    flexBottom: {
        flex: 1,
    },
    cityContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
    },
    zipcode:{
        flex: 1,
        paddingRight: 10
    },
    city: {
        flex: 1,
        paddingLeft: 10
    },
    skip: {
        fontSize: 15,
        textAlign: 'center',
        color: colors.secondaryText,
        fontFamily: fonts.poppins_medium,
        marginTop: 30
    }
})