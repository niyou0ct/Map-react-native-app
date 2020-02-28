import React, {useGlobal} from 'reactn'
import {SafeAreaView, StyleSheet, ScrollView, View, StatusBar, Button} from 'react-native'

import {Header, Colors} from 'react-native/Libraries/NewAppScreen'

import firebase from 'react-native-firebase'
import {NavigationObj} from '../../../types'
import Navigator from '../../../modules/navigator/Navigator'

interface Props {
  navigation: NavigationObj
}

const Home: React.FC<Props> = (props: Props): JSX.Element => {
  const [authState] = useGlobal('authState')
  const {hasLoggedIn} = authState

  const authButtonTitle: string = hasLoggedIn ? 'Sign out' : 'Sign in'
  const authPressButton = (): void => {
    if (hasLoggedIn) {
      firebase.auth().signOut()
    } else {
      Navigator({navigation: props.navigation, place: 'SignIn'})
    }
  }

  const navigationElements = ((): JSX.Element => {
    if (hasLoggedIn) {
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
