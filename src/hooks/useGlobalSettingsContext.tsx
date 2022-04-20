import { useContextDispatch, useStateDispatch } from '../contexts/ContextProvider'
import {
  initialGlobalSettingsState,
  SET_LANGUAGE
} from '../contexts/reducers/globalSettingsReducer'
import useLocalStorage from './useLocalStorage'

const useGlobalSettingsContext = () => {
  const [, setLanguageLocalStore] = useLocalStorage('currentLanguage', initialGlobalSettingsState)

  const {
    languageContext: { currentLanguage }
  } = useStateDispatch()

  const dispatch = useContextDispatch()

  const setLanguage = (newLanguage: string) => {
    dispatch({
      type: SET_LANGUAGE,
      payload: newLanguage
    })
    setLanguageLocalStore({ currentLanguage: newLanguage })
  }

  return {
    currentLanguage,
    setLanguage
  }
}

export default useGlobalSettingsContext
