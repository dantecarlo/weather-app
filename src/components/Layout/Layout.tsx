import { FC } from 'react'
import Footer from './Footer'
import Header from './Header/index'
import StyledBody from './Layout.styles'

type Props = {
  children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => (
  <>
    <StyledBody>
      <Header />
      {children}
    </StyledBody>
    <Footer />
  </>
)

Layout.defaultProps = {
  children: []
}

export default Layout
