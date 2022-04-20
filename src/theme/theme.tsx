import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles/overrides' {}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize'
        }
      }
    }
  }
})

export default theme
