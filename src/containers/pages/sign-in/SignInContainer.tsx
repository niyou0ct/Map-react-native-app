import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Dispatch} from 'redux'
import {RootState} from '../../../redux/types'
import {NavigationObj} from '../../../types'
import {SignInStateTypes, SignInDispatchTypes, SignInTypes} from './types'
import {SignInState, SignInParams} from '../../../redux/sign-in/types'
import {requestSignInApi} from '../../../redux/sign-in/action'
import SignIn from './SignIn'

const mapStateToProps = (): SignInStateTypes => {
  const signInState: SignInState = useSelector<RootState, SignInState>((state: RootState) => state.signInState)

  return {signInState}
}

const mapDispathToProps = (): SignInDispatchTypes => {
  const dispatch: Dispatch<any> = useDispatch()
  const activateSignInApi = useCallback(
    (payload: SignInParams): void => {
      dispatch(requestSignInApi(payload))
    },
    [dispatch]
  )

  return {activateSignInApi}
}

const SignInContainer = (props: NavigationObj): JSX.Element => {
  const data: SignInTypes = {
    ...props,
    ...mapStateToProps(),
    ...mapDispathToProps()
  }

  return <SignIn {...data} />
}

export default SignInContainer
