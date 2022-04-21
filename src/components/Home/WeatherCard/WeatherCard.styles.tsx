import { Card } from '@mui/material'
import { styled } from '@mui/material/styles'

// eslint-disable-next-line import/prefer-default-export
export const StyledCardsContainer = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'grid',
  gap: theme.spacing(1),
  gridTemplateColumns: 'repeat(auto-fill, 1fr)'
}))
