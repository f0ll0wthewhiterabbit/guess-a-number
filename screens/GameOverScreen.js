import React from 'react'
import { StyleSheet, View, Button, Image } from 'react-native'

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          // source={{
          //   uri:
          //     'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg',
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of rounds: {roundsNumber}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default GameOverScreen
