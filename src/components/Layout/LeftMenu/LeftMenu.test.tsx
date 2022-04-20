import { RenderResult } from '@testing-library/react'
import { get } from 'lodash'
import { render } from 'utils/testUtils'
import LeftMenu from './LeftMenu'

describe('<LeftMenu>', () => {
  let component: RenderResult

  const linkTestList = [
    {
      displayName: 'test1',
      href: '#test1',
      external: true
    },
    {
      displayName: 'test2',
      href: '#test2',
      external: true
    },
    {
      displayName: 'test3',
      href: '#test3',
      external: true
    }
  ]

  beforeEach(() => {
    component = render(<LeftMenu linkList={linkTestList} />)
  })

  test('renders correctly', () => {
    const { asFragment } = component

    expect(asFragment()).toMatchSnapshot()
  })

  test('render all links', () => {
    const { container } = component

    linkTestList.forEach((link) => {
      expect(container.innerHTML).toMatch(get(link, 'displayName'))
    })
  })
})
