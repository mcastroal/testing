import { render, screen } from "@testing-library/react"
import LoginForm from '@/components/forms/LoginForm';

describe("Login Page Tests", () => {

  test("email and password inputs exist", () => {
    render(<LoginForm />)

    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })

})