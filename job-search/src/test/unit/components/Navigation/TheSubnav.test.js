import { render, screen } from '@testing-library/vue'

import TheSubNav from '@/components/Navigation/TheSubNav.vue'
import { data } from 'autoprefixer'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

describe('TheSubnav', () => {
  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      render(TheSubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobresultsPage: true
          }
        }
      })
      const jobCount = screen.getByText('1653')

      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('does not display job count', () => {
      render(TheSubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobresultsPage: false
          }
        }
      })
      const jobCount = screen.queryByText('1653')

      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
