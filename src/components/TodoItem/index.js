import './index.css'

const TodoItem = props => {
  const {details, delete1} = props
  const {id, todo} = details
  const onDelete = () => {
    delete1(id)
  }

  return (
    <div>
      <ul className="todo-items-container" id="todoItemsContainer">
        <li className="todo-item-container d-flex flex-row" id={id}>
          {todo}
        </li>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </ul>
    </div>
  )
}

export default TodoItem
