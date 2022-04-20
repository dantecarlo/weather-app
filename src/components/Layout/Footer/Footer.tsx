import { useTranslation } from 'react-i18next'
import { StyledFooterAnchor, StyledFooter, StyledFooterLabel } from './Footer.style'

const Footer = () => {
  const [t] = useTranslation('global')
  const currentYear = new Date().getFullYear()

  return (
    <StyledFooter>
      <StyledFooterLabel title={t('footerLabel')}>
        <StyledFooterAnchor href="https://www.linkedin.com/in/dantecnp/">
          {t('component.Footer.footerLabel', { currentYear })}{' '}
        </StyledFooterAnchor>
      </StyledFooterLabel>
    </StyledFooter>
  )
}

export default Footer
