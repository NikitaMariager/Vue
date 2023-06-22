import { render, screen } from '@testing-library/vue'

import TheHeadline from '@/components/TheHeadline.vue'
import { vi } from 'vitest'

describe('TheHeadline', () => {
  it('displays introductory action verb', () => {
    vi.useFakeTimers()
    render(TheHeadline)

    const actionPhrase = screen.getByRole('heading', {
      name: /Build for everyone/i
    })
    expect(actionPhrase).toBeInTheDocument()
    vi.useRealTimers()
  })
})
