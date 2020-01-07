export type InputTextProps = {
  type: string
  name: string
  value: string
  placeholder?: string
  onChangeText?: (text: string, name: string) => void
  onBlur?: () => void
}

// eslint-disable-next-line import/prefer-default-export
export enum INPUT_TEXT_STYLES {
  NORMAL = 'NORMAL',
  BORDER_BOTTOM = 'BORDER_BOTTOM'
}
