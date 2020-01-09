import React from 'react'
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button} from 'react-native'

import {Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions} from 'react-native/Libraries/NewAppScreen'

import firebase from 'react-native-firebase'
import {useSelector} from 'react-redux'
import {NavigationObj} from '../../../types'
import Navigator from '../../../modules/navigator/Navigator'
import {RootState} from '../../../redux/types'
import {LoggedInState} from '../../../redux/logged-in/types'

interface Props {
  navigation: NavigationObj
}

const Home: React.FC<Props> = (props: Props): JSX.Element => {
  const isLoggedInState = useSelector<RootState, LoggedInState>((state: RootState) => state.loggedInState)
  const {isLoggedIn} = isLoggedInState

  const authButtonTitle: string = isLoggedIn ? 'Sign out' : 'Sign in'
  const authPressButton = (): void => {
    if (isLoggedIn) {
      firebase.auth().signOut()
    } else {
      Navigator({navigation: props.navigation, place: 'SignIn'})
    }
  }

  const navigationElements = ((): JSX.Element => {
    if (isLoggedIn) {
      return (
        <View>
          <Button title="Go to Map" onPress={() => Navigator({navigation: props.navigation, place: 'Map'})} />
          <Button title="Go to Registration Store" onPress={() => Navigator({navigation: props.navigation, place: 'AddStore'})} />
        </View>
      )
    }
    return <View />
  })()

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View>
              <Button title={authButtonTitle} onPress={authPressButton} />
              <Button title="Go to Sign up" onPress={() => Navigator({navigation: props.navigation, place: 'SignUp'})} />
              {navigationElements}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  }
})

export default Home
