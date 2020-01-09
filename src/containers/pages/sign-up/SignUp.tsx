import React, {useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'
import firebase, {RNFirebase} from 'react-native-firebase'
import FacebookLoginButton from '../../../components/buttons/facebook-login/FacebookLoginButton'
import InputText from '../../../components/atoms/input-text/InputText'
import {InputTextProps, INPUT_TEXT_STYLES} from '../../../components/atoms/input-text/types'
import {SignUpDataTypes, SignUpTypes} from './types'
import AlertOnApiError from '../../../modules/api-error-alert/ApiErrorAlert'
import {SignUpParams} from '../../../redux/sign-up/types'
import {SUCCESS_SIGN_UP_API, resetSignUpApi} from '../../../redux/sign-up/action'
import store from '../../../redux/store'
import {setLoading, removeLoading} from '../../../redux/ajax/action'
import BaseLayout from '../../organisms/layout/base/BaseLayout'

const SignUp: React.FC<SignUpTypes> = (props: SignUpTypes): JSX.Element => {
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
      placeholder: 'Password',
      isSecured: true
    }
  ]

  const signUpData: SignUpDataTypes = {
    username: '',
    userID: '',
    email: '',
    password: ''
  }

  const {activateSignUpApi, signUpState} = props

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
        <InputText type={type} name={data.name} value={signUpData[key]} placeholder={data.placeholder} isSecured={data.isSecured} onChangeText={onChangeText} />
      </View>
    )
  })

  const onSubmit = async () => {
    if (signUpData.email !== '' && signUpData.password !== '') {
      store.dispatch(setLoading())
      const responseData: RNFirebase.UserCredential | void = await firebase
        .auth()
        .createUserWithEmailAndPassword(signUpData.email, signUpData.password)
        .then(response => response)
        .catch(error => {
          Alert.alert('The email is not allowed!', 'This email is already used. Please try again with another email', [{text: 'OK'}])
        })
      store.dispatch(removeLoading())

      if ((responseData as RNFirebase.UserCredential).user.uid) {
        const params: SignUpParams = {
          username: signUpData.username,
          userID: signUpData.userID,
          uid: (responseData as RNFirebase.UserCredential).user.uid,
          email: signUpData.email
        }

        activateSignUpApi(params)
      } else {
        AlertOnApiError()
      }
    }
  }

  useEffect(() => {
    if (signUpState.type === SUCCESS_SIGN_UP_API) {
      Alert.alert('Complete Sign up!', '', [{text: 'OK'}])
      store.dispatch(resetSignUpApi())
    }
  }, [signUpState.type])

  return (
    <BaseLayout>
      {/* <Text>Sign Up with Facebook!</Text>
      <FacebookLoginButton /> */}
      {inputElements}
      <Button title="Sign up" onPress={onSubmit} />
    </BaseLayout>
  )
}

export default SignUp
