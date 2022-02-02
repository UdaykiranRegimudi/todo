import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, todo} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{todo}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
