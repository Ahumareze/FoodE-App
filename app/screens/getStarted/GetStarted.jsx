import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react';

//components
import { Logo, LongButton, OutlineButton } from '../../components';

//constants
import * as colors from '../../../constants/colors';

//paths
import * as routes from '../../../constants/routes';

export default function GetStarted({navigation}) {

    const register = () => {
        navigation.navigate(routes.signup);
    };

    const login = () => {
        navigation.navigate(routes.login)
    }

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.main}>
                <Logo dark />
                <Text style={styles.lagreText} >GET <Text style={{color: '#2FDBBC'}} >STARTED</Text></Text>
                <Text style={styles.intro_text} >Get started and enjoy the awesome local foor at your home or workplace</Text>

                <View style={styles.buttonsContainer}>
                    <LongButton onClick={login} text={'LOGIN'} mtSpace={0}  />
                    <OutlineButton onClick={register}  text={'REGISTER'} mtSpace={30}  />
                </View>
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
    lagreText: {
        fontSize: 40,
        fontFamily: 'BebasNeue-Regular',
        color: '#000',
        marginTop: 50
    },
    intro_text: {
        fontSize: 15,
        color: colors.darkText,
        marginTop: 10,
        fontFamily: 'Poppins-Regular'
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    }
})