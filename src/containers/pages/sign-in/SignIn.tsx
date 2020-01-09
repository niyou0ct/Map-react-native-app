import React, {useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'
import FacebookLoginButton from '../../../components/buttons/facebook-login/FacebookLoginButton'
import InputText from '../../../components/atoms/input-text/InputText'
import {InputTextProps, INPUT_TEXT_STYLES} from '../../../components/atoms/input-text/types'
import {SignInTypes, SignInDataTypes} from './types'
import AlertOnApiError from '../../../modules/api-error-alert/ApiErrorAlert'
import BaseLayout from '../../organisms/layout/base/BaseLayout'
import {SUCCESS_SIGN_IN_API} from '../../../redux/sign-in/action'
import Navigator from '../../../modules/navigator/Navigator'

const SignIn: React.FC<SignInTypes> = (props: SignInTypes): JSX.Element => {
  const inputData: InputTextProps[] = [
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
      placeholder: 'Password',
      isSecured: true
    }
  ]

  const singInData: SignInDataTypes = {
    email: '',
    password: ''
  }

  const {activateSignInApi, signInState} = props
  const {navigation} = props as any

  const inputElements: JSX.Element[] = inputData.map(data => {
    const type: string = INPUT_TEXT_STYLES.BORDER_BOTTOM
    let key: string = ''
    const onChangeText = (text: string, name: string) => {
      Object.keys(singInData).forEach(item => {
        if (item === name) {
          singInData[key] = text
          key = item
        }
      })
    }

    return (
      <View key={data.name}>
        <InputText type={type} name={data.name} value={singInData[key]} placeholder={data.placeholder} isSecured={data.isSecured} onChangeText={onChangeText} />
      </View>
    )
  })

  const onSubmit = async () => {
    if (singInData.email !== '' && singInData.password !== '') {
      activateSignInApi(singInData)
    } else {
      AlertOnApiError()
    }
  }

  useEffect(() => {
    if (signInState.type === SUCCESS_SIGN_IN_API) {
      Navigator({navigation, place: 'Home'})
    }
  }, [navigation, signInState.type])

  return (
    <BaseLayout>
      {/* <Text>Sign Up with Facebook!</Text>
      <FacebookLoginButton /> */}
      {inputElements}
      <Button title="Sign in" onPress={onSubmit} />
    </BaseLayout>
  )
}

export default SignIn
