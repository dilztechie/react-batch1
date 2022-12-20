import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../components/counter/counter"

test("renders the landing page", () => { render(<Counter />) })

test("increments value", () => {
    render(<Counter />)
    const value = screen.getByTestId("value")
    const btnIncrement = screen.getByTestId("increment")
    fireEvent.click(btnIncrement)
    expect(value).toHaveTextContent("1")
    fireEvent.click(btnIncrement)
    expect(value).toHaveTextContent("2")
})

test("decrements value", () => {
    render(<Counter />)
    const value = screen.getByTestId("value")
    const btnDecrement = screen.getByTestId("decrement")
    fireEvent.click(btnDecrement)
    expect(value).toHaveTextContent("0")
    fireEvent.click(btnDecrement)
    expect(value).toHaveTextContent("0")
    const btnIncrement = screen.getByTestId("increment")
    fireEvent.click(btnIncrement)
    expect(value).toHaveTextContent("1")
    fireEvent.click(btnIncrement)
    expect(value).toHaveTextContent("2")
    fireEvent.click(btnDecrement)
    expect(value).toHaveTextContent("1")
    fireEvent.click(btnDecrement)
    expect(value).toHaveTextContent("0")
    fireEvent.click(btnDecrement)
    expect(value).toHaveTextContent("0")
})