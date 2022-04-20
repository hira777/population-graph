import { render, screen } from '@testing-library/react'

import App from '../App'

test('should message exists', async () => {
  const message = 'Hello Vite + React!'

  render(<App />)

  expect(screen.getByText(message)).toBeInTheDocument()
})
