import React, {useState, useDispatch} from 'reactn'
import {View, Button} from 'react-native'
import {RNFirebase} from 'react-native-firebase'
import FacebookLoginButton from '../../../components/buttons/facebook-login/FacebookLoginButton'
import InputText from '../../../components/atoms/input-text/InputText'
import {InputTextProps, INPUT_TEXT_STYLES} from '../../../components/atoms/input-text/types'
import {SignInProps, SignInDataTypes} from './types'
import AlertOnApiError from '../../../modules/api-error-alert/ApiErrorAlert'
import BaseLayout from '../../organisms/layout/base/BaseLayout'
import Navigator from '../../../modules/navigator/Navigator'
import {postSignInApi} from '../../../api/auth/apis'
import {setLoading, removeLoading} from '../../../state/ajax/actions'

const SignIn: React.FC<SignInProps> = (props: SignInProps): JSX.Element => {
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
  const [signInState, setSignInState] = useState<SignInDataTypes>({
    email: '',
    password: ''
  })

  const {navigation} = props as any

  const inputElements: JSX.Element[] = inputData.map(data => {
    const type: string = INPUT_TEXT_STYLES.BORDER_BOTTOM
    const key: string = ''
    const onChangeText = (text: string, name: string) => {
      setSignInState((prevState: SignInDataTypes) => ({
        ...prevState,
        [name]: text
      }))
    }

    return (
      <View key={data.name}>
        <InputText type={type} name={data.name} value={signInState[key]} placeholder={data.placeholder} isSecured={data.isSecured} onChangeText={onChangeText} />
      </View>
    )
  })

  const setLoadingDispatcher = useDispatch(setLoading, 'ajaxState')
  const removeLoadingDispatcher = useDispatch(removeLoading, 'ajaxState')

  const onSubmit = async () => {
    if (signInState.email !== '' && signInState.password !== '') {
      setLoadingDispatcher()
      const response: RNFirebase.UserCredential | void = await postSignInApi(signInState)
      removeLoadingDispatcher()
      if (response) {
        Navigator({navigation, place: 'Home'})
      } else {
        AlertOnApiError()
      }
    } else {
      AlertOnApiError()
    }
  }

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
