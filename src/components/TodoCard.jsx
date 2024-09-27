function TodoCard(props) {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;

  return (
    <>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button>
            <i
              onClick={() => handleEditTodo(index)}
              className="fa-solid fa-pen-to-square"
            ></i>
          </button>
          <button>
            <i
              onClick={() => handleDeleteTodo(index)}
              className="fa-solid fa-trash"
            ></i>
          </button>
        </div>
      </li>
    </>
  );
}

export default TodoCard;
