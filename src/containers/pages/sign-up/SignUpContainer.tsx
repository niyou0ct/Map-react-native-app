import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Dispatch} from 'redux'
import {SignUpStateTypes, SignUpDispatchTypes, SignUpTypes} from './types'
import {RootState} from '../../../redux/types'
import {SignUpState, SignUpParams} from '../../../redux/sign-up/types'
import {requestSignUpApi} from '../../../redux/sign-up/action'
import {NavigationObj} from '../../../types'
import SignUp from './SignUp'

const mapStateToProps = (): SignUpStateTypes => {
  const signUpState: SignUpState = useSelector<RootState, SignUpState>((state: RootState) => state.signUpState)

  return {signUpState}
}

const mapDispathToProps = (): SignUpDispatchTypes => {
  const dispatch: Dispatch<any> = useDispatch()
  const activateSignUpApi = useCallback(
    (payload: SignUpParams): void => {
      dispatch(requestSignUpApi(payload))
    },
    [dispatch]
  )

  return {activateSignUpApi}
}

const SignUpContainer = (props: NavigationObj): JSX.Element => {
  const data: SignUpTypes = {
    ...props,
    ...mapStateToProps(),
    ...mapDispathToProps()
  }

  return <SignUp {...data} />
}

export default SignUpContainer
