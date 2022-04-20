import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { drawerWidth, headerHeight } from 'utils/constants'

const StyledBody = styled(Box)(({ theme }) => ({
  flex: 1,
  height: `calc(100% - ${headerHeight}px)`,
  padding: theme.spacing(4),
  paddingBottom: theme.spacing(0),
  [theme.breakpoints.up('sm')]: {
    marginLeft: drawerWidth
  },
  [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(0)
  }
}))

export default StyledBody
