import { useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import { ThemeProvider } from '@mui/material/styles'
import * as locales from '@mui/material/locale'
import { createTheme } from '@mui/material'
import { SnackbarProvider } from 'notistack'

import Home from 'screens/Home'
import useGlobalSettingsContext from './hooks/useGlobalSettingsContext'
import en from './i18n/en.json'
import es from './i18n/es.json'
import theme from './theme'
import Layout from './components/Layout'

type SupportedLocales = keyof typeof locales

function App() {
  const { currentLanguage } = useGlobalSettingsContext()

  i18next.init({
    fallbackLng: currentLanguage,
    interpolation: {
      escapeValue: false
    },
    lng: currentLanguage,
    resources: {
      enEN: { global: en },
      esES: { global: es }
    }
  })

  const themeWithLocale = useMemo(
    () => createTheme(theme, locales[currentLanguage as SupportedLocales]),
    [currentLanguage]
  )

  return (
    <SnackbarProvider maxSnack={2}>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={themeWithLocale}>
          <Layout>
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </I18nextProvider>
    </SnackbarProvider>
  )
}

export default App
