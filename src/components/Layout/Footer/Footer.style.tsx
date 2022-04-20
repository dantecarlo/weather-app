import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { footerHeight, drawerWidth } from '../../../utils/constants/constants'

export const StyledFooter = styled('footer')(({ theme }) => ({
  height: footerHeight,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.only('xs')]: {
    marginLeft: 0
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: drawerWidth
  }
}))

export const StyledFooterLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none'
}))

export const StyledFooterAnchor = styled('a')(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none'
}))
