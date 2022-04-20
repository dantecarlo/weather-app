import { render } from 'utils/testUtils'
import Header from './Header'

describe('<Header>', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Header />)

    expect(asFragment()).toMatchSnapshot()
  })
})
