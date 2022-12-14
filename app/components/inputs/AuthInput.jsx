import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';

//colors
import * as colors from '../../../constants/colors';
import * as fonts from '../../../constants/fonts';

export default function AuthInput({label, placeholder, margin, type, autoComplete}) {
  return (
    <View style={[styles.container, {marginTop: margin}]} >
      <Text style={styles.label} >{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} placeholderTextColor={colors.inputColor} keyboardType={type} autoComplete={autoComplete} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
    label:{
        color: colors.secondaryText,
        fontSize: 15,
        fontFamily: fonts.bebasNunes,
        paddingLeft: 20,
    },
    input: {
      height: 40,
      width: '100%',
      color: colors.darkText,
      backgroundColor: colors.inputBg,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 20,
      marginTop: 10,
      fontFamily: fonts.poppins,
      fontSize: 14,
      paddingTop: 0,
      paddingBottom: 0,
    }
})