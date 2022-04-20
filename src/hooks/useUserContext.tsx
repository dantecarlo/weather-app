import { useContextDispatch, useStateDispatch } from '../contexts/ContextProvider'
import { SET_NAME } from '../contexts/reducers/userReducer'

const useUserContext = () => {
  const {
    userContext: { userName }
  } = useStateDispatch()

  const dispatch = useContextDispatch()

  const setUserName = (newUserName: string) => {
    dispatch({
      type: SET_NAME,
      payload: newUserName
    })
  }

  return {
    userName,
    setLanguage: setUserName
  }
}

export default useUserContext
