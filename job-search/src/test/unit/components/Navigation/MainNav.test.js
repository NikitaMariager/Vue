import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/Navigation/MainNav.vue'
describe('main nav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }

  it('displays company name', () => {
    renderMainNav()

    const companyName = screen.getByText('Bobo Careers')

    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    renderMainNav()
    screen.getAllByRole('listitem')
  })
})
