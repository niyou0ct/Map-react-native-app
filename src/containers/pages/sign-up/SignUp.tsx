import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import FacebookLoginButton from '../../../components/buttons/facebook-login/FacebookLoginButton'
import InputText from '../../../components/atoms/input-text/InputText'
import {InputTextProps, INPUT_TEXT_STYLES} from '../../../components/atoms/input-text/types'

const styles = StyleSheet.create({
  baseLayout: {
    flex: 1,
    padding: 15
  }
})

const SignUp: React.FC = (): JSX.Element => {
  const inputData: InputTextProps[] = [
    {
      type: '',
      name: 'username',
      value: '',
      placeholder: 'Username'
    },
    {
      type: '',
      name: 'userID',
      value: '',
      placeholder: 'UserID'
    },
    {
      type: '',
      name: 'email',
      value: '',
      placeholder: 'Email'
    },
    {
      type: '',
      name: 'password',
      value: '',
      placeholder: 'Password'
    }
  ]

  const signUpData: {[key: string]: string} = {
    username: '',
    userID: '',
    email: '',
    password: ''
  }

  const inputElements: JSX.Element[] = inputData.map(data => {
    const type: string = INPUT_TEXT_STYLES.BORDER_BOTTOM
    let key: string = ''
    const onChangeText = (text: string, name: string) => {
      Object.keys(signUpData).forEach(item => {
        if (item === name) {
          signUpData[key] = text
          key = item
        }
      })
    }

    return (
      <View key={data.name}>
        <InputText type={type} name={data.name} value={signUpData[key]} placeholder={data.placeholder} onChangeText={onChangeText} />
      </View>
    )
  })

  return (
    <View style={styles.baseLayout}>
      {/* <Text>Sign Up with Facebook!</Text>
      <FacebookLoginButton /> */}
      {inputElements}
    </View>
  )
}

export default SignUp
