import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, TouchableHighlight, Image, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SvgUri from 'react-native-svg-uri'

const Y = require('../images/button/y.png')

export default class PageOne extends Component {
  render () {
    return (
      <View style={styles.container1}>
        <ScrollView>
          <View style={styles.container2}>
          <Text style={styles.text}>1</Text>
          <SvgUri width='200' height='200'
            source={{uri: 'https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}} />
          </View>
        </ScrollView>

          {/* Y */}
        <View style={styles.containerY}>
          <TouchableHighlight style={styles.btn} onPress={Actions.pageTwoY}>
            <Image
              style={styles.y}
              source={Y}
          />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'gray'
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  containerY: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 50
  },
  text: {
    fontSize: 50,
    justifyContent: 'center',
    color: 'gold'
  },
  y: {
    height: 50,
    width: 50,
    bottom: 50,
    alignItems: 'flex-end'
  }
})
