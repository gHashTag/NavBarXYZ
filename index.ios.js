import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native'
import { Router, Actions, Scene } from 'react-native-router-flux'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'

const X = require('./images/button/x.png')
const Y = require('./images/button/y.png')
const Z = require('./images/button/z.png')

class Navbar extends Component {
  render () {
    let backButtonFunction = function () {
      return (
        <TouchableOpacity style={styles.zTouch} onPress={Actions.pop}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Z} style={styles.z} />
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <Router>
        <Scene key='root' hideNavBar={false} navigationBarStyle={styles.navigationBarStyle}>

        {/* PageOne */}
          <Scene initial={true} key='pageOne' direction='vertical' duration={400} component={PageOne}
            // X
            onRight={() => { Actions.pageTwo() }} direction='vertical'
            rightButtonImage={X} rightButtonIconStyle={styles.x}
            // Y
            // onLeft={() => { Actions.pageTwo() }}
            // leftButtonImage={Y} leftButtonIconStyle={styles.y}
            />

        {/* PageTwo */}
          <Scene key='pageTwo' duration={400} component={PageTwo}
            // Z
           renderBackButton={backButtonFunction}
            // X
            onRight={() => { Actions.pageThree() }}
            rightButtonImage={X} rightButtonIconStyle={styles.x}
            // Y
            // onLeft={() => { Actions.pageThree() }}
            // rightButtonImage={Y} rightButtonIconStyle={styles.y}
          />
          {/* PageTwoY */}
            <Scene key='pageTwoY' direction='vertical' duration={400} component={PageTwo}
              // Z
             renderBackButton={backButtonFunction}
              // X
              onRight={() => { Actions.pageThree() }}
              rightButtonImage={X} rightButtonIconStyle={styles.x}
              // Y
              // onLeft={() => { Actions.pageThree() }}
              // rightButtonImage={Y} rightButtonIconStyle={styles.y}
            />

          {/* PageThree */}
          <Scene key='pageThree' duration={400} component={PageThree} renderBackButton={backButtonFunction}/>
          {/* PageThreeY */}
            <Scene key='pageThreeY' direction='vertical' duration={400} component={PageThree}
              // Z
             renderBackButton={backButtonFunction}
              // X
              onRight={() => { Actions.pageThree() }}
              rightButtonImage={X} rightButtonIconStyle={styles.x}
              // Y
              // onLeft={() => { Actions.pageThree() }}
              // rightButtonImage={Y} rightButtonIconStyle={styles.y}
            />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: 'black',
    bottom: 0,
    top: null,
    height: 50
  },
  x: {
    height: 50,
    width: 50,
    bottom: 16
  },
  y: {
    height: 50,
    width: 50,
    bottom: 10,
    left: 120,
    justifyContent: 'center'
  },
  z: {
    width: 50,
    height: 50,
    bottom: 6,
    left: 6
  },
  zTouch: {
    width: 100,
    height: 37,
    position: 'absolute',
    bottom: 8,
    left: 0,
    padding: 0,
    justifyContent:'center'
  }
})

AppRegistry.registerComponent('Navbar', () => Navbar)
