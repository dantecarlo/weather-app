import { render } from 'utils/testUtils'
import Layout from './Layout'

describe('<Layout>', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Layout />)

    expect(asFragment()).toMatchSnapshot()
  })
})
