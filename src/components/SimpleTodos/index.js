import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

class SimpleTodos extends Component {
  state = {todoList: [], todoText: ''}

  componentDidMount() {
    this.getTodosList()
  }

  delete1 = async id => {
    const url = `https://uday-todo-app.herokuapp.com/todos/${id}/`
    const options = {
      method: 'DELETE',
    }
    const response = await fetch(url, options)
  }

  addTodo = async () => {
    const {todoList, todoText} = this.state
    let todoCount = 1
    if (todoList.length !== 0) {
      const length1 = todoList.length
      todoCount = todoList[length1 - 1].id + 1
    }
    const newTodo = {
      id: todoCount,
      todo: todoText,
      isChecked: 'false',
    }

    const url = 'https://uday-todo-app.herokuapp.com/todos/'
    const options = {
      method: 'POST',
      body: JSON.stringify(newTodo),
    }

    const response = await fetch(url, options)
    console.log(response)
  }

  getTodosList = async () => {
    const url = 'https://uday-todo-app.herokuapp.com/todos/'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({todoList: data})
  }

  todoText = event => {
    this.setState({todoText: event.target.value})
  }

  render() {
    const {todoText, todoList} = this.state
    return (
      <div className="col-12">
        <h1 className="todos-heading">Todos</h1>
        <h1 className="create-task-heading">
          Create <span className="create-task-heading-subpart">Task</span>
        </h1>
        <input
          type="text"
          onChange={this.todoText}
          value={todoText}
          className="todo-user-input"
          placeholder="What needs to be done?"
        />
        <button
          className="button"
          id="addTodoButton"
          type="button"
          onClick={this.addTodo}
        >
          Add
        </button>
        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>

        {todoList.map(each => (
          <TodoItem key={each.id} details={each} delete1={this.delete1} />
        ))}
      </div>
    )
  }
}

export default SimpleTodos
