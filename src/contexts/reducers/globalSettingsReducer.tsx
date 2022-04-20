export const SET_LANGUAGE = 'SET_LANGUAGE'

export interface IGlobalSettingsState {
  currentLanguage: string
}

export interface GlobalSettingsAction {
  type: 'SET_LANGUAGE'
  // add more languages here e.g. 'enEN' | 'esES' | 'frFR'
  payload: 'enEN' | 'esES'
}

export const initialGlobalSettingsState: IGlobalSettingsState = {
  currentLanguage: 'enEN'
}

const languageReducer = (
  state: IGlobalSettingsState,
  action: GlobalSettingsAction
): IGlobalSettingsState => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload
      }

    default:
      return state
  }
}

export default languageReducer
