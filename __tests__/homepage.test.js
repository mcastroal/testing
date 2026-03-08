import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe("Homepage Unit Tests", () => {

  test("renders the homepage component", () => {
    render(<Home />)
  })

  test("homepage contains text", () => {
    render(<Home />)
    const text = screen.getByText(/Custom Quizzes/i)
    expect(text).toBeInTheDocument()
  })

  test("homepage contains a button", () => {
    render(<Home />)
    const buttons = screen.getAllByRole("button")
    expect(buttons.length).toBeGreaterThan(0)
  })

  test("homepage renders without crashing", () => {
    const { container } = render(<Home />)
    expect(container).toBeTruthy()
  })

})