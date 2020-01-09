import React from 'react'
import {StyleSheet, View, ActivityIndicator} from 'react-native'
import {useSelector} from 'react-redux'
import {RootState} from '../../../../redux/types'
import {AjaxState} from '../../../../redux/ajax/types'

const BaseLayout: React.FC = (props: any) => {
  const ajaxState = useSelector<RootState, AjaxState>((state: RootState) => state.ajaxState)
  const loadingSwitcher: JSX.Element = (() => {
    let elem: JSX.Element = <View />
    if (ajaxState.isLoading) {
      elem = (
        <View style={styles.loadingWrapper}>
          <View style={styles.loadingWrapperInner}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </View>
      )
    } else {
      elem = <View />
    }

    return elem
  })()

  const {children} = props
  return (
    <View style={styles.baseLayout}>
      {loadingSwitcher}
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
