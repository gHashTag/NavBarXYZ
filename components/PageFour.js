
 'use strict';

 import React, { Component } from 'react'
 import {
  View,
  StyleSheet
} from 'react-native'
 import AwesomeButton from 'react-native-awesome-button'

 export default class PageFour extends Component {

   handleButtonPress () {
    console.log('I was pressed')
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton states={{
                        default: {
                          text: 'Press me',
                          onPress: this.handleButtonPress,
                        }
                       }} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
