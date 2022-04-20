export const SET_NAME = 'SET_NAME'

export interface ILoginState {
  userName: string
}

export interface LoginAction {
  type: 'SET_NAME'
  payload: string
}

export const initialLoginState: ILoginState = {
  userName: 'Dante'
}

const userReducer = (state: ILoginState, action: LoginAction): ILoginState => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        userName: action.payload
      }

    default:
      return state
  }
}

export default userReducer
