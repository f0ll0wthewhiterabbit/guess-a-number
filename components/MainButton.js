import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Colors from '../constants/colors'

const MainButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
})

export default MainButton
