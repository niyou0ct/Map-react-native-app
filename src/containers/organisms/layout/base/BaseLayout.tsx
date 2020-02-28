import React, {useGlobal} from 'reactn'
import {StyleSheet, View, ActivityIndicator} from 'react-native'

const BaseLayout: React.FC = (props: any) => {
  const [ajaxState] = useGlobal('ajaxState')
  const {children} = props

  return (
    <View style={styles.baseLayout}>
      {ajaxState.isLoading && (
        <View style={styles.loadingWrapper}>
          <View style={styles.loadingWrapperInner}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </View>
      )}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  baseLayout: {
    flex: 1,
    padding: 15
  },
  loadingWrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100
  },
  loadingWrapperInner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    opacity: 0.7
  }
})

export default BaseLayout
