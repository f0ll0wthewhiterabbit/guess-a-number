import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TitleText = ({ style, children }) => {
  return <Text style={{ ...styles.title, ...style }}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
})

export default TitleText
