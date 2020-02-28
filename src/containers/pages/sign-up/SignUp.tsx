import React, {useState, useDispatch} from 'reactn'
import {View, Button, Alert} from 'react-native'
import firebase, {RNFirebase} from 'react-native-firebase'
import InputText from '../../../components/atoms/input-text/InputText'
import {InputTextProps, INPUT_TEXT_STYLES} from '../../../components/atoms/input-text/types'
import {SignUpDataTypes, SignUpProps} from './types'
import AlertOnApiError from '../../../modules/api-error-alert/ApiErrorAlert'
import store from '../../../redux/store'
import BaseLayout from '../../organisms/layout/base/BaseLayout'
import {postSignUpApi} from '../../../api/auth/apis'
import {SignUpParams} from '../../../api/auth/types'
import {setLoading, removeLoading} from '../../../state/ajax/actions'

const SignUp: React.FC<SignUpProps> = (props: SignUpProps): JSX.Element => {
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

  const [signUpState, setSignUpState] = useState<SignUpDataTypes>({
    username: '',
    userID: '',
    email: '',
    password: ''
  })

  const inputElements: JSX.Element[] = inputData.map(data => {
    const type: string = INPUT_TEXT_STYLES.BORDER_BOTTOM
    const key: string = ''
    const onChangeText = (text: string, name: string) => {
      setSignUpState((prevState: SignUpDataTypes) => ({
        ...prevState,
        [name]: text
      }))
    }

    return (
      <View key={data.name}>
        <InputText type={type} name={data.name} value={signUpState[key]} placeholder={data.placeholder} isSecured={data.isSecured} onChangeText={onChangeText} />
      </View>
    )
  })

  const setLoadingDispatcher = useDispatch(setLoading, 'ajaxState')
  const removeLoadingDispatcher = useDispatch(removeLoading, 'ajaxState')

  const onSubmit = async () => {
    if (signUpState.email !== '' && signUpState.password !== '') {
      setLoadingDispatcher()
      const responseData: RNFirebase.UserCredential | void = await firebase
        .auth()
        .createUserWithEmailAndPassword(signUpState.email, signUpState.password)
        .then(response => response)
        .catch(error => {
          Alert.alert('The email is not allowed!', 'This email is already used. Please try again with another email', [{text: 'OK'}])
        })
      removeLoadingDispatcher()

      if ((responseData as RNFirebase.UserCredential).user.uid) {
        const params: SignUpParams = {
          username: signUpState.username,
          userID: signUpState.userID,
          uid: (responseData as RNFirebase.UserCredential).user.uid,
          email: signUpState.email
        }

        const response: string | void = await postSignUpApi(params)
        if (response) {
          Alert.alert('Complete Sign up!', '', [{text: 'OK'}])
        } else {
          AlertOnApiError()
        }
      } else {
        AlertOnApiError()
      }
    }
  }

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
