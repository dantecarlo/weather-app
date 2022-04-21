import { useState, useEffect } from 'react'
import { Menu as MenuIcon } from '@mui/icons-material'
import { CssBaseline, List, Theme, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import useUserContext from 'hooks/useUserContext'
import { routes } from 'utils/constants'

import useGlobalSettingsContext from 'hooks/useGlobalSettingsContext'
import LeftMenu from '../LeftMenu'
import {
  StyledContainer,
  StyledAppNameContainer,
  StyledDrawerContainer,
  StyledDrawerDesktop,
  StyledDrawerMobile,
  StyledAppName,
  LinkListContainer,
  StyledNameDisplay,
  StyledAppIcon,
  StyledRightBoxLink,
  StyledRightBoxLinkBox,
  StyledAppBar,
  StyledIconButton,
  StyledListItemButton,
  StyledListItemText,
  StyledNavLink,
  StyledStyledOpenInNewIcon,
  StyledToolbar,
  StyledWelcomeName,
  StyledDivider,
  StyledButton
} from './Header.styles'

const Header = () => {
  const navigate = useNavigate()
  const { userName } = useUserContext()
  const [t] = useTranslation('global')
  const { pathname } = useLocation()
  const { currentLanguage, setLanguage } = useGlobalSettingsContext()

  const isUpMd = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [isUpMd])

  const screens = [{ displayName: t('component.Header.home'), route: routes.home }]

  const linkList = [
    {
      displayName: t('component.Header.linkedIn'),
      href: 'https://www.linkedin.com/in/dantecnp/',
      external: true
    },
    {
      displayName: t('component.Header.github'),
      href: 'https://github.com/dantecarlo',
      external: true
    }
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleAppNameClick = () => {
    navigate(routes.home)
  }

  const handleButtonClick = () => {
    setLanguage(currentLanguage === 'enEN' ? 'esES' : 'enEN')
    // eslint-disable-next-line no-console
    console.log('currentLanguage', currentLanguage)
  }

  const drawer = (
    <div>
      <StyledToolbar />
      <List>
        {screens.map(({ displayName, route }, screenIndex) => {
          const navLinkKey = `link-key-${displayName}-${screenIndex}`

          return (
            <StyledListItemButton key={navLinkKey} isActive={pathname === route}>
              <StyledListItemText disableTypography>
                <StyledNavLink to={route} isActive={pathname === route}>
                  {displayName}
                </StyledNavLink>
              </StyledListItemText>
            </StyledListItemButton>
          )
        })}
        <LinkListContainer>
          {linkList.map(({ displayName, href, external }, linksIndex) => {
            const linkKey = `link-key-${displayName}-${linksIndex}`

            return (
              <StyledListItemButton key={linkKey}>
                <StyledListItemText disableTypography>
                  <StyledRightBoxLink
                    key={linkKey}
                    href={href}
                    rel="noopener"
                    target="_blank"
                    underline="none"
                    variant="button"
                  >
                    <StyledRightBoxLinkBox>
                      {displayName} {external && <StyledStyledOpenInNewIcon />}
                    </StyledRightBoxLinkBox>
                  </StyledRightBoxLink>
                </StyledListItemText>
              </StyledListItemButton>
            )
          })}
        </LinkListContainer>
        <StyledButton onClick={handleButtonClick} variant="outlined">
          <Typography variant="body2"> {t('component.Header.changeLang')} </Typography>
        </StyledButton>
      </List>
    </div>
  )

  return (
    <StyledContainer>
      <CssBaseline />
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <StyledAppNameContainer>
            <StyledIconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </StyledIconButton>
            <StyledNameDisplay onClick={() => handleAppNameClick()}>
              <StyledAppIcon />
              <StyledAppName variant="body1" noWrap>
                {t('common.appName')}
              </StyledAppName>
              <StyledDivider orientation="vertical" flexItem />
              <StyledWelcomeName variant="body1" noWrap>
                {t('component.Header.welcome')} {userName}
              </StyledWelcomeName>
            </StyledNameDisplay>
          </StyledAppNameContainer>
          <LeftMenu linkList={linkList} />
        </StyledToolbar>
      </StyledAppBar>

      <StyledDrawerContainer component="nav" aria-label="navigation">
        <StyledDrawerDesktop
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </StyledDrawerDesktop>
        <StyledDrawerMobile variant="permanent" open>
          {drawer}
        </StyledDrawerMobile>
      </StyledDrawerContainer>
    </StyledContainer>
  )
}

export default Header
