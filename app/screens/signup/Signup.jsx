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

export default function Signup({navigation}) {

    const back = () => {
        navigation.push(routes.getStarted)
    }

    const goToLogin = () => {
        navigation.navigate(routes.login)
    };

    const register = () => {
        navigation.navigate(routes.addressSetup)
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
                        <Text style={styles.header}>REGISTER</Text>
                        <View style={styles.flexBottom}>
                            <AuthInput label={'FULL NAME'} placeholder={'John Doe'} type='default' autoComplete={'name'}  />
                            <AuthInput label={'EMAIL'} placeholder={'johndoe@email.com'} type='email-address' autoComplete={'email'}  margin={20} />
                            <AuthInput label={'PHONE'} placeholder={'+23456789051'} type='numeric' autoComplete={'tel'}  margin={20}/>
                            <PasswordInput label={'PASSWORD'} margin={20} />

                            <LongButton onClick={register} text={'REGISTER'} mtSpace={50} />

                            <TouchableOpacity onPress={goToLogin} > 
                                <Text style={styles.extraText} >Already have an account? <Text style={styles.span} >Login</Text> </Text>
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
        paddingRight: 15,
        paddingLeft: 15
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