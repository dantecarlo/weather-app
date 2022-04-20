import { styled } from '@mui/material/styles'
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Typography,
  ListItemButton,
  ListItemText,
  Link,
  Divider
} from '@mui/material'
import { NavLink } from 'react-router-dom'
import {
  CloudCircleTwoTone as CloudCircleTwoToneIcon,
  OpenInNew as OpenInNewIcon
} from '@mui/icons-material'

import { drawerWidth, headerHeight } from 'utils/constants'

export const StyledContainer = styled(Box)({
  display: 'flex',
  height: `${headerHeight}px`
})

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: `${theme.zIndex.drawer + 1}`,
  height: `${headerHeight}`
}))

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  height: `${headerHeight}px`
})

export const StyledAppNameContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-start',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'space-between'
  }
}))

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(0.2),
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

export const StyledDrawerContainer = styled(Box)(({ theme }) => ({
  width: drawerWidth,
  [theme.breakpoints.up('sm')]: {
    flexShrink: '0'
  }
}))

export const StyledDrawerDesktop = styled(Drawer)(({ theme }) => ({
  height: `${headerHeight}px`,
  [theme.breakpoints.only('xs')]: {
    display: 'block'
  },
  [theme.breakpoints.only('sm')]: {
    display: 'none'
  },
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
}))

export const StyledDrawerMobile = styled(Drawer)(({ theme }) => ({
  height: `${headerHeight}px`,
  [theme.breakpoints.only('xs')]: {
    display: 'none'
  },
  [theme.breakpoints.only('sm')]: {
    display: 'block'
  },
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
}))

export const StyledNameDisplay = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(3)
}))

export const StyledAppIcon = styled(CloudCircleTwoToneIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(0.5)
}))

export const StyledAppName = styled(Typography)(({ theme }) => ({
  fontWeight: `${theme.typography.fontWeightBold}`,
  marginRight: theme.spacing(1)
}))

export const StyledWelcomeName = styled(Typography)(({ theme }) => ({
  fontWeight: `${theme.typography.fontWeightBold}`,
  marginLeft: theme.spacing(1)
}))

export const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.common.white
}))

interface StyledListItemButtonProps {
  isActive?: boolean
}

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isActive'
})<StyledListItemButtonProps>(({ theme, isActive }) => {
  const backgroundColor = isActive ? `${theme.palette.primary.main}38` : undefined
  const boxSizing = isActive ? 'border-box' : undefined
  const borderRight = isActive ? `5px solid ${theme.palette.primary.main}` : undefined
  const color = isActive ? `${theme.palette.primary.main}` : undefined

  return {
    root: {
      paddingLeft: `${theme.spacing(2.5)}`,
      '&:hover': {
        color: `${theme.palette.primary.main}`
      }
    },
    backgroundColor,
    boxSizing,
    borderRight,
    color
  }
})

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  fontWeight: `${theme.typography.fontWeightBold}`,
  height: `${theme.spacing(6)}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}))

interface StyledNavLinkProps {
  isActive?: boolean
}

export const StyledNavLink = styled(NavLink, {
  shouldForwardProp: (prop) => prop !== 'isActive'
})<StyledNavLinkProps>(({ theme, isActive }) => ({
  fontWeight: `${theme.typography.fontWeightBold}`,
  color: isActive ? theme.palette.text.primary : `${theme.palette.primary.main}`,
  textDecoration: 'none',
  '&:hover': {
    color: `${theme.palette.primary.main}`
  }
}))

export const LinkListContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

export const StyledRightBoxLink = styled(Link)(({ theme }) => ({
  fontWeight: `${theme.typography.fontWeightBold}`,
  marginRight: theme.spacing(5),
  '&:hover': {
    color: `${theme.palette.common.white}`
  }
}))

export const StyledRightBoxLinkBox = styled(Box)(({ theme }) => ({
  fontWeight: `${theme.typography.fontWeightBold}`,
  marginRight: theme.spacing(5),
  '&:hover': {
    color: `${theme.palette.common.white}`
  }
}))

export const StyledStyledOpenInNewIcon = styled(OpenInNewIcon)({
  fontSize: '1rem',
  bottom: -3,
  position: 'relative'
})
