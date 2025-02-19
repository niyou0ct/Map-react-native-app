import 'reactn'
import {RootState} from './state/types'

declare module 'reactn/default' {
  // export interface Reducers {
  //   append: (
  //     global: State,
  //     dispatch: Dispatch,
  //     ...strings: any[]
  //   ) => Pick<State, "value">;

  //   increment: (
  //     global: State,
  //     dispatch: Dispatch,
  //     i: number
  //   ) => Pick<State, "count">;

  //   doNothing: (global: State, dispatch: Dispatch) => null;
  // }

  export interface State extends RootState {
    count: number
    value: string
  }
}
