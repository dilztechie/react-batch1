const { render, screen, fireEvent } = require("@testing-library/react")
const { default: Tasks } = require("../components/tasks/tasks")

test("renders the landing page", () => {
    render(<Tasks />)
})

test("task list", async () => {
    render(<Tasks />)
    const taskList = await screen.findAllByTestId("task")
    expect(taskList).toHaveLength(7)
})

test("add task", async () => {
    render(<Tasks />)
    const title = screen.getByTestId("title")
    const author = screen.getByTestId("author")
    const isCompleted = screen.getByTestId("isCompleted")
    const btnAddTask = screen.getByTestId("addTask")
    fireEvent.change(title, { target: { value: 'Cinema' } })
    fireEvent.change(author, { target: { value: 'sandy' } })
    fireEvent.change(isCompleted, { target: { value: false } })
    fireEvent.click(btnAddTask)
    const taskList = await screen.findAllByTestId("task")
    expect(taskList).toHaveLength(8)
})