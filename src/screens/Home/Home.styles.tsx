import { Paper, CircularProgress, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

// eslint-disable-next-line import/prefer-default-export
export const StyledHomeContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2)
}))

export const StyledSpinner = styled(CircularProgress)(({ theme }) => ({
  marginTop: theme.spacing(2)
}))

export const StyledCardsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: 'repeat(auto-fill, 345px)'
}))
