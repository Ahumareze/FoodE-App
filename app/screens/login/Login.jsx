import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

//components
import { AuthInput, LongButton, PasswordInput } from '../../components';

//icons
import Icon from 'react-native-vector-icons/AntDesign';

//constants
import * as colors from '../../../constants/colors';
import * as fonts from '../../../constants/fonts';

//paths
import * as routes from '../../../constants/routes';

export default function Login({navigation}) {

    const back = () => {
        navigation.push(routes.getStarted)
    }

    const goToSignup = () => {
        navigation.navigate(routes.signup)
    }

    return (
        <SafeAreaView style={styles.container} >
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
                        <Text style={styles.header}>LOGIN</Text>
                        <View style={styles.flexBottom}>
                            <AuthInput label={'EMAIL'} placeholder={'johndoe@email.com'} type='email-address' autoComplete={'email'} />
                            <PasswordInput label={'PASSWORD'} margin={20} />

                            <LongButton text={'LOGIN'} mtSpace={50} />

                            <TouchableOpacity onPress={goToSignup} > 
                                <Text style={styles.extraText} >Don't have an account? <Text style={styles.span} >Register</Text> </Text>
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
        justifyContent: 'flex-end'
    },
    extraText:{
        color: colors.secondaryText,
        fontFamily: fonts.poppins_medium,
        textAlign: 'center',
        marginTop: 30
    },
    span:{
        color: colors.orangeText,
    }
})