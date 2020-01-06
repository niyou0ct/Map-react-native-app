import React from 'react'
import {View, Alert} from 'react-native'
import {LoginButton} from 'react-native-fbsdk'

const FacebookLoginButton: React.FC = (): JSX.Element => {
  const permissions: string[] = ['email']

  const onLoginFinished = (): void => {
    console.log('great!')
  }

  const onLogoutFinished = (): void => {
    console.log('We are Done!')
  }

  return (
    <View>
      <LoginButton permissions={permissions} onLoginFinished={onLoginFinished} onLogoutFinished={onLogoutFinished} />
    </View>
  )
}

export default FacebookLoginButton
