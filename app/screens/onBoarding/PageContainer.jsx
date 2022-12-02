import { ImageBackground, StyleSheet, StatusBar, View, Text, Button } from 'react-native'
import React from 'react';

//components
import { Logo, LongButton } from '../../components';

export default function PageContainer({id, img, onNext}) {

    let title = <Text style={styles.header1} >AWESOME <Text style={{color: '#2FDBBC'}} >LOCAL</Text> FOOD</Text>;

    if(id === 2){
        title = <Text style={styles.header2} >DELIVERED AT YOUR <Text style={{color: '#2FDBBC'}} >DOORSTEP</Text></Text>;
    }else if(id === 3){
        title = <Text style={styles.header2} >GRAB THE BEST <Text style={{color: '#2FDBBC'}} >DEALS</Text> AROUND</Text>;
    }

    return (
        <ImageBackground source={img} style={styles.container} >
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.backDrop} >
                <View style={styles.topContainer}>
                    <Logo />
                </View>
                <View style={styles.bottomContainer}>
                    {title}
                    <Text style={styles.intro_text} >Discover delicious food from the amazing restaurants near you</Text>

                    <LongButton onClick={onNext} />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backDrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20
    },
    topContainer: {
        flex: 0.5,
        paddingTop: 40
    },
    bottomContainer: {
        flex: 0.5,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    header1: {
        fontSize: 40,
        width: 150,
        fontFamily: 'BebasNeue-Regular',
        color: '#fff'
    },
    header2: {
        fontSize: 40,
        width: 220,
        fontFamily: 'BebasNeue-Regular',
        color: '#fff'
    },
    intro_text: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
        fontFamily: 'Poppins-Regular'
    }
})