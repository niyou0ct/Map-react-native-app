import React, {useEffect} from 'react'
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

import axios, {AxiosResponse} from 'axios'
import {NavigationObj} from '../../../types'

interface Props {
  navigation: NavigationObj
}

const Home: React.FC<Props> = (props: Props): JSX.Element => {
  /* eslint no-undef: off */
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null
  // const goToMap = (): void => {
  //   const {navigate} = props.navigation
  //   navigate('Map')
  // }

  // const goToAddStore = (): void => {
  //   const {navigate} = props.navigation
  //   navigate('AddStore')
  // }

  const moveToPage = (value: string) => {
    const {navigate} = props.navigation
    navigate(value)
  }

  useEffect(() => {
    const postApi = async (): Promise<void> => {
      const response: AxiosResponse<any> = await axios.get(
        'https://firstmap-1571998274715.firebaseio.com/stores'
      )

      // console.log(response)
      //
      if (response.status === 200) {
        // console.log(response.data)
      }
    }

    postApi()
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <Header />
          {!usingHermes ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View>
              <Button title="Go to Map" onPress={() => moveToPage('Map')} />
              <Button title="Go to Registration Store" onPress={() => moveToPage('AddStore')} />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then
                come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
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
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})

export default Home
