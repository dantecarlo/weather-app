import { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'

import en from '../i18n/en.json'
import es from '../i18n/es.json'
import theme from '../theme'
import { ContextProvider } from '../contexts/ContextProvider'

i18next.init({
  fallbackLng: 'enEN',
  interpolation: {
    escapeValue: false
  },
  lng: 'enEN',
  resources: {
    enEN: { global: en },
    esES: { global: es }
  }
})

type Props = {
  children?: React.ReactNode
}

const AllTheProviders: FC<Props> = ({ children }) => (
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <ContextProvider>{children}</ContextProvider>
      </ThemeProvider>
    </I18nextProvider>
  </BrowserRouter>
)

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options
  })

AllTheProviders.defaultProps = {
  children: []
}

export * from '@testing-library/react'

export { customRender as render }
