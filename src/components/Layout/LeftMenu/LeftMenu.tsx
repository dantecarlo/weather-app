import { FC } from 'react'

import { RightBox, RightBoxLink, Root, StyledOpenInNewIcon } from './LeftMenu.styles'
import { ILeftMenu } from './LeftMenu.types'

const LeftMenu: FC<ILeftMenu> = (props) => {
  const { linkList } = props

  return (
    <Root>
      <RightBox>
        {linkList.map(({ displayName, href, external }, index) => {
          const linkKey = `link-key-${displayName}-${index}`

          return (
            <RightBoxLink
              key={linkKey}
              href={href}
              rel="noopener"
              target="_blank"
              underline="none"
              variant="button"
            >
              {displayName} {external && <StyledOpenInNewIcon />}
            </RightBoxLink>
          )
        })}
      </RightBox>
    </Root>
  )
}

export default LeftMenu
