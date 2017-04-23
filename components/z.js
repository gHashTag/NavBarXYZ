
 'use strict';

 import React, { Component } from 'react'
 import {
  View,
  StyleSheet,
  Image
} from 'react-native'

 export default class renderBackButtonView extends Component {
   render () {
     return (
       <View style={styles.z}>
         <Image source={require('../images/button/z.png')} />
          />
       </View>
       )
   }
}

const styles = StyleSheet.create({
  z: {
    height: 40,
    width: 50
  }
})
