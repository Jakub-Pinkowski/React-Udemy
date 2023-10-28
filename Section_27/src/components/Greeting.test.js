import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting />)
        // Act
        // ... nothing
        // Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false })
        expect(helloWorldElement).toBeInTheDocument()
    }),
    test('renders "good to see you" if the button was NOT clicked', () => {
        // Arrange
        render(<Greeting />)
        // Act
        // ... nothing
        // Assert
        const outputElement = screen.getByText('good to see you', { exact: false })
        expect(outputElement).toBeInTheDocument()
    })
})
