import { render } from 'utils/testUtils'
import Footer from './Footer'

describe('<Footer>', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Footer />)

    expect(asFragment()).toMatchSnapshot()
  })
})
