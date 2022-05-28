import "../styles/todo.css";

const Todo = ({
  todos,
  todoEditing,
  editingTextInputHandler,
  editingText,
  deleteTodoHandler,
  toggleCompleteHandler,
  editTodoHandler,
  setTodoEditing,
}) => {
  return (
    <div className="todo-list-container">
      {todos.map((todo) => {
        return (
          <div className="todo-container" key={todo.id}>
            <div className="todo">
              {todoEditing === todo.id ? (
                <input
                className="todo-edit-input"
                  type="text"
                  onChange={editingTextInputHandler}
                  value={editingText}
                />
              ) : (
                <p className={todo.completed ? "strike" : ""}>{todo.text}</p>
              )}

              <input
              className="todo-checkbox"
                type="checkbox"
                onChange={() => toggleCompleteHandler(todo.id)}
                checked={todo.completed}
              />
            </div>

            <div>
              <button className="todo-buttons" onClick={() => deleteTodoHandler(todo.id)}>Delete</button>

              {todoEditing === todo.id ? (
                <button className="todo-buttons" onClick={() => editTodoHandler(todo.id)}>
                  Submit Edits
                </button>
              ) : (
                <button className="todo-buttons" onClick={() => setTodoEditing(todo.id)}>
                  Edit todo
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
