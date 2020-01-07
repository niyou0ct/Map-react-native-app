import React, {useState} from 'react'
import {TextInput, StyleSheet} from 'react-native'
import {InputTextProps, INPUT_TEXT_STYLES} from './types'

const styles = StyleSheet.create({
  [INPUT_TEXT_STYLES.NORMAL]: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10
  },
  [INPUT_TEXT_STYLES.BORDER_BOTTOM]: {
    height: 40,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc'
  }
})

const InputText: React.FC<InputTextProps> = (props: InputTextProps): JSX.Element => {
  const {type, name, value, placeholder, onChangeText, onBlur}: InputTextProps = props
  const [valueState, setValue] = useState<string>(value)

  return (
    <TextInput
      style={(styles as any)[type]}
      value={valueState}
      placeholder={placeholder}
      placeholderTextColor="#a9a9a9"
      onChangeText={(text: string) => {
        if (onChangeText) {
          setValue(text)
          onChangeText(text, name)
        }
      }}
      onBlur={onBlur}
    />
  )
}

export default InputText
