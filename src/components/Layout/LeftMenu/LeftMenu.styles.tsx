import { Box, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import { OpenInNew as OpenInNewIcon } from '@mui/icons-material'

export const Root = styled(Box)({
  marginLeft: 'auto'
})

export const StyledOpenInNewIcon = styled(OpenInNewIcon)({
  fontSize: '1rem !important',
  bottom: -3,
  position: 'relative'
})

export const RightBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

export const RightBoxLink = styled(Link)(({ theme }) => ({
  color: `${theme.palette.common.white}9 !important`,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  '&:hover': {
    color: `${theme.palette.common.white} !important`
  },
  '&:last-child': {
    marginRight: `${theme.spacing(0)} !important`,
    paddingRight: theme.spacing(0)
  }
}))
