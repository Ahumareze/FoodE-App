import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';

//componets
import { Dropdown } from 'react-native-element-dropdown';

//colors
import * as colors from '../../../constants/colors';
import * as fonts from '../../../constants/fonts';

const data = [
    { label: 'Lagos', value: 'LAGOS' },
    { label: 'Imo', value: 'IMO' },
    { label: 'Abuja', value: 'ABUJA' },
    { label: 'Port Harcourt', value: 'PH' },
  ];

export default function Select() {
    const [value, setValue] = useState();

    const renderItem = (item) => {
        return (
          <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
          </View>
        );
      };

    return (
        <View style={styles.container} >
            <Text style={styles.label} >STATE</Text>
            <Dropdown
                style={styles.dropdown}
                data={data}
                placeholder="Select item"
                labelField="label"
                valueField="value"
                value={value}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                onChange={item => {
                    setValue(item.value);
                }}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    label:{
        color: colors.secondaryText,
        fontSize: 15,
        fontFamily: fonts.bebasNunes,
        paddingLeft: 20,
    },
    item: {
        height: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    textItem: {
        color: colors.darkText
    },
    placeholderStyle: {
        fontSize: 16,
        fontFamily: fonts.poppins,
        color: colors.inputColor,
    },
    selectedTextStyle: {
        fontSize: 16,
        fontFamily: fonts.poppins,
        color: colors.darkText,
    },
    dropdown: {
        height: 40,
        width: '100%',
        backgroundColor: colors.inputBg,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        marginTop: 10,
        fontSize: 14,
        paddingTop: 0,
        paddingBottom: 0,
      }
})