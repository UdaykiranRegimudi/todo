import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

class SimpleTodos extends Component {
  state = {
    todosList: [],
    addText: '',
  }

  componentDidMount() {
    this.getTodos()
  }

  getTodos = async () => {
    const url = 'https://uday-fullstack.herokuapp.com/todos'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({todosList: data})
  }

  text = event => {
    this.setState({addText: event.target.value})
  }

  deleteTodo = async id => {
    const url = `https://uday-fullstack.herokuapp.com/todos/${id}`
    const options = {
      method: 'DELETE',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    this.getTodos()
  }

  addTodo = async event => {
    const {todosList, addText} = this.state
    const id1 = todosList[todosList.length - 1].id + 1
    if (event.key === 'Enter') {
      const url = 'http://uday-fullstack.herokuapp.com/todos/'
      const newTodo = {
        id: id1,
        todo: addText,
        isChecked: false,
      }
      console.log(newTodo)
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(newTodo),
      }

      const response = await fetch(url, options)
      const data = await response.json()
      this.getTodos()
    }
  }

  render() {
    const {todosList, addText} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <input
            type="text"
            value={addText}
            onChange={this.text}
            onKeyPress={this.addTodo}
          />
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
