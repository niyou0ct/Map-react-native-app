import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {FormInputTextProps} from './types'
import InputText from '../../../atoms/input-text/InputText'

const styles = StyleSheet.create({
  formTitle: {fontSize: 16, marginBottom: 10}
})

const FormInputText: React.FC<FormInputTextProps> = (props: FormInputTextProps): JSX.Element => {
  const {title, input}: FormInputTextProps = props

  return (
    <View>
      <Text style={styles.formTitle}>{title}</Text>
      <InputText {...input} />
    </View>
  )
}

export default FormInputText
