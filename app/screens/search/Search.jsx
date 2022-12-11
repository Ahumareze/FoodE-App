import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react';

//constants
import * as dimensions from '../../../constants/dimensions';

//components
import { SearchInput } from '../../components';
import Recent from './components/Recent';

export default function Search() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={true}
      />
      <View style={styles.mainContainer}>
        <SearchInput />
        <Recent />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: dimensions.height,
    width: dimensions.width,
    backgroundColor: '#fff',
    paddingTop: 40
  },
  mainContainer: {
    height: dimensions.height,
    padding: 20,
    paddingTop: 0
  }
})