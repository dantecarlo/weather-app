import { createContext, FC, useContext, useReducer } from 'react'
import useCombinedReducers from 'use-combined-reducers'
import useLocalStorage from '../hooks/useLocalStorage'
import languageReducer, { initialGlobalSettingsState } from './reducers/globalSettingsReducer'
import userReducer, { initialLoginState } from './reducers/userReducer'

const initialReducersState: any = undefined

export const DispatchContext = createContext(initialReducersState)
export const StateContext = createContext(initialReducersState)

type Props = {
  children?: React.ReactNode
}

export const ContextProvider: FC<Props> = ({ children }) => {
  const [languageState] = useLocalStorage('currentLanguage', initialGlobalSettingsState)

  const [state, dispatch] = useCombinedReducers({
    languageContext: useReducer(languageReducer as any, languageState),
    userContext: useReducer(userReducer as any, initialLoginState)
  })

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

ContextProvider.defaultProps = {
  children: []
}

export const useContextDispatch = () => useContext(DispatchContext)
export const useStateDispatch = () => useContext(StateContext)
