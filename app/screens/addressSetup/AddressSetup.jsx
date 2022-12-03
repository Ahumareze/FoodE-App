import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react';

//icons
import Icon from 'react-native-vector-icons/AntDesign';

//constants
import * as colors from '../../../constants/colors';
import * as fonts from '../../../constants/fonts';

//components
import { AuthInput, LongButton, Select } from '../../components';


export default function AddressSetup() {

    const back = () => {

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
                        <Text style={styles.header}>ADDRESS SETUP</Text>
                        <View style={styles.flexBottom}>
                            <AuthInput label={'ADDRESS LINE 1'} placeholder='Address' type={'default'} autoComplete={'street-address'} />
                            <AuthInput label={'ADDRESS LINE 2'} placeholder='Address' type={'default'} autoComplete={'street-address'} margin={20} />
                            <View style={styles.cityContainer}>
                                <View style={styles.zipcode}>
                                    <AuthInput label={'ZIP CODE'} placeholder='000-000' type={'numeric'} autoComplete={'postal-code'} />
                                </View>
                                <View style={styles.city}>
                                    <AuthInput label={'CITY'} placeholder='City' type={'default'} autoComplete={'postal-address-region'} />
                                </View>
                            </View>
                            <Select />
                            <LongButton text={'ADD ADDRESS'} mtSpace={50} />
                            <TouchableOpacity>
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
        marginBottom: 40
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