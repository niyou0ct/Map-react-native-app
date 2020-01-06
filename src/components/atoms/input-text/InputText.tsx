import React, {useState} from 'react'
import {TextInput, StyleSheet} from 'react-native'
import {InputTextProps} from './types'

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10
  }
})

const InputText: React.FC<InputTextProps> = (props: InputTextProps): JSX.Element => {
  const {onChangeText, onBlur}: InputTextProps = props

  return <TextInput style={styles.textInput} onChangeText={onChangeText} onBlur={onBlur} />
}

export default InputText
