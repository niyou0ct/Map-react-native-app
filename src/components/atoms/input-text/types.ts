import {MouseEvent} from 'react'

export type InputTextProps = {
  value: string
  onChangeText?: (text: string) => void
  onBlur?: () => void
}
