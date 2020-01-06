import React from 'react'
import {View, Text} from 'react-native'
import FacebookLoginButton from '../../../components/buttons/facebook-login/FacebookLoginButton'

const SignUp: React.FC = (): JSX.Element => {
  return (
    <View>
      <Text>Sign Up with Facebook!</Text>
      <FacebookLoginButton />
    </View>
  )
}

export default SignUp
